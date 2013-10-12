var S = KISSY;
var DataLazyload = KISSY.DataLazyload;

//demo1
var d = new DataLazyload({
	container: '.demo1',
	diff: 50,

});

KISSY.all('.pause').on('click', function() {
	d.pause();
});

KISSY.all('.resume').on('click', function() {
	d.resume();
});

//加载完，调用
d.on("destroy", function() {
	KISSY.all('.gap').hide();
});


//demo2
var lay = new DataLazyload({
	container: '.demo2',
	diff: 150,
	placeholder: 'http://img01.taobaocdn.com/tps/i1/T1Kz0pXzJdXXXIdnjb-146-58.png'

});

//demo3
var test1 = new DataLazyload({
	container: '.demo3',
	diff: 150,
	placeholder: 'http://img01.taobaocdn.com/tps/i1/T1Kz0pXzJdXXXIdnjb-146-58.png'

});

test1.addCallback(".demo1", function() {
	S.log("u see me test1,add in selector");
});



//demo4 test javascrpt iframne 是否允许
var test3 = new DataLazyload({
	container: '.demo4',
	diff: 50	
});