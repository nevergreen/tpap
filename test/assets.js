var jasmine_describe = describe;
var jasmine_expect = expect;
var jasmine_it = it;
function getCajaExposed(frameGroup, cajaAFTB) {
    function describe(m, func) {
        jasmine_describe.apply(this, arguments);
    }

    function it(desc, func) {
        jasmine_it.apply(this, arguments);
    }

    function expect() {
        return new Matcher(jasmine_expect.apply(this, arguments));
    }

    function Matcher(m) {
        this.m = m;
    }

    Matcher.prototype.toBe = function () {
        this.m.toBe.apply(this.m, arguments);
    };

    Matcher.prototype.toEqual = function () {
        this.m.toEqual.apply(this.m, arguments);
    };

    frameGroup.markFunction(describe);
    frameGroup.markFunction(it);
    frameGroup.markFunction(expect);
    frameGroup.markCtor(Matcher);
    frameGroup.grantMethod(Matcher, "toBe");
    frameGroup.grantMethod(Matcher, "toEqual");

    return {
        it: frameGroup.tame(it),
        describe: frameGroup.tame(describe),
        expect: frameGroup.tame(expect)
    };
}
