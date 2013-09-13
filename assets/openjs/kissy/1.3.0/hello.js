/**
 * @fileOverview 日历组件的安全适配器
 */
KISSY.add(function (S, Calendar) {
    var DOM = S.DOM,
        Event = S.Event;

    /**
     * 提供一个init方法，名字任取，最后模块return即可。 用来初始化适配器的
     * 初始化方法需要返回一个函数，用来为每个沙箱环境提供适配对象。
     * ps: 页面中可能会有多个安全沙箱环境。init方法内执行的可以理解为所有沙箱共享的一些内容对象，主要提供最原始的安全适配对象和方法。(执行一次,所有沙箱共享)
     *     init返回的函数可以理解是为每个沙箱提供的安全适配对象。(执行多次，每个沙箱对对象的操作不影响其他沙箱)
     *     总结：可以理解为KISSY在frameGroup初始化的时候是一个对象，然后会copy多份，分别放到不同的沙箱环境中去执行。每个copy相互之间不影响
     * @param frameGroup 页面中的沙箱环境，frame即为沙箱，frameGroup为沙箱组。沙箱的公共环境
     * @returns {Function} 工厂获取实际的适配对象
     */

    function init(frameGroup) {

        function SafeString(s) {
            this.inner = new String(s);
        }

        //为我们‘继承'的构造函数添加需要开放给外部使用的原型方法
        SafeString.prototype.toUpperCase = function () {
               return this.inner.toUpperCase();
        };

        //---- 组件是一个构造函数进行初始化的，需要markCtor标记一下，让caja容器认识
        frameGroup.markCtor(SafeString);

        frameGroup.grantMethod(SafeString, "toUpperCase");


        /**
         * @param context 上下文
         * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
         * @param context.frame 单个模块的沙箱
         * @return {Object} 实际的组件对象
         */
        return function (context) {

            //最终需要返回给
            return {
                SSS: frameGroup.markFunction(function (s) {
                    return new SafeString(s);
                }),
                kissy:true
            }
        }

    }

    return init;

}, {
    requires: ['calendar', 'calendar/assets/dpl.css']
});
