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

    describe('support css2', function(){
       it('support simple css2(color height position font-family font-size z-index left', function(){
           var div = document.createElement('div');
           document.body.appendChild(div);

           div.style.height = '100px';
           expect(div.style.height).toBe('100px');

           div.style.color = 'red';
           expect(div.style.color).toBe('red');

           div.style.position = 'relative';
           expect(div.style.position).toBe('relative');

           div.style.position = 'fixed';
           expect(div.style.position).toBe('fixed');

           div.style.zIndex = "100";
           expect(div.style.zIndex).toBe('100');

           div.style.zIndex = "1000000000";
           expect(div.style.zIndex).toBe('1000000000');

           div.style.border = "1px solid red";
           expect(div.style.border).toBe('1px solid red');

           div.style.top = "10px";
           expect(div.style.top).toBe('10px');

           div.style.left = "10px";
           expect(div.style.left).toBe('10px');

           div.style.fontSize = "10px";
           expect(div.style.fontSize).toBe('10px');

           div.style.fontFamily = '"selfdefined1"';
           expect(div.style.fontFamily).toBe('selfdefined1');

           div.style.fontFamily = 'serif';
           expect(div.style.fontFamily).toBe('serif');

           div.style.visibility = 'hidden';
           expect(div.style.visibility).toBe('hidden');

           div.style.overflow = 'scroll';
           expect(div.style.overflow).toBe('scroll');

            //bughere set and get not the same value
           div.style.backgroundImage = 'url("http://www.taobao.com/1.jpg")';
           expect(div.style.backgroundImage).toBe('url(http://www.taobao.com/1.jpg)');
       });



       it('support filter in ie', function(){
           if(KISSY.UA.ie ){
               var div = document.createElement('div');
               document.body.appendChild(div);
               div.innerHTML = 'opacity';

               div.style.filter = 'alpha(opacity=30)';
               expect(div.style.filter).toBe('alpha(opacity=30)');

           }
       })

    });

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

        it('support box-sizing', function(){
            var div = document.createElement('div');
            document.body.appendChild(div);

            div.style.boxSizing = 'border-box';
            expect(div.style.boxSizing).toBe('border-box');
        })


        it('support box-shadow', function(){
            var div = document.createElement('div');
            document.body.appendChild(div);

            div.style.boxShadow = 'red 1px 1px 1px inset';
            expect(div.style.boxShadow).toBe('red 1px 1px 1px inset');
        })

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
