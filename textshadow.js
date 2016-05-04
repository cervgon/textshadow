// copyright 2016 Gonzalo Cervantes
function insertHTML(){
    $('textshadow').each(function(){

        var content = $(this).html();
        var shadow = '';
        var html  = '<span ';

        // shadowcolor
        var shadowcolor = $(this).attr("shadowcolor");
        if(shadowcolor ==null || shadowcolor ==undefined){shadowcolor= '#EEE'}

        var blur = $(this).attr("blur");
        if(blur ==null || blur ==undefined){blur= '0'}
        
        var classes = $(this).attr('class');
        if(classes !=null || classes !=undefined){
            html += ' class="'+classes+'" ';
        }
        var ids = $(this).attr('id');
        if(ids !=null || ids !=undefined){
            html += ' id="'+ids+'" ';
        }

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
    //console.log('The html has been loaded!');
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
	// Load CSS
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'textshadow.css';
    link.media = 'all';
    head.appendChild(link);

    // Check if jQuery is loaded.
    if(!window.jQuery) {
        // Load jQuery
        //console.log('Loading jQuery..');
        loadJQ();
    }
    else{
    	//console.log('jQuery is loaded!');
    	insertHTML();
    }
});

