
(function(window) {
    'use strict';

    var App = window.App || {};  //声明的一个本地变量

    function DataStore() {

    }

    App.DataStore = DataStore;    //赋值给全局变量
    window.App = App;

})(window);