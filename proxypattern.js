/**
 * @author root on 17-7-10.
 */


var http = {
    makeRequest: function (ids, callback) {
        console.log(ids);
        callback(this);
    }
};

var proxy = {
    ids: [],
    delay: 50,
    timeout: null,
    callback: null,
    context: null,
    makeRequest: function (id, callback, context) {
        this.ids.push(id);
        this.callback = callback;
        this.context = context;
        if (!this.timeout) {
            this.timeout = setTimeout(function () {
                proxy.flush();
            }, this.delay);
        }
    },
    flush: function () {
        http.makeRequest(this.ids, "proxy.handler");
        this.timeout = null;
        this.ids = [];
    },
    handler: function (data) {
        proxy.callback.call(proxy.context, arguments);
    }
};
