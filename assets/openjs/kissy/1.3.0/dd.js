/**
 * @fileOverview 拖放功能的安全适配器
 */
KISSY.add(function (S, DD, Constrain) {
    var DOM = S.DOM,
        Event = S.Event,
        $ = S.all;
	/**
	 * @param frameGroup 页面中的沙箱环境，frame即为沙箱，frameGroup为沙箱组。沙箱的公共环境
     * @returns {Function} 工厂获取实际的适配对象
     */
	function init(frameGroup) {		
					
        function tameNode(node){
        }	
		
		//Draggable
        SafeDraggable = function (cfg) {
            this.inner = new DD.Draggable(cfg);
        };     
        SafeDraggable.prototype.on = function () {
          var self = this;
          var params = S.makeArray(arguments);
          
          this.inner.on(params[0], function(e){         
              var ev = {
                  todo: "todo..." //由于原方法内是自定义事件对象, 此处暂时未引入.
              };       
              params[1].call(self, frameGroup.tame(ev));
          });
        };
		frameGroup.markCtor(SafeDraggable);
        frameGroup.grantMethod(SafeDraggable, "on");
		
  		//DraggableDelegate
        SafeDraggableDelegate = function (cfg) {
            this.inner = new DD.DraggableDelegate(cfg);
        };
        SafeDraggableDelegate.prototype.on = function () {
          var self = this;
          var params = S.makeArray(arguments);
          
          this.inner.on(params[0], function(e){         
              var ev = {
				  tata: tameNode(self.inner.get('node')),
                  todo: "todo..." //由于原方法内是自定义事件对象, 此处暂时未引入.
              };       
              params[1].call(self, frameGroup.tame(ev));
          });
        };		
		frameGroup.markCtor(SafeDraggableDelegate);
        frameGroup.grantMethod(SafeDraggableDelegate, "on");
		
		
		
		//Droppable
        SafeDroppable = function (cfg) {
            this.inner = new DD.Droppable(cfg);
        };     
        SafeDroppable.prototype.on = function () {
          var self = this;
          var params = S.makeArray(arguments);
          
          this.inner.on(params[0], function(e){               
              var ev = {
                  todo: "todo..." //由于原方法内是自定义事件对象, 此处暂时未引入.
                  //drop: e.drop ,
                  //drag: e.drag 
              };          
              params[1].call(self, frameGroup.tame(ev));
          });
        };
		frameGroup.markCtor(SafeDroppable);
        frameGroup.grantMethod(SafeDroppable, "on");
		
  		//DroppableDelegate
        SafeDroppableDelegate = function (cfg) {
            this.inner = new DD.DroppableDelegate(cfg);
        };
        SafeDroppableDelegate.prototype.on = function () {
          var self = this;
          var params = S.makeArray(arguments);
          
          this.inner.on(params[0], function(e){         
              var ev = {
                  todo: "todo..." //由于原方法内是自定义事件对象, 此处暂时未引入.
                  //drop: e.drop ,
                  //drag: e.drag
              };       
              params[1].call(self, frameGroup.tame(ev));
          });
        };		
		frameGroup.markCtor(SafeDroppableDelegate);
        frameGroup.grantMethod(SafeDroppableDelegate, "on");
		
	  
		//dd.plugin.Constrain   //TODO  
/*		SafeConstrain = function(cfg){
			this.inner =  new Constrain(cfg)
		}
		frameGroup.markCtor(SafeConstrain);	*/

        /**
         * @param context 上下文
         * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
         * @param context.frame 单个模块的沙箱
         * @return {Object} 实际的组件对象
         */
        return function (context) {			
			
			tameNode = function(node){
				return context.frame.imports.tameNode___( node, true );
			}
		
            //最终需要返回给
			return {
                DD: {
                    Draggable: frameGroup.markFunction(function () {
                        var args = S.makeArray(arguments);
                        var cfg = cajaAFTB.untame(args[0]);
						cfg.node = DOM.get(cfg.node, context.mod);
                        return new SafeDraggable(cfg);
                    }),
                    Droppable: frameGroup.markFunction(function () {
                        var args = S.makeArray(arguments);
                        var cfg = cajaAFTB.untame(args[0]);
						cfg.node = DOM.get(cfg.node, context.mod);
                        return new SafeDroppable(cfg);
                    }),
                    DraggableDelegate: frameGroup.markFunction(function () {
                        var args = S.makeArray(arguments);
						//var cfg = cajaAFTB.untame(args[0]);
						var cfg = args[0];
						cfg.container = DOM.get(cfg.container, context.mod);
                        return new SafeDraggableDelegate(cfg);
                    }),
                    DroppableDelegate: frameGroup.markFunction(function () {
                        var args = S.makeArray(arguments);
                        var cfg = cajaAFTB.untame(args[0]);
						cfg.container = DOM.get(cfg.container, context.mod);
                        return new SafeDroppableDelegate(cfg);
                    })/*,
					Constrain : frameGroup.markFunction(function () {
						var args = S.makeArray(arguments);
						//var cfg = cajaAFTB.untame(args[0]);
						var cfg = args[0];
						if(cfg.constrain) cfg.constrain = DOM.get(cfg.constrain, context.mod);
						var c =  new SafeConstrain(cfg);
						//var ci = c.inner;
						//console.debug(c);
						//console.debug(ci);
						return c;
					})*/
				},
                kissy:true
            }
        }
	}	
	
    return init;


}, {
    requires: ['dd','dd/plugin/constrain']
});