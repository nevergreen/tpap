/**
 * @fileOverview layer-anim组件caja适配 http://gallery.kissyui.com/layer-anim/1.1/guide/index.html
 * @author: guiyuan.hj@tmall.com
 * @date: 2013-9-22
 */

KISSY.add(function (S, LayerAnim) {

    // LayerAnim config参数层级太深，自定义方法进行安全限制
    function makeSafeArguments (config, mod) {
        if (config instanceof Array) {
            for (var i = 0, len = config.length; i< len; i++) {
                if (config[i] instanceof Array) {
                    config[i] = makeSafeArguments(config[i], mod);
                } else {
                    config[i].node = S.get(config[i].node, mod);
                }
            }
        } else {
            config.node = S.get(config.node, mod);
        }
        return config;
    }

    function init(frameGroup) {

        function safeLayerAnim(config, mod) {
            this.mod = mod;
            this.inner = new LayerAnim(config);
        }

        S.augment(safeLayerAnim, {

            on: function(type, fnc) {
                this.inner.on(type, frameGroup.markFunction(function(){
                    fnc.call();
                }));
            },

            run: function(position) {
                this.inner.run(position);
            },

            runReverse: function() {
                this.inner.runReverse();
            },

            pause: function() {
                this.inner.pause();
            },

            resume: function() {
                this.inner.resume();
            },

            stop: function(reset) {
                this.inner.stop(reset);
            },

            seek: function(position) {
                this.inner.seek(position);
            },

            end: function() {
                this.inner.end();
            },

            kill: function() {
                this.inner.kill();
            },

            add: function() {
                var args = S.makeArray(arguments);
                var cfg = cajaAFTB.untame(args[0]);
                cfg = makeSafeArguments(cfg, this.mod);
                this.inner.add(cfg);
            },

            clear: function() {
                this.inner.clear();
            }
        });

        frameGroup.markCtor(safeLayerAnim);

        S.each(['on', 'run', 'runReverse', 'pause',
            'resume', 'stop', 'seek', 'end', 'kill', 'add', 'clear', 'rerun'], function(fuc) {

            frameGroup.grantMethod(safeLayerAnim, fuc);
        });

        /**
         * @param context 上下文
         * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
         * @param context.frame 单个模块的沙箱
         * @return {Object} 实际的组件对象
         */
        return function (context) {

            return {
                LayerAnim: frameGroup.markFunction(function () {
                    var args = S.makeArray(arguments);
                    var cfg = cajaAFTB.untame(args[0]);
                    cfg = makeSafeArguments(cfg, context.mod);
                    return new safeLayerAnim(cfg, context.mod);
                }),
                kissy: true
            }
        }

    }

    return init;

}, {
    requires: ['gallery/layer-anim/1.1/index']
});

