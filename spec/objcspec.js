/**
 * @author andy on 6/29/17.
 */

describe('ObjectCreate', function () {
    it('object create namespace util', function () {
        var result = MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property');
        expect(result).toEqual(MYAPP.once.upon.a.time.there.was.this.long.nested.property);
    });
    it('object create by module pattern', function () {
        var array = [1, 2, 3];
        expect(MYAPP.utilities.array.isArray(array)).toBeTruthy();
        expect(MYAPP.utilities.array.inArray(3, array)).toBeTruthy();
    });
    it('object create by revelation pattern', function () {
        var array = [1, 2, 3];
        expect(MYAPP.utilities.revelation.array.inArray(1, array)).toBeTruthy();
        expect(MYAPP.utilities.revelation.array.isArray(array)).toBeTruthy();
    });
    it('object create by constructor pattern', function () {
        var array = [1, 2, 3];
        var newArray = new MYAPP.utilities.constructor.array(array);
        console.log('new Array is:', newArray.elements);
        expect(MYAPP.utilities.revelation.array.isArray(newArray.elements)).toBeTruthy();
    });
});
