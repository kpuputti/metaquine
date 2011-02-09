Metaquine Lisp interpreter
==========================

Metaquine is a Lisp interpreter written in Javascript.

Author: Kimmo Puputti <kpuputti at gmail>

Project directory structure
---------------------------

::

    .
    |-- README.rst
    `-- src
        |-- client
        |   |-- browserclient.html
        |   `-- browserclient.js
        |-- Makefile
        |-- metaquine.js
        |-- metaquine.min.js
        `-- tests
            |-- qunit
            |   |-- qunit.css
            |   `-- qunit.js
            |-- tests.html
            `-- tests.js

Testing
-------

The test suite is written using QUnit ( http://docs.jquery.com/Qunit
). The suite can be run by opening the
${PROJECT_ROOT}/src/tests/tests.html file in a browser.
