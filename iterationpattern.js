/**
 * @author root on 7/9/17.
 */

var agg = (function () {
    var index = 0,
        data = [1, 2, 3, 4, 5],
        length = data.length;

    return {
        //return next element
        next: function () {
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index += 1;
            return element;
        },
        //check has next element or not
        hasNext: function () {
            return index < length;
        },
        //reset the index to init
        rewind: function () {
            index = 0;
        },
        //return the current index
        current: function () {
            return data[index];
        }
    }
}());
