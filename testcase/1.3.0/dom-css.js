/**
 * css3 test case
 * @author yiminghe@gmail.com
 */
describe('css test', function () {
    var Dom = KISSY.DOM;
    var rmsPrefix = /^-ms-/,
        RE_DASH = /-([a-z])/ig;

    function upperCase() {
        return arguments[1].toUpperCase();
    }

    function camelCase(name) {
        // fix #92, ms!
        return name.replace(rmsPrefix, 'ms-').replace(RE_DASH, upperCase);
    }

    function css(elem, prop, value) {
        if (value === undefined) {
            return window.getComputedStyle(elem, null).getPropertyValue(prop);
        } else {
            elem.style[camelCase(prop)] = value;
        }
    }

    describe('support css3', function () {
        it('support border-radius', function () {
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.style.height = '100px';
            div.style.width = '100px';
            div.style.borderRadius = '100px';
            div.style.border = '1px solid red';
            expect(div.style.borderRadius.indexOf('100px')).not.toBe(-1);
        });

        it('support transition', function () {
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.style.height = '100px';
            div.style.width = '100px';
            div.style.border = '1px solid red';
            waits(200);
            runs(function () {
                css(div, 'transition-property', 'width,height');
                css(div, 'transition-duration', '2s');
                css(div, 'transition-timing-function', 'linear');
                css(div, 'width', '200px');
                css(div, 'height', '200px');
            });
            waits(200);
            runs(function () {
                expect(css(div, 'width')).not.toBe('200px');
                expect(css(div, 'width')).not.toBe('100px');
                expect(css(div, 'height')).not.toBe('200px');
                expect(css(div, 'height')).not.toBe('100px');
            }, 200);
        });
        it('support transition simple shorthand', function () {
            var div = document.createElement('div');
            document.body.appendChild(div);
            div.style.height = '100px';
            div.style.width = '100px';
            div.style.border = '1px solid red';
            waits(200);
            runs(function () {
                css(div, 'transition', 'width linear 2s');
                css(div, 'width', '200px');
                css(div, 'height', '200px');
            });
            waits(200);
            runs(function () {
                expect(css(div, 'width')).not.toBe('200px');
                expect(css(div, 'width')).not.toBe('100px');
                expect(css(div, 'height')).toBe('200px');
            }, 200);
        });
        if (!KISSY.UA.webkit) {
            it('support transition shorthand', function () {
                var div = document.createElement('div');
                document.body.appendChild(div);
                div.style.height = '100px';
                div.style.width = '100px';
                div.style.border = '1px solid red';
                waits(200);
                runs(function () {
                    css(div, 'transition', 'width linear 2s, height linear 2s');
                    css(div, 'width', '200px');
                    css(div, 'height', '200px');
                });
                waits(200);
                runs(function () {
                    expect(css(div, 'width')).not.toBe('200px');
                    expect(css(div, 'width')).not.toBe('100px');
                    expect(css(div, 'height')).not.toBe('200px');
                    expect(css(div, 'height')).not.toBe('100px');
                }, 200);
            });
        }
    });
});