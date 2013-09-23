var Resizable = KISSY.Resizable;

var $ = KISSY.all;
var startEvent = null;
var r = new Resizable({
	node:".box",
	handlers:["b","t","r","l","tr","tl","br","bl"], 
	minHeight:50,
	minWidth:50,
	maxHeight:300,
	maxWidth:300
});


r.on("resizeStart", function(e){
  console.log('resize --  start');
});

r.on("resizeEnd", function(e){
  console.log('resize --  end');
});

$(".box span").on("click", function(){
	r.destroy();
  console.log('resize --  destroy');
});