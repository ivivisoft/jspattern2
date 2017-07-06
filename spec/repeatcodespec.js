/**
 * @author andy on 7/3/17.
 */

describe('repeat code pattern', function () {
    it('inherit Holy Frail version', function () {
        function Parent(name) {
            this.name = name || 'Andy';
        }

        Parent.prototype.say = function () {
            return this.name;
        };
        function Child(name) {
            this.name = name;
        }

        inherit(Child, Parent);
        var child = new Child('Maria');
        expect(child instanceof Child).toBeTruthy();
        expect(child instanceof Parent).toBeTruthy();
        expect(child.say()).toEqual('Maria');
        expect(child.constructor.name).toEqual('Child');
    });
    it('class module', function () {
        var Man = klass(null, {
            __construct: function (what) {
                console.log("Man's constructor");
                this.name = what;
            },
            getName: function () {
                return this.name;
            }
        });
        var SuperMan = klass(Man, {
            __construct: function (what) {
                console.log("SuperMan's constructor");
                this.name = what;
            },
            getName: function () {
                var name = SuperMan.uber.getName.call(this);
                return "I am " + name;
            }
        });
        var first = new Man('Andy');
        expect(first.getName()).toEqual('Andy');
        var maria = new SuperMan('Maria');
        expect(maria.getName()).toEqual('I am Maria');
        expect(maria instanceof Man).toBeTruthy();
        expect(maria instanceof SuperMan).toBeTruthy();
    });
    it('prototype inherit(modern inherit)', function () {
        function Person() {
            this.name = 'Andy';
        }

        Person.prototype.getName = function () {
            return this.name;
        };

        var papa = new Person();
        var kid = object(papa);
        expect(kid.getName()).toEqual('Andy');
        var kidyet = object(Person.prototype);
        expect(kidyet.getName()).toBeUndefined();
    });
    it('coping inherit(modern inherit)--shallow copy', function () {
        var dad = {name: 'Andy', counts: [1, 2, 3]};
        var kid = extend(dad);
        expect(kid.name).toEqual('Andy');
        kid.counts.push(4);
        expect(dad.counts.toString()).toEqual("1,2,3,4");
    });
    it('coping inherit(modern inherit)--deep copy', function () {
        var dad = {name: 'Andy', counts: [1, 2, 3]};
        var kid = extendDeep(dad);
        expect(kid.name).toEqual('Andy');
        kid.counts.push(4);
        expect(dad.counts.toString()).toEqual("1,2,3");
        expect(kid.counts.toString()).toEqual("1,2,3,4");
    });
    it('mix-in pattern', function () {
        var cake = mix({eggs: 2, large: true}, {butter: 1, salted: true}, {flour: "3 cups"}, {sugar: "sure!"});
        expect(function () {
            console.dir(cake);
        }).not.toThrowError();
    });
    it('bind and curry', function () {
        var one = {
            name: 'Andy',
            say: function (greet) {
                return greet + ', ' + this.name;
            }
        };
        var two = {
            name: 'another gay!'
        };
        var twoSay = one.say.myBind(two);
        expect(twoSay('Maria')).toEqual('Maria, another gay!');
        var threeSay = one.say.myBind(two, 'Nick');
        expect(threeSay()).toEqual('Nick, another gay!');
    });
});
