/**
 * @fileOverview 缩放功能的安全适配器
 */
KISSY.add(function (S, ColorPicker) {
    var DOM = S.DOM,
        Event = S.Event;
	/**
	 * @param frameGroup 页面中的沙箱环境，frame即为沙箱，frameGroup为沙箱组。沙箱的公共环境
     * @returns {Function} 工厂获取实际的适配对象
     */
	function init(frameGroup) {		
		
        /**
        * 因为KISSY的组件构造函数只有一个，后面可能会对构造函数本身做修改
        * 所以这里可以写一个SafeConstruector，相当于继承KISSY的组件，并且显示的声明要开放哪些api
        */
        function SafeColorPicker(config) {
		 // ({el:KISSY.DOM.get(s)})
          this.inner = new ColorPicker(config);
        }

        //为我们'继承'的构造函数添加需要开放给外部使用的原型方法

        /**
         * [getColor 获取拾色器当前选中颜色的十六进制值，例：#ff0000]
         *
         * @return {[type]} [#ff0000]
         */
        SafeColorPicker.prototype.getColor = function () {
          this.inner.getColor();
        };
		
        /**
         * [setColor 设置拾色器的默认颜色]
         *
         * @return {[type]} [description]
         */
        SafeColorPicker.prototype.setColor = function (hex) {
          this.inner.setColor(hex);
        };

        //---- 组件是一个构造函数进行初始化的，需要markCtor标记一下，让caja容器认识
        frameGroup.markCtor(SafeColorPicker);

        //构造函数实例的方法，需要grantMethod ，加入白名单，没有加入白名单的不可以使用，caja容器不认识
        frameGroup.grantMethod(SafeColorPicker, "getColor");
        frameGroup.grantMethod(SafeColorPicker, "setColor");
		  

        /**
         * @param context 上下文
         * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
         * @param context.frame 单个模块的沙箱
         * @return {Object} 实际的组件对象
         */
        return function (context) {
						

            //最终需要返回给
            return {
                ColorPicker: frameGroup.markFunction(function () {
                    var args = S.makeArray(arguments);
                    var cfg = cajaAFTB.untame(args[0]);
/*					if(cfg.complete){
						cfg.complete = frameGroup.markCtor(cfg.complete);
					}*/
                    return new SafeColorPicker(cfg);
                }),
                kissy:true
            }
        }
	}	
	
    return init;


}, {
    requires: ['gallery/colorPicker/1.0/index','gallery/colorPicker/1.0/index.css']
});