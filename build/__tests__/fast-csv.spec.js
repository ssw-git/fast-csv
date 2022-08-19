"use strict";
exports.__esModule = true;
var csvFormat = require("@fast-csv/format");
var csv = require("../src");
describe('formatting function', function () {
    describe('format', function () {
        it('should expose the format function', function () {
            expect(csv.format).toBe(csvFormat.format);
        });
    });
});
