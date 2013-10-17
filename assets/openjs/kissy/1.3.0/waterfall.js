/**
 * @fileOverview 瀑布流组件的安全适配器
 */
KISSY.add(function (S, Waterfall) {
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
		function SafeWaterfall(config) {
			this.inner = new Waterfall(config);
		}

		//为我们‘继承'的构造函数添加需要开放给外部使用的原型方法
		SafeWaterfall.prototype.adjust = function () {
			this.inner.adjust();
		};
		/*SafeWaterfall.prototype.addItems = function () {
			var args = S.makeArray(arguments);
			var items = args[0];
			var callback = cajaAFTB.untame(args[1]);
			callback = makeSafeArguments(callback, this.mod);
			this.inner.addItems(items, callback);
		};*/
		SafeWaterfall.prototype.addItems = function (items, callback) {
			this.inner.addItems(items, callback);
		};
		SafeWaterfall.prototype.destroy = function () {
			this.inner.destroy();
		};
		SafeWaterfall.prototype.isAdjusting = function () {
			this.inner.isAdjusting();
		};
		SafeWaterfall.prototype.isAdding = function () {
			this.inner.isAdding();
		};
		/*SafeWaterfall.prototype.adjustItem = function () {
			var args = S.makeArray(arguments);
			var items = args[0];
			var cfg = cajaAFTB.untame(args[1]);
			cfg = makeSafeArguments(cfg, this.mod);
			this.inner.adjustItem(items, cfg);
		};
		SafeWaterfall.prototype.removeItem = function () {
			var args = S.makeArray(arguments);
			var items = args[0];
			var cfg = cajaAFTB.untame(args[1]);
			cfg = makeSafeArguments(cfg, this.mod);
			this.inner.removeItem(items, cfg);
		};*/
		SafeWaterfall.prototype.adjustItem = function (items, cfg) {
			this.inner.adjustItem(items, cfg);
		};
		SafeWaterfall.prototype.removeItem = function (items, cfg) {
			this.inner.removeItem(items, cfg);
		};

		//---- 组件是一个构造函数进行初始化的，需要markCtor标记一下，让caja容器认识
		frameGroup.markCtor(SafeWaterfall);

		//构造函数实例的方法，需要grantMethod ，加入白名单，没有加入白名单的不可以使用，caja容器不认识
		frameGroup.grantMethod(SafeWaterfall, "adjust");
		frameGroup.grantMethod(SafeWaterfall, "addItems");
		frameGroup.grantMethod(SafeWaterfall, "destroy");
		frameGroup.grantMethod(SafeWaterfall, "isAdjusting");
		frameGroup.grantMethod(SafeWaterfall, "isAdding");
		frameGroup.grantMethod(SafeWaterfall, "adjustItem");
		frameGroup.grantMethod(SafeWaterfall, "removeItem");

		/**
		 * @param context 上下文
		 * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
		 * @param context.frame 单个模块的沙箱
		 * @return {Object} 实际的组件对象
		 */
		return function (context) {

			//最终需要返回给 ISV使用的API，这是真正第三方调用的API，kissy:true意思是这是KISSY这个对象的一个属性
			return {
				Waterfall: frameGroup.markFunction(function () {
					var args = S.makeArray(arguments);
					var cfg = cajaAFTB.untame(args[0]);
					cfg.container = S.DOM.get(cfg.container, context.mod);
					return new SafeWaterfall(cfg);
				}),
				kissy:true
			}
		}

	}

	return init;

}, {
	requires: ['waterfall']
});

// KISSY.add("Waterfall/Loader", function (S, Waterfall) {
// 	var DOM = S.DOM,
// 		Event = S.Event;

// 	/**
// 	 * 提供一个init方法，名字任取，最后模块return即可。 用来初始化适配器的
// 	 * 初始化方法需要返回一个函数，用来为每个沙箱环境提供适配对象。
// 	 * ps: 页面中可能会有多个安全沙箱环境。init方法内执行的可以理解为所有沙箱共享的一些内容对象，主要提供最原始的安全适配对象和方法。(执行一次,所有沙箱共享)
// 	 *     init返回的函数可以理解是为每个沙箱提供的安全适配对象。(执行多次，每个沙箱对对象的操作不影响其他沙箱)
// 	 *     总结：可以理解为KISSY在frameGroup初始化的时候是一个对象，然后会copy多份，分别放到不同的沙箱环境中去执行。每个copy相互之间不影响
// 	 * @param frameGroup 页面中的沙箱环境，frame即为沙箱，frameGroup为沙箱组。沙箱的公共环境
// 	 * @returns {Function} 工厂获取实际的适配对象
// 	 */
// 	function init(frameGroup) {
// 		/**
// 		 * 因为KISSY的组件构造函数只有一个，后面可能会对构造函数本身做修改
// 		 * 所以这里可以写一个SafeConstruector，相当于继承KISSY的组件，并且显示的声明要开放哪些api
// 		 */
// 		function SafeWaterfallLoader(config) {
// 			this.inner = new Waterfall.loader(config);
// 		}

// 		//为我们‘继承'的构造函数添加需要开放给外部使用的原型方法
// 		SafeWaterfallLoader.prototype.adjust = function () {
// 			this.inner.adjust();
// 		};
// 		SafeWaterfallLoader.prototype.addItems = function (items, callback) {
// 			this.inner.addItems(items, callback);
// 		};
// 		SafeWaterfallLoader.prototype.destroy = function () {
// 			this.inner.destroy();
// 		};
// 		SafeWaterfallLoader.prototype.isAdjusting = function () {
// 			this.inner.isAdjusting();
// 		};
// 		SafeWaterfallLoader.prototype.isAdding = function () {
// 			this.inner.isAdding();
// 		};
// 		SafeWaterfallLoader.prototype.adjustItem = function (items, cfg) {
// 			this.inner.adjustItem(items, cfg);
// 		};
// 		SafeWaterfallLoader.prototype.removeItem = function (items, cfg) {
// 			this.inner.removeItem(items, cfg);
// 		};

// 		//---- 组件是一个构造函数进行初始化的，需要markCtor标记一下，让caja容器认识
// 		frameGroup.markCtor(SafeWaterfallLoader);

// 		//构造函数实例的方法，需要grantMethod ，加入白名单，没有加入白名单的不可以使用，caja容器不认识
// 		frameGroup.grantMethod(SafeWaterfallLoader, "adjust");
// 		frameGroup.grantMethod(SafeWaterfallLoader, "addItems");
// 		frameGroup.grantMethod(SafeWaterfallLoader, "destroy");
// 		frameGroup.grantMethod(SafeWaterfallLoader, "isAdjusting");
// 		frameGroup.grantMethod(SafeWaterfallLoader, "isAdding");
// 		frameGroup.grantMethod(SafeWaterfallLoader, "adjustItem");
// 		frameGroup.grantMethod(SafeWaterfallLoader, "removeItem");

// 		/**
// 		 * @param context 上下文
// 		 * @param context.mod 沙箱的模块范围，所有操作必须限定到模块范围之内去执行
// 		 * @param context.frame 单个模块的沙箱
// 		 * @return {Object} 实际的组件对象
// 		 */
// 		return function (context) {

// 			//最终需要返回给 ISV使用的API，这是真正第三方调用的API，kissy:true意思是这是KISSY这个对象的一个属性
// 			return {
// 				Loader: frameGroup.markFunction(function () {
// 					var args = S.makeArray(arguments);
// 					var cfg = cajaAFTB.untame(args[0]);
// 					cfg.container = S.DOM.get(cfg.container, context.mod);
// 					return new SafeWaterfallLoader(cfg);
// 				}),
// 				kissy:true
// 			}
// 		}

// 	}

// 	return init;

// }, {
// 	requires: ['waterfall']
// });