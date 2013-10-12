/**
 * @fileOverview DataLazyload组件的安全适配器
 */
KISSY.add(function(S, DataLazyload) {
    var DOM = S.DOM,
        Event = S.Event;

    /**
     * 提供一个init方法，名字任取，最后模块return即可。 用来初始化适配器
     * 初始化方法需要返回一个函数，用来为每个沙箱环境提供适配对象。
     * ps: 页面中可能会有多个安全沙箱环境。init方法内执行的可以理解为所有沙箱共享的一些内容对象，主要提供最原始的安全适配对象和方法。(执行一次,所有沙箱共享)
     *     init返回的函数可以理解是为每个沙箱提供的安全适配对象。(执行多次，每个沙箱对对象的操作不影响其他沙箱)
     *     总结：可以理解为KISSY在frameGroup初始化的时候是一个对象，然后会copy多份，分别放到不同的沙箱环境中去执行。每个copy相互之间不影响
     * @param frameGroup 页面中的沙箱环境，frame即为沙箱，frameGroup为沙箱组。沙箱的公共环境
     * @returns {Function} 工厂获取实际的适配对象
     */

    function init(frameGroup) {

        /**
         * 因为KISSY的组件构造函数只有一个，后面可能会对构造函数本身做修改
         * 所以这里可以写一个SafeConstruector，相当于继承KISSY的组件，并且显示的声明要开放哪些api
         */
        //DataLazyload Adapter

        function SafedataLazyload(cfg) {
            this.inner = new DataLazyload(cfg);
        }

        SafedataLazyload.prototype.addCallback = function(el, fnc) {
            el = DOM.get(el, this.mod);
            this.inner.addCallback(el, frameGroup.markFunction(function() {
                fnc.call();
            }));
        };

        SafedataLazyload.prototype.removeCallback = function(el, fnc) {
            el = DOM.get(el, this.mod);
            this.inner.removeCallback(el, frameGroup.markFunction(function() {
                fnc.call();
            }));
        };

        SafedataLazyload.prototype.refresh = function() {
            this.inner.refresh();
        };

        SafedataLazyload.prototype.pause = function() {
            this.inner.pause();
        };

        SafedataLazyload.prototype.resume = function() {
            this.inner.resume();
        };

        SafedataLazyload.prototype.destroy = function() {
            this.inner.destroy();
        };

        SafedataLazyload.prototype.on = function(type, fnc) {
            this.inner.on(type, frameGroup.markFunction(function() {
                fnc.call();
            }));
        };


        frameGroup.markCtor(SafedataLazyload);
        frameGroup.grantMethod(SafedataLazyload, "on");
        frameGroup.grantMethod(SafedataLazyload, "addCallback");
        frameGroup.grantMethod(SafedataLazyload, "removeCallback");
        frameGroup.grantMethod(SafedataLazyload, "refresh");
        frameGroup.grantMethod(SafedataLazyload, "pause");
        frameGroup.grantMethod(SafedataLazyload, "resume");
        frameGroup.grantMethod(SafedataLazyload, "destroy");
          



        /**
         * @param context 上下文
         * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
         * @param context.frame 单个模块的沙箱
         * @return {Object} 实际的组件对象
         */
        return function(context) {

            //最终需要返回给
            return {
                DataLazyload: frameGroup.markFunction(function() {

                    var args = S.makeArray(arguments);
                    var cfg = cajaAFTB.untame(args[0], context.mod);

                    cfg.execScript = false; //textarea 禁止脚本
                    cfg.container = cfg.container ? S.get(cfg.container, context.mod) : context.mod;
                    cfg.onStart = function(obj) {

                        if (obj.type == 'img') {

                        } else if (obj.type == 'textarea') {

                            obj.value = cajaAFTB.sanitizeHtml(obj.value);
                            return obj.value;
                        }
                    }
                    return new SafedataLazyload(cfg);

                }),
               

                kissy: true
            }

        }

    }
    return init;
}, {
    requires: ['gallery/datalazyload/1.0/index']
});