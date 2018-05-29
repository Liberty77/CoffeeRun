(function(window) {
    'use strict'

    var FORM_SELECTTOR = '[data-coffee-order="form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;

    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;

    var formHandler = new FormHandler(FORM_SELECTTOR);
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));

})(window)