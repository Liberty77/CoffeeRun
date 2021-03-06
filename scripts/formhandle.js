(function(window) {

    'use strict'
    var App = window.APP || {};
    var $ = window.jQuery;

    function FormHandle(selector) {
        if(!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        if(this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandle.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();
            var data = $(this).serializeArray();
            console.log(data);
            fn(data)
        })
    }

    App.FormHandle = FormHandle;
    window.App = App;
})(window)