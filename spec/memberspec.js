/**
 * @author andy on 7/1/17.
 */

describe("memeber", function () {
    it("public static member(static method or instance method)", function () {
        var classValue = Gadget.isShiny();//"you bet"
        var a = new Gadget("499.99");
        var instanceValue = a.isShiny();//"you bet,it costs $499.99!"
        expect(classValue).toEqual("you bet");
        expect(instanceValue).toEqual("you bet, it costs $499.99!")
    });
    it("private static member", function () {
        var iphone = new Godget();
        expect(iphone.getLastId()).toEqual(1);
        var ipod = new Godget();
        expect(ipod.getLastId()).toEqual(2);
        var ipad = new Godget();
        expect(ipad.getLastId()).toEqual(3);
    });
    it("constant wrapper", function () {
        //verification the maxwidth constant  is defined or not
        expect(constant.isDefined("maxwidth")).toBeFalsy();
        //set the maxwidth constant
        expect(constant.set("maxwidth", 480)).toBeTruthy();
        //again verification the maxwidth constant  is defined or not
        expect(constant.isDefined("maxwidth")).toBeTruthy();
        //change the maxwidth constant will not allow
        expect(constant.set("maxwidth", 520)).toBeFalsy();
        //get the constant
        expect(constant.get("maxwidth")).toEqual(480);
    });
    it("chaining pattern", function () {
        var Person = function (name) {
            this.name = name;
        }.method('getName', function () {
            return this.name;
        }).method('setName', function (name) {
            // the 'this' is instance
            this.name = name;
            return this;
        });

        var a = new Person('Andy');
        expect(a.getName()).toEqual('Andy');
        expect(a.setName('Maria').getName()).toEqual('Maria');

    });
});
