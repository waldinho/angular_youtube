

(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>Testing angular live load</h1><p>It works!</p><div id="data"></div>'
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
