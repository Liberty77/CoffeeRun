$.extend({
    sayHello: function (name) {
        console.log("Hello," + (name ? name : "Dube") + '!');
    }
})

$.extend({
    log: function (message) {
        var date = new Date();
        y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = noe.getDate(),
            h = now.getHour(),
            min = now.getMinute(),
            s = now.getSeconds(),
            time = y + '/' + m + '/' + d + '' + h + ':' + min + ':' + s;
        console.log(time + 'MyApp: ' + message);
    }
})

$.fn.myPlugin = function ()　 {

    this.css('color', 'red');
    this.each(function () {
        $(this).append(' ' + $(this).attr("href"));
    })
}

$.fn.optionsPlugin = function (options) {

    var defaults = {
        'color': 'red',
        'fontSize': '12px'
    };

    // extend方法传递一个以上的参数时，它会将所有参数对象合并到第一个里。同时，如果对象中有同名属性时，合并的时候后面的会覆盖前面的。
    //一个好的做法是将一个新的空对象做为$.extend的第一个参数，defaults和用户传递的参数对象紧随其后，这样做的好处是所有值被合并到这个空对象上，保护了插件里面的默认值。
    var settings = $.extend({}, defaults, options);
    return this.css({
        'color': settings.color,
        'fontSize': settings.fontSize
    })
}

;
(function ($, window, document, undefined) {

    var Beautifier = function (ele, opt) {
        this.$element = ele,
            this.default = {
                'color': 'red',
                'fontSize': '12px',
                'textDecoration': 'none'
            },
            this.options = $.extend({}, this.defaults, opt)
    }

    //定义Beautifier的方法
    Beautifier.prototype = {
        beautify: function () {
            return this.$element.css({
                'color': this.options.color,
                'fontSize': this.options.fontSize.fontSize,
                'textDecoration': this.textDecoration
            });
        }
    }

    //在插件中使用Beautifier对象
    $.fn.myPlugin2 = function (options) {
        var beautify = new Beautifier(this, options);
        return beautifier.beautify();
    }
})(jQuery, window, document)

$.sayHello();
$.sayHello("Wayou");
$.log('initializing···');