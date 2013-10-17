var DOM = KISSY.DOM;	//瀑布流组件默认在KISSY的命名空间下
var $ = KISSY.all, S = KISSY;
var tpl = KISSY.DOM.query('.tpl')[0].innerHTML,
	nextpage = 1,
	container = DOM.query('.container')[0];
var wf = new KISSY.Waterfall({
		container: '.container',
		minColCount: 2,
		colWidth: 235
		/*colWidth: 235,
		adjustEffect: {
			easing:'none', // easing type
			duration:0.5 // 调整动画时间
		}*/
});

// var waterfall = new Waterfall.Loader({
// 	container: ".ColumnContainer1",
// 	load: function(success, end) {
// 		// KISSY.DOM.query('.loadingPins')[0].show();
// 		console.log('ss');
// 		KISSY.io({
// 			data:{
// 				'method': 'flickr.photos.search',
// 				'api_key': '5d93c2e473e39e9307e86d4a01381266',
// 				'tags': 'rose',
// 				'page': nextpage,
// 				'per_page': 20,
// 				'format': 'json'
// 			},
// 			url: 'http://api.flickr.com/services/rest/',
// 			dataType: "jsonp",
// 			jsonp: "jsoncallback",
// 			success: function(d) {
// 				console.log('xx');
// 				if (d.stat !== 'ok') {
// 					alert('load data error!');
// 					end();
// 					return;
// 				}
// 				var items = [], temp, tempNode;
// 				var i = 0;
// 				for(var key in d.photos.photo) {
// 					temp = d.photos.photo[key];
// 					temp.height = Math.round(Math.random()*(300 - 180) + 180);
// 					items.push(createWaterfallItem(temp));
// 					i++;
// 				}
// 				console.log(d.photos.page);
// 				success(items);
// 				nextpage = d.photos.page + 1;
// 				if (nextpage > d.photos.pages) {
// 					end();
// 				}
// 			},
// 			complete: function() {
// 				// KISSY.DOM.query('.loadingPins')[0].hide();
// 			}
// 		});
// 	},
// 	minColCount:2,
// 	colWidth:228
// });

var prePageHeight = 0;
// console.log('page height: ' + pageHeight + $('.container').height());
// console.log(document.body.clientHeight);
// 页面中window的滚动事件
GS.addListener('windowScroll',function(e){
	var pageHeight = DOM.get('.container').offsetHeight;
	var pageViewHeight =  document.documentElement.clientHeight;
	console.log('pageHeight: ' + pageHeight + ' scrollTop: ' + e.scrollTop + ' pageViewHeight: ' + pageViewHeight);
	var diff = parseInt( ( (pageHeight - e.scrollTop) / pageHeight ) * 100 );
	// console.log(parseInt( ( e.scrollTop / pageHeight ) * 100 ));
	// if ( diff <= 60 && prePageHeight != pageHeight ) {
	if ( (e.scrollTop + 1000) >= ( pageHeight - 100 ) && prePageHeight != pageHeight ) {
		console.log(e.scrollTop + ' ' + pageHeight);
		addItems();
		prePageHeight = pageHeight;
	}
});

// scrollTo
KISSY.Event.on('.BackToTop', 'click', function(e) {
	console.log('BackToTop');
	e.halt();
	e.preventDefault();
	$(window).stop();
	$(window).animate({
		scrollTop:0
	},1,"easeOut");
});

// 添加元素
KISSY.Event.on('.add-something', 'click', function(){
	wf.addItems(DOM.query('.add-waterfall'), function(){
		console.log('added');
		wf.adjust();
	});
});

// 无法访问外部元素
KISSY.Event.on('.add-something-outer', 'click', function(){
	wf.addItems(DOM.query('.add-waterfall-outer'), function(){
		console.log('add failed');
		wf.adjust();
	});
});

// 动态添加元素
KISSY.Event.on('.add-something-ajax', 'click', function(){
	KISSY.io({
		data:{
			// 'method': 'flickr.photos.search',
			// 'api_key': '5d93c2e473e39e9307e86d4a01381266',
			// 'tags': 'rose',
			'type': 'ajax',
			'page': nextpage,
			'perpage': 20,
			// 'format': 'json'
		},
		url: 'http://tpap.com/json.php',
		// url: 'http://api.flickr.com/services/rest/',
		dataType: "jsonp",
		jsonp: "jsoncallback",
		success: function(d) {
			console.log('success');
			if (d.stat !== 'ok') {
				KISSY.alert('load data error!');
				end();
				return;
			}
			var items = [], temp, tempNode;
			var i = 0;
			for(var key in d.photos.photo) {
				temp = d.photos.photo[key];
				temp.height = Math.round(Math.random()*(300 - 180) + 180);
				// console.log(temp);
				createWaterfallItem(temp);
				i++;
			}
			wf.addItems(DOM.query('.addbyClick'), function(){
				console.log('add success');
				wf.adjust();
			});
			// console.log(DOM.get('.container').scrollHeight);
			// console.log(items);
			nextpage = d.page + 1;
			console.log(d.page + ' ' + d.pages);
			if (nextpage > d.pages) {
				end();
			}
		},
		complete: function() {
			console.log('complete');
		}			
	});
});

// test
// var data = {
// 	id: 111,
// 	image: 'http://farm7.static.flickr.com/6184/6129637246_d8424dc7b9_m.jpg',
// 	width: '192',
// 	height: '278',
// 	title: '测试标题啊啊啊啊啊'
// };
// createWaterfallItem(data);

function createWaterfallItem(data) {
	var tempNode = document.createElement("div");
	tempNode.className = "ks-waterfall addbyClick";
	var innerHTML  = '	<img src="' + data.image + '" width="' + data.width + '" height="' + data.height + '">';
		innerHTML += '	<div class="title">' + data.title + '</div>';
		innerHTML += '	<p>';
		innerHTML += '	<button class="delete-one">删除</button>';
		innerHTML += '	<button class="adjust-this">调整高度</button>';
		innerHTML += '	</p>';
	tempNode.innerHTML = innerHTML;
	DOM.query('.taeapp-content')[0].appendChild(tempNode);
	return tempNode;
}

function createWaterfallItemFlickr(data) {
	var tempNode = document.createElement("div");
	tempNode.className = "ks-waterfall addbyClick";
	var innerHTML  = '	<img src="http://farm' + data.farm + '.static.flickr.com/' + data.server + '/' + data.id + '_' + data.secret + '_m.jpg" width="' + data.width + '" height="' + data.height + '" style="height:' + data.height + 'px" />';
		innerHTML += '	<div class="title">' + data.title + '</div>';
		innerHTML += '	<p>';
		innerHTML += '	<button class="delete-one">删除</button>';
		innerHTML += '	<button class="adjust-this">调整高度</button>';
		innerHTML += '	</p>';
	tempNode.innerHTML = innerHTML;
	DOM.query('.taeapp-content')[0].appendChild(tempNode);
}

// 删除元素
KISSY.Event.delegate(container, 'click', '.delete-one', function(event){
	console.log('sss');
// KISSY.Event.on('.delete-one', 'click', function(event){
	var w = $(event.currentTarget).parent(".ks-waterfall");
	wf.removeItem(w, {
		effect:{
			easing:"easeInStrong",
			duration:0.1
		},
		callback:function () {
			wf.adjust();
		}
	});
});

// 调节元素
KISSY.Event.delegate(container, 'click', '.adjust-this', function(event){
// KISSY.Event.on('.adjust-this', 'click', function(event){
	var w = $(event.currentTarget).parent(".ks-waterfall");
	wf.adjustItem(w, {
		effect:{
			easing:"easeInStrong",
			duration:0.1
		},
		process: function () {
			var p = document.createElement("p");
			p.innerHTML = "i grow height";
			w.getDOMNode().appendChild(p);
			wf.adjust();
		},
		callback: function () {
			console.log("调整完毕");
		}
	});
});

function addItems() {
	KISSY.io({
		data:{
			'method': 'flickr.photos.search',
			'api_key': '5d93c2e473e39e9307e86d4a01381266',
			'tags': 'rose',
			'type': 'ajax',
			'page': nextpage,
			'perpage': 20,
			'format': 'json'
		},
		// url: 'http://tpap.com/json.php',
		url: 'http://api.flickr.com/services/rest/',
		dataType: "jsonp",
		jsonp: "jsoncallback",
		success: function(d) {
			try {
				// console.log('success');
				if (d.stat == 'no') {
					KISSY.alert('load complete!');
					// end();
					return;
				}
				if (d.stat !== 'ok') {
					KISSY.alert('load data error!');
					end();
					return;
				}
				var items = [], temp, tempNode;
				var i = 0;
				for(var key in d.photos.photo) {
					temp = d.photos.photo[key];
					temp.height = Math.round(Math.random()*(300 - 180) + 180);
					// createWaterfallItem(temp);
					createWaterfallItemFlickr(temp);
					i++;
				}
				wf.addItems(DOM.query('.addbyClick'), function(){
					console.log('add success');
					wf.adjust();
				});
				nextpage = d.page + 1;
				if (nextpage > d.pages) {
					// end();
				}
			} catch(e) {

			}
		},
		complete: function() {
			// console.log('complete');
			isScrolling == true;
		}			
	});
}