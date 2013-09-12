/**
 * @fileOverview 拖放功能的安全适配器
 */
KISSY.add(function (S, DD) {
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
        var SafeDD = {};
        
        //暂时先只引入 Draggable 方法, 因为其他方法我没用过,怕弄出来误人子弟.
        SafeDD.Draggable = function (cfg) {
            this.inner = new DD.Draggable(cfg);
        };        
        SafeDD.DraggableDelegate = function (cfg) {
            this.inner = new DD.DraggableDelegate(cfg);
        };

        //为我们'继承'的构造函数添加需要开放给外部使用的原型方法
        SafeDD.Draggable.prototype.on = function () {
          var self = this;
          var params = S.makeArray(arguments);
          
          this.inner.on(params[0], function(e){         
              var ev = {
                  todo: "todo..." //由于原方法内是自定义事件对象, 此处暂时未引入.
              };       
              params[1].call(self, frameGroup.tame(ev));
          });
        };

        SafeDD.DraggableDelegate.prototype.on = function () {
          var self = this;
          var params = S.makeArray(arguments);
          
          this.inner.on(params[0], function(e){         
              var ev = {
                  todo: "todo..." //由于原方法内是自定义事件对象, 此处暂时未引入.
              };       
              params[1].call(self, frameGroup.tame(ev));
          });
        };

        //---- 让caja容器认识
		//暴露对象
        frameGroup.tame(SafeDD);
		//暴露方法
		frameGroup.markCtor(SafeDD.Draggable);
		frameGroup.markCtor(SafeDD.DraggableDelegate);
        //暴露属性
        frameGroup.grantRead(SafeDD,"Draggable");
        frameGroup.grantRead(SafeDD,"DraggableDelegate");

        //构造函数实例的方法，需要grantMethod ，加入白名单，没有加入白名单的不可以使用，caja容器不认识        
        frameGroup.grantMethod(SafeDD.Draggable, "on");
        frameGroup.grantMethod(SafeDD.DraggableDelegate, "on"); 		  

        /**
         * @param context 上下文
         * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
         * @param context.frame 单个模块的沙箱
         * @return {Object} 实际的组件对象
         */
        return function (context) {
			
            //最终需要返回给
			return {
                DD: SafeDD.TAMED_TWIN___,
                kissy:true
            }
        }
	}	
	
    return init;


}, {
    requires: ['dd']
});