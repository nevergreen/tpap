var DD = KISSY.DD;
var Constrain = DD.Constrain;
var $ = KISSY.all;

var drag = new DD.DraggableDelegate({
	container:".wrapper",
	selector:".drag",
	handlers:[".header"], // 设置了这个之后，只有拖动header才会拖动元素。不设置的话，整个drag元素都是trigger
	bufferTime:0.5,
	move:1/*
	plugins:[
		new Constrain({
			constrain:".wrapper"
		})
	]*/
});

drag.on('dragstart', function(){
	console.log('start drag...');
});
drag.on('drag', function(){
	console.log('draging...');
});
drag.on('dragend', function(){
	console.log('end drag...');
});
    
//华丽分割线---------------------------------------------------

var drop = new DD.DroppableDelegate({
	container:".wrapper",
	selector:".drop"
});
drop.on('dropover', function(){
	console.log('有drag对象拖放dao到我的上面啦，在我上面晃来晃去');
});
/*
drop.on('dropenter', function(e){
	console.log('有drag对象拖放dao到我的上面啦，触发一次哦');
	//console.log('drag is me: '+e.drag+ ".  drop is me "+e.drop);
});
drop.on('dropover', function(){
	console.log('有drag对象拖放dao到我的上面啦，在我上面晃来晃去');
});
drop.on('dropexit', function(){
	console.log('有drag对象从我上面离开啦，触发一次哦');
});

drop.on('drophit', function(){
	console.log('有drag对象放在我上面，并且就一直放在这里，不离开了。');
});*/
    