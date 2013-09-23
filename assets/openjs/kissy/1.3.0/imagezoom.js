/**
 * @fileOverview ImageZoom组件的安全适配器 
 * by 炫幻星 - 好评有奖(songhujing2009)
 */
KISSY.add(function (S, ImageZoom) {
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
        /**
         * 因为KISSY的组件构造函数只有一个，后面可能会对构造函数本身做修改
         * 所以这里可以写一个SafeConstruector，相当于继承KISSY的组件，并且显示的声明要开放哪些api
         */
        function SafeImageZoom(config) {
            this.inner = new ImageZoom(config);
        }

		//一般方法
        SafeImageZoom.prototype.set = function (attr,val) {
			/**
			 * 如果是imagesrc 或 bigimagesrc 需要验证url白名单
			 */
			var chkurl = (''+attr).toLowerCase()=='imagesrc' || (''+attr).toLowerCase()=='bigimagesrc';
            this.inner.set(attr , chkurl ? (cajaAFTB.rewriteURL(val, null, null, {XML_ATTR: "href"}) ? val : '') : val);
        };
        SafeImageZoom.prototype.get = function (attr) {
            return this.inner.get(attr);
        };

        //---- 组件是一个构造函数进行初始化的，需要markCtor标记一下，让caja容器认识
        frameGroup.markCtor(SafeImageZoom);


        //构造函数实例的方法，需要grantMethod ，加入白名单，没有授权的方法，不可以使用，容器不认识
        frameGroup.grantMethod(SafeImageZoom, "set");
        frameGroup.grantMethod(SafeImageZoom, "get");

        /**
         * @param context 上下文
         * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
         * @param context.frame 单个模块的沙箱
         * @return {Object} 实际的组件对象
         */
        return function (context) {

            //最终需要返回给
            return {
                ImageZoom: frameGroup.markFunction(function () {

					/**
					 * 找到模块dom的根节点
					 * 追加一个DIV到模块dom的根节点。用于把放大镜放置在这个DIV前面
					 * 然后隐藏这个DIV,无其它用处，只用于定位
					 */
					var dombody = KISSY.all(context.mod).children().item(0).children().item(0);
					var placebefore=dombody[0].appendChild(document.createElement('div'));
					KISSY.all(placebefore).hide();

					var config = arguments[0];
					config={
						//判断主要用于ISV可以使用selector 或 KISSY.all('.myimg')  来设置放大效果
						//imageNode: typeof(config.imageNode)=='string' ? DOM.get(config.imageNode,context.mod) : config.imageNode.inner[0],
						imageNode: DOM.get(config.imageNode,context.mod),
						//对齐
						align:config.align!=null ? {
								//node:typeof(config.align.node)=='string' ? DOM.get(config.align.node,context.mod) : config.align.node.inner[0],
								node:DOM.get(config.align.node,context.mod),
								points:config.align.points,
								offset:config.align.offset
							} : null,
						type:config.type,
						//需要验证url白名单
						bigImageSrc: cajaAFTB.rewriteURL(config.bigImageSrc, null, null, {XML_ATTR: "href"}) ? config.bigImageSrc: '',
						bigImageWidth:config.bigImageWidth,
						bigImageHeight:config.bigImageHeight,
						width:config.width,
						height:config.height,
						hasZoom:config.hasZoom,
						prefixCls: config.prefixCls==null ? 'imagezoom-': config.prefixCls,
						elBefore:placebefore
					};

                    return new SafeImageZoom(config);
                }),
                kissy:true
            }
        }

    }

    return init;

}, {
    requires: ['imagezoom']
});
