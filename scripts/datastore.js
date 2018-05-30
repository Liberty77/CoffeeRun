(function(window) {
    'use strict';

    var App = window.App || {}; //声明的一个本地变量

    function DataStore() {

        this.data = {};

    }

    DataStoregit.prototype.add = function(key, val) {
        this.data[key] = val;
    }

    DataStore.prototype.get = function(key) {
        return this.data[key];
    }

    DataStore.prototype.getAll = function() {
        return this.data;
    }

    DataStore.prototype.remove = function() {
        delete this.data[key];
    }

    App.DataStore = DataStore; //赋值给全局变量
    window.App = App;

})(window);