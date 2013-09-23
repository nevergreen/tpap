/**
 * @fileOverview 缩放功能的安全适配器
 */
KISSY.add(function (S, Resizable) {
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
        function SafeResizable(config) {
		  config.prefixCls = config.prefixCls || "rs-"; // 淘宝默认的前缀为ks- ,ISV不能定义ks-开头的样式, 所以这里默认前缀更改一下.
          this.inner = new Resizable(config);
        }

        //为我们'继承'的构造函数添加需要开放给外部使用的原型方法
        SafeResizable.prototype.on = function () {
          var self = this;
          var params = S.makeArray(arguments);
          
          this.inner.on(params[0], function(e){         
        	  var event = {
        		  target: cajaAFTB.tameNode(self.inner.get('node'))
        	  };       
        	  params[1].call(self, frameGroup.tame(event));
          });
        };

        /**
         * [destroy 原方法里的销毁]
         *
         * @return {[type]} [description]
         */
        SafeResizable.prototype.destroy = function () {
          this.inner.destroy();
        };


        //---- 组件是一个构造函数进行初始化的，需要markCtor标记一下，让caja容器认识
        frameGroup.markCtor(SafeResizable);

        //构造函数实例的方法，需要grantMethod ，加入白名单，没有加入白名单的不可以使用，caja容器不认识
        frameGroup.grantMethod(SafeResizable, "destroy");
        frameGroup.grantMethod(SafeResizable, "on");
		  

        /**
         * @param context 上下文
         * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
         * @param context.frame 单个模块的沙箱
         * @return {Object} 实际的组件对象
         */
        return function (context) {
			

            //最终需要返回给
            return {
                Resizable: frameGroup.markFunction(function () {
                    var args = S.makeArray(arguments);
                    var cfg = cajaAFTB.untame(args[0]);
					cfg.node = S.all(cfg.node, context.mod);
                    return new SafeResizable(cfg);
                }),
                kissy:true
            }
        }
	}	
	
    return init;


}, {
    requires: ['resizable']
});