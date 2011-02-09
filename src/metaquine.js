/*jslint white: true, onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, devel: true, browser: true, maxerr: 50, indent: 4 */

(function () {

    var log, Metaquine;

    log = function () {
        if (window.console) {
            console.log(Array.prototype.slice.call(arguments));
        }
    };

    Metaquine.prototype = function () {

    };

    Metaquine.prototype.procedures = {

        '+': function () {
            return 0;
        },

        '-': function () {
            return 0;
        },

        '*': function () {
            return 0;
        },

        '/': function () {
            return 0;
        }

    };

    // Extend the procedures object with the given procedures. Replace
    // if a procedure with the same name exists already
    Metaquine.prototype.extend = function (procedures) {
        var procedure;
        for (procedure in procedures) {
            if (procedures.hasOwnProperty(procedure)) {
                this.procedures[procedure] = procedures[procedure];
            }
        }
    };

    // Parse the given string into an s-expression.
    Metaquine.prototype.parse = function (s) {
        return [];
    };

    // Evaluate the given s-expression.
    Metaquine.prototype.eval = function (expression) {
        return null;
    };

    // Execute the given string of an s-expression.
    Metaquine.prototype.exec = function (s) {
        // TODO: take environment object as an argument
        return this.eval(this.parse(s));
    };

    // Expose the Metaquine function prototype.
    window.Metaquine = Metaquine;

}());
