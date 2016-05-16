/*
The MIT License (MIT)

Copyright (c) 2016 Gonzalo Cervantes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Version 1.02
// github.com/cervgon/textshadow

function insertHTML(){
    $('textshadow').each(function(){

        var content = $(this).html();
        var shadow = '';
        var html  = '<span ';

        $.each(this.attributes, function() {
            if( this.name != 'shadowcolor' && this.name != 'shadows' && this.name != 'opacity' && this.name != 'blur' && this.name != 'angle' && this.name != 'style'){
                console.log(this.name, this.value);
                html += this.name+'="'+this.value+'" ';
            }
        });

        // shadowcolor
        var shadowcolor = $(this).attr("shadowcolor");
        if(shadowcolor ==null || shadowcolor ==undefined){shadowcolor= '#EEE'}

        var blur = $(this).attr("blur");
        if(blur ==null || blur ==undefined){blur= '0'}

        html += 'style="';
        var styles = $(this).attr('style');
        if(styles !=null || styles !=undefined){
            var last = styles.substr(styles.length - 1);
            if(last == ';'){
                styles = styles.substr(0, styles.length - 1);
            }
            html += styles+'; ';
        }

        // angle
        var angle = $(this).attr("angle");
        var anglex = 1;
        var angley = 1;
        if(angle !=null || angle !=undefined){
            var radians = angle * (Math.PI/180)
            anglex = Math.cos(radians);
            angley = Math.sin(radians);
        }

        // shadows
        var numberOfShadows = $(this).attr("shadows");
        if(numberOfShadows ==null || numberOfShadows ==undefined){
            var c;
            if(angley<anglex){c=angley}
            else{c=anglex}
            if(c<0.5){c=0.5}
            numberOfShadows = $(this).parent().height()/c;
        }

        for (var i = 0; i<numberOfShadows; i++) {
            shadow += i*anglex +'px '+ i*angley +'px '+blur+'px ' + shadowcolor +', ';
        };
        shadow = shadow.substring(0, shadow.length-2);
        
        // opacity
        var opacity = $(this).attr("opacity");
        if(opacity){
            html += 'position:relative; display:block; height:'+$(this).height()+'px"><span style="position:absolute; top:0; left:0">'+content+'</span><span style="position:absolute; top:0; left:0; text-shadow:'+shadow+';opacity:'+opacity+'">'+content+'</span>';
        }
        else{
            html += 'text-shadow:'+shadow+'">';
            html += content;   
        }
        html += '</span>';

        $(this).replaceWith(html);
    });
}

function loadJQ() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    var i = 0;
    var timer = setInterval(function(){
      if(window.jQuery) {
        insertHTML();
        clearInterval(timer);
      }
      else{
        i++;
        if(i>100){
            clearInterval(timer);
            console.error("This is taking too much.. :(");
        }
      };
    },50);
};

document.addEventListener("DOMContentLoaded", function(event) { 
    // Check if jQuery is loaded.
    if(!window.jQuery) {
        // Load jQuery
        loadJQ();
    }
    else{
    	insertHTML();
    }
});


