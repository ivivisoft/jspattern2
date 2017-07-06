/**
 * @author andy on 7/4/17.
 */

describe('single case', function () {
    it('static attribute save instance but everyone can change it', function () {
        var uni = new Universe();
        var uni2 = new Universe();
        expect(uni === uni2).toBeTruthy();
    });
    it('self-defining implements single case', function () {
        UniverseYet.prototype.nothing = true;
        var uni = new UniverseYet();
        UniverseYet.prototype.everything = true;
        var uni2 = new UniverseYet();
        expect(uni === uni2).toBeTruthy();
        expect(uni.nothing).toBeTruthy();
        expect(uni2.nothing).toBeTruthy();
        expect(uni.everything).toBeUndefined();
        expect(uni2.everything).toBeUndefined();
        expect(uni.constructor.name === 'UniverseYet').toBeTruthy();
        expect(uni.constructor !== UniverseYet).toBeTruthy();
    });
    it('self-defining implements single case improved!', function () {
        UniverseYett.prototype.nothing = true;
        var uni = new UniverseYett();
        UniverseYett.prototype.everything = true;
        var uni2 = new UniverseYett();
        expect(uni === uni2).toBeTruthy();
        expect(uni.nothing).toBeTruthy();
        expect(uni2.nothing).toBeTruthy();
        expect(uni.everything).toBeTruthy();
        expect(uni2.everything).toBeTruthy();
        expect(uni.constructor === UniverseYett).toBeTruthy();
    });
    it('single case Holy Frail version:closure and immediate function', function () {
        UniverseLast.prototype.nothing = true;
        var uni = new UniverseLast();
        UniverseLast.prototype.everything = true;
        var uni2 = new UniverseLast();
        expect(uni === uni2).toBeTruthy();
        expect(uni.nothing).toBeTruthy();
        expect(uni2.nothing).toBeTruthy();
        expect(uni.everything).toBeTruthy();
        expect(uni2.everything).toBeTruthy();
        expect(uni.constructor === UniverseLast).toBeTruthy();
    });
});
