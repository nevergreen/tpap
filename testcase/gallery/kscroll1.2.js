var S = KISSY;
var Kscroll = KISSY.Kscroll; 
var d = new Kscroll('.d1', {
	prefix: "clear-",
	hotkey: true,
	bodydrag: true,
	allowArrow: true
});

S.all("#b1").on("click", function(ev) {
	
	d.scrollByPercent(0);
})
S.all("#b2").on("click", function(ev) {
	
	d.scrollByPercent(1);
})
S.all("#b3").on("click", function(ev) {
	
	d.scrollByPercent(.5);
})
S.all("#b4").on("click", function(ev) {
	
	d.scrollByDistance(50);
})
S.all("#b5").on("click", function(ev) {
	
	d.scrollByDistance(-50);
})
S.all("#b6").on("click", function(ev) {
  
	d.scrollToElement("#p2");
})


new Kscroll('.d_nice', {
	prefix: "nice-",
	allowArrow: true
});

new Kscroll('.d31', {
	allowArrow: true
});