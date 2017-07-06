/**
 * @author andy on 6/29/17.
 */

describe("func",function () {
    it("test function curry",function () {
        var add = function (a, b, c) {
            return a+b+c;
        };
        var result = schonfinkelize(add,10)(10,10);
        expect(result).toEqual(30);
    });
    it('test function memo pattern',function () {
        expect(function () {
            funCachePattern(1,2,3);
            funCachePattern(3,24,3);
            funCachePattern(1,2,3);
        }).not.toThrowError();
    })
});
