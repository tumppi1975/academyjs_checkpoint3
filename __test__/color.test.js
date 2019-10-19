
const Color = require('../src/color').Color;

describe('color creation tests', () => {
    it('Creates a color with proper values', ()=> {
        const c = new Color('lorem', '#111010', [17, 16, 16], true);
        expect(c).toBeDefined();
    });
    it('Creates a custom color only with hex value', () => {
        const c = new Color('lorem', '#111213');
        expect(c.hex).toEqual('#111213');
        expect(c.custom).toBe(true);
        expect(c.rgb).toEqual([17, 18, 19]);
    });
    it('throws an error if color name is missing', () => {
        expect(()=>new Color()).toThrow();
    })
    it('throws an error if both hex and rgb are missing', () => {
        expect(()=>new Color('forest green')).toThrow();
    })
});