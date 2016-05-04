# TextShadow

Javascript plugin that allows you to create flat shadows easily.

## Instrutions

Paste in your page head the following:

`<script src="github.io/cervgon/textShadowJS/textShadow.js"></script>`

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

#### angle (degrees)
Shadow direction.
Default value: 45.

`<textshadow angle="60" shadowcolor="#fcc">B</textshadow>`

#### shadows (number)
Number of shadows to render.
Default value: parent height.

`<textshadow shadows="20" angle="60" shadowcolor="#fcc">C</textshadow>`

#### opacity (float number between 0 to 1)
`<textshadow opacity="0.4" shadowcolor="#000">D</textshadow>`

#### blur

`<textshadow blur="20" shadowcolor="#fcc" shadows="20" style="color:#fff">E</textshadow>`

## ToDo
- Add more options.


## License

Creative Commons

Made with ♥ for the people of the internet