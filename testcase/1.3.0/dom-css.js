describe('css test',function(){
    var Dom = KISSY.DOM;
    function css(elem,prop,value){
        if(value===undefined){
            return window.getComputedStyle(elem,null).getPropertyValue(prop);
        } else{
            elem.style[prop]=value;
        }
    }
    describe('support css3',function(){
        it('support border-radius',function(){
            var div=document.createElement('div');
            document.body.appendChild(div);
            div.style.height='100px';
            div.style.width='100px';
            div.style.borderRadius='100px';
            div.style.border='1px solid red';
            expect(css(div,'border-radius')).toBe('100px');
        });
        
        it('support transition',function(){
            var div=document.createElement('div');
            document.body.appendChild(div);
            div.style.height='100px';
            div.style.width='100px';
            div.style.border='1px solid red';
            css(div,'transition','all 2s linear');
            css(div,'width','200px');
            css(div,'height','200px');
            waits(200);
            runs(function(){
                expect(css(div,'width')).toBe('100px');
                expect(css(div,'width')).toBe('200px');
            },200);
        });
    });
});