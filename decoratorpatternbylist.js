/**
 * @author root on 17-7-9.
 */

/**
 *
 * @param price
 * @constructor
 * @see jasmine test
 */
function SaleYet(price) {
    this.price = price || 100;
    this.decorators_list = [];
}

SaleYet.prototype.decorate = function (decorator) {
    this.decorators_list.push(decorator);
};
SaleYet.prototype.getPrice = function () {
    var price = this.price,
        i, max = this.decorators_list.length,
        name;
    for (i = 0; i < max; i += 1) {
        name = this.decorators_list[i];
        price = SaleYet.decortors[name].getPrice(price);
    }
    return price;
};

SaleYet.decortors = {};

SaleYet.decortors.fedtax = {
    getPrice: function (price) {
        return price + price * 5 / 100;
    }
};

SaleYet.decortors.quebec = {
    getPrice: function (price) {
        return price + price * 7.5 / 100;
    }
};

SaleYet.decortors.money = {
    getPrice: function (price) {
        return "$" + price.toFixed(2);
    }
};

SaleYet.decortors.cdn = {
    getPrice: function (price) {
        return "CDN$" + price.toFixed(2);
    }
};
