/*jslint white: true, onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, devel: true, browser: true, maxerr: 50, indent: 4 */
/*global window: false, Metaquine: false, $: false, module: false, test: false, expect: false, equals: false */

$(function () {

    module('Metaquine');

    test('Function prototype is provided.', function () {
        expect(1);
        equals(typeof Metaquine, 'function', 'Metaquine function should be provided.');
    });

    test('Provided procedures.', function () {
        var meta, procedures, i, procedure, len;
        meta = new Metaquine();
        procedures = ['+', '-', '*', '/'];
        expect(procedures.length + 1);

        for (i = 0; i < procedures.length; i += 1) {
            equals(typeof meta.procedures[procedures[i]], 'function',
                   'Function ' + procedures[i] + ' should be provided.');
        }

        len = 0;
        for (procedure in meta.procedures) {
            if (meta.procedures.hasOwnProperty(procedure)) {
                len += 1;
            }
        }
        equals(len, procedures.length,
               'All the tested and only the tested procedures should be provided.');
    });

});
