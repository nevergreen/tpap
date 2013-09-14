var DD = KISSY.DD;
var Constrain = DD.Constrain;
var $ = KISSY.all;

var drag = new DD.DraggableDelegate({
	container:".wrapper",
	selector:".drag",
	handlers:[".header"], // 设置了这个之后，只有拖动header才会拖动元素。不设置的话，整个drag元素都是trigger
	bufferTime:0.5,
	move:1/*,
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

/*var drop = new DD.DroppableDelegate({
	container:".wrapper",
	selector:".drop"
});*/


    