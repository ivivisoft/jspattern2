/**
 * @author andy on 17-7-6.
 */

describe('factory pattern', function () {
    it('make some cars', function () {
        var corolla = CarMaker.factory('Compact');
        corolla.drive();
        var solstice = CarMaker.factory('Convertible');
        solstice.drive();
        var cherokee = CarMaker.factory('SUV');
        cherokee.drive();
        expect(corolla.doors).toEqual(4);
        expect(solstice.doors).toEqual(2);
        expect(cherokee.doors).toEqual(24);
    });
});
