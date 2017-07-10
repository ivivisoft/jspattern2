/**
 * @author root on 17-7-9.
 */

/**
 *
 * @constructor
 * @param {Number} price
 * @see jasmine test
 */
function Sale(price) {
    this.price = price || 100;
}
Sale.prototype.getPrice = function () {
    return this.price;
};


Sale.decortors = {};

Sale.decortors.fedtax = {
    getPrice: function () {
        var price = this.uber.getPrice();
        price += price * 5 / 100;
        return price;
    }
};

Sale.decortors.quebec = {
    getPrice: function () {
        var price = this.uber.getPrice();
        price += price * 7.5 / 100;
        return price;
    }
};

Sale.decortors.money = {
    getPrice: function () {
        return "$" + this.uber.getPrice().toFixed(2);
    }
};

Sale.decortors.cdn = {
    getPrice: function () {
        return "CDN$" + this.uber.getPrice().toFixed(2);
    }
};


Sale.prototype.decorate = function (decorator) {
    var F = function () {},
        overrides = this.constructor.decortors[decorator],
        i, newObj;
    F.prototype = this;
    newObj = new F();
    newObj.uber = F.prototype;
    for (i in overrides) {
        if (overrides.hasOwnProperty(i)) {
            newObj[i] = overrides[i];
        }
    }
    return newObj;
};

