# TextShadow

Javascript plugin that allows you to create flat shadows easily.

## Instrutions

Paste this in your page:

`<script src="https://cdn.rawgit.com/cervgon/textshadow/master/textshadow.min.js"></script>`

## Use

### Create the tag:

`<textshadow>Sample Text</textshadow>`  

### Parameters

#### shadowcolor (html color)
Could be a HEX, RGB, RGBA, HSL or HSLA value.
Default value: #EEE;

- HEX: `<textshadow shadowcolor="#fcc">A</textshadow>`

- RGBA: `<textshadow shadowcolor="rgba(255,204,204,0)">A</textshadow>`

- HSLA: `<textshadow shadowcolor="hsla(0,100%,90%,1)">A</textshadow>`

E.g:

![alt tag](https://raw.githubusercontent.com/cervgon/textshadow/master/examples/img/a_shadowcolor.png)


#### angle (degrees)
Shadow direction.
Default value: 45.

`<textshadow angle="60" shadowcolor="#fcc">B</textshadow>`

E.g:

![alt tag](https://raw.githubusercontent.com/cervgon/textshadow/master/examples/img/b_angle.png)


#### shadows (number)
Number of shadows to render.
Default value: parent height.

`<textshadow shadows="20" angle="60" shadowcolor="#fcc">C</textshadow>`

E.g:

![alt tag](https://raw.githubusercontent.com/cervgon/textshadow/master/examples/img/c_shadows.png)


#### opacity (float number between 0 to 1)
`<textshadow opacity="0.4" shadowcolor="#000">D</textshadow>`

E.g:

![alt tag](https://raw.githubusercontent.com/cervgon/textshadow/master/examples/img/d_opacity.png)


#### blur

`<textshadow blur="20" shadowcolor="#fcc" shadows="20" style="color:#fff">E</textshadow>`

E.g:

![alt tag](https://raw.githubusercontent.com/cervgon/textshadow/master/examples/img/e_blur.png)


#### repeat

`<textshadow repeat="3" shadows="21" shadowcolor="#000" style="color:#000">F</textshadow>`

E.g:

![alt tag](https://raw.githubusercontent.com/cervgon/textshadow/master/examples/img/f_repeat.png)


#### endColor

Both, shadowcolor and endcolor must be rgb.
It will accept every type of color in further versions.

`<textshadow shadows="40" shadowcolor="rgb(2,172,181)" endcolor="rgb(26,255,213)">G</textshadow>`

E.g:

![alt tag](https://raw.githubusercontent.com/cervgon/textshadow/master/examples/img/g_endcolor.png)


#### Example

`<div style="background-color:#333; padding:50px; overflow:hidden;">
	<textshadow shadowcolor="#000" angle="135" style="color:#fff; font-size:100px; line-height: 0.9em; font-weight:bold">THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG</textshadow>
</div>`
![alt tag](https://raw.githubusercontent.com/cervgon/textshadow/master/examples/img/example.png)


## ToDo
- Add more options.


## License

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

Made with ♥ for the people of the internet
