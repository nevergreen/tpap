/**
 * jasmine adapter for caja
 * @author yiminghe@gmail.com
 */
var jasmine_describe = describe;
var jasmine_expect = expect;
var jasmine_it = it;
var jasmine_waits = waits;
var jasmine_waitsFor = waitsFor;
var jasmine_runs = runs;
function getCajaExposed(frameGroup, cajaAFTB) {
    function describe(m, func) {
        jasmine_describe.apply(this, arguments);
    }

    function it(desc, func) {
        jasmine_it.apply(this, arguments);
    }

    function waits(desc, func) {
        jasmine_waits.apply(this, arguments);
    }

    function waitsFor(desc, func) {
        jasmine_waitsFor.apply(this, arguments);
    }

    function runs(desc, func) {
        jasmine_runs.apply(this, arguments);
    }

    function expect() {
        return new Matcher(jasmine_expect.apply(this, arguments));
    }

    function Matcher(m, not) {
        this.m = m;
        if (not) {
            this.isNot = 1;
        } else {
            this.not = new Matcher(m, 1);
        }
    }

    Matcher.prototype.toBe = function () {
        if (this.isNot) {
            this.m.not.toBe.apply(this.m.not, arguments);
        } else {
            this.m.toBe.apply(this.m, arguments);
        }
    };

    Matcher.prototype.toEqual = function () {
        if (this.isNot) {
            this.m.not.toEqual.apply(this.m.not, arguments);
        } else {
            this.m.toEqual.apply(this.m, arguments);
        }
    };

    Matcher.prototype.not={};


    frameGroup.markFunction(describe);
    frameGroup.markFunction(it);
    frameGroup.markFunction(waits);
    frameGroup.markFunction(runs);
    frameGroup.markFunction(waitsFor);
    frameGroup.markFunction(expect);
    frameGroup.markCtor(Matcher);
    frameGroup.grantRead(Matcher.prototype, 'not');
    frameGroup.grantMethod(Matcher, "toBe");
    frameGroup.grantMethod(Matcher, "toEqual");

    return {
        it: frameGroup.tame(it),
        describe: frameGroup.tame(describe),
        waits: frameGroup.tame(waits),
        runs: frameGroup.tame(runs),
        waitsFor: frameGroup.tame(waitsFor),
        expect: frameGroup.tame(expect)
    };
}
