/**
 * @author root on 7/9/17.
 */

describe('iteration pattern', function () {
    it('iteration base function', function () {
        expect(agg.next()).toEqual(1);
        expect(agg.hasNext()).toBeTruthy();
        agg.next();
        agg.rewind();
        expect(agg.current()).toEqual(1);
    });
});