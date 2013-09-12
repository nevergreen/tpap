var ColorPicker = KISSY.ColorPicker;
var $ = KISSY.all;


var cp = new ColorPicker({
       defaultColor: "#000",
       trigger: ".colorpicker",
/*       complete: function(){
            var color = cp.getColor();
			console.log(color);
            $(".colorpicker").val(color);
       }*/
    });