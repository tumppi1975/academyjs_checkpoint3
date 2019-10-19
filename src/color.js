class Color {
    constructor(name, hex, rgb, custom) {
        if (typeof name !== 'string') {
            throw new Error('Color must have a name of type string');
        }
        if (typeof hex === 'undefined' && typeof rgb === 'undefined') {
            throw new Error('Color values must be defined');
        }
        this.name = name;
        this.hex = hex || `#${rgb[0].toString(16)}${rgb[1].toString(16)}${rgb[2].toString(16)}`;
        this.rgb = rgb || [parseInt(hex.substring(1,3), 16),parseInt(hex.substring(3,5), 16),parseInt(hex.substring(5), 16)];
        this.custom = typeof custom === 'undefined' ? true : custom;
    }
}

module.exports.Color = Color;
