/*jslint white: true, onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, devel: true, browser: true, maxerr: 50, indent: 4 */
/*global window: false, Metaquine: false, $: false, module: false, test: false, expect: false, equals: false */

$(function () {

    module('Metaquine');

    test('Function prototype is provided.', function () {
        expect(1);
        equals(typeof Metaquine, 'function', 'Metaquine function should be provided.');
    });

});
