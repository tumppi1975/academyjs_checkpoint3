const request = require('supertest');
const app = require('../app');
const colormodel = require('../src/colormodel');
const Color = require('../src/color').Kirja;

const baseurl = '/api/colors';

test("/api/colors palauttaa vähintään yhden värin", (done) => {
    return request(app)
        .get(baseurl).then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body.length).toBeGreaterThanOrEqual(1);
            done();
        });
});

test('GET /:varinimi palauttaa värin', () => {
    const colorname = "red";
    return request(app)
        .get(`${baseurl}/${colorname}`).then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toBeDefined();
            const color = response.body;
            expect(color.name).toMatch(/red/i);
            expect(color.hex).toEqual('#ff0000');
            expect(color.custom).toBe(false);
        });
});
test('GET /:varinimi palauttaa 404 olemattomalla värillä', () => {
    const id = "ABC";
    return request(app)
        .get(`${baseurl}/${id}`).then(response => {
            expect(response.statusCode).toBe(404);
        });
});
test('POST validilla värillä toimii oikein', () => {
    const uusiväri = {
        "name": "punainen",
        "hex": "#fe0010",
        "rgb": [254, 0, 16],
        "custom": true
    };
    const expectedHeader = new RegExp(`${baseurl}/${uusiväri.name}$`);
    return request(app)
        .post(baseurl).send(uusiväri)
        .expect('Location', expectedHeader)
        .then(response => {
            expect(response.statusCode).toBe(201);
            const c = response.body;
            expect(c.name).toEqual(uusiväri.name);
        });

});