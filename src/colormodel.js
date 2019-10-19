const Color = require('./color').Color;

let colortable = [
    // red colors
    new Color('red', '#ff0000', [255, 0, 0], false),
    new Color('crimson', '#dc143c', [220, 20, 60], false),
    new Color('salmon', '#fa8072', [250, 128, 114], false),
    // green colors
    new Color('green', '#008000', [0, 128, 0], false),
    new Color('lime', '#00ff00', [0, 255, 0], false),
    new Color('lightgreen', '#90ee90', [144, 238, 144], false),
    new Color('darkgreen', '#006400', [0, 100, 0], false),
    new Color('olive', '#808000', [128, 128, 0], false),
    // blue colors
    new Color('blue', '#0000ff', [0, 0, 255], false),
    new Color('steelblue', '#4682b4', [70, 130, 180], false),
    new Color('lightblue', '#add8e6', [173, 216, 230], false),
    new Color('darkblue', '#00008b', [0, 0, 139], false),
    new Color('aqua', '#00ffff', [0, 255, 255], false),
    new Color('navy', '#000080', [0, 0, 128], false),
    // white colors
    new Color('white', '#ffffff', [255, 255, 255], false),
    new Color('ghostwhite', '#f8f8ff', [248, 248, 255], false),
    new Color('antiquewhite', '#faebd7', [250, 235, 215], false),
    new Color('ivory', '#fffff0', [255, 255, 240], false),
    // custom
    new Color('mycolor', '#cafe66', [202, 254, 102], true),
    new Color('academygreen', '#049a78', [4, 154, 120], true),
];


function colors() {
    return colortable;
}

function colorWithName(name) {
    for (vari of colortable) {
        if (name === vari.name) {
            return vari;
        }
    }
}

function addColor(newColor) {
    if (colorWithName(newColor.name)) {
        throw new Error(`Color name ${newColor.name} already exists!`);
    }
    colortable.push(newColor);
    return newColor.name;
}

function deleteColor(name) {
    for( let i = 0; i < colortable.length; ++i){
        if ( colortable[i].name === name) {
            return colortable.splice(i, 1);
        }
    }
}

module.exports = {colors, colorWithName, addColor, deleteColor};