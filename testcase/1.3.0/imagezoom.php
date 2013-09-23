<!--页头公共资源引入-->
<? include("../common/head.php");?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->
<link rel="stylesheet" href="/assets/stylesheets/imagezoom.css" />

<div class="J_TScriptedModule" data-componentid="uniqueSign">
	<div class="demo">
		<img class="taeapp-standard" src="http://img03.taobaocdn.com/bao/uploaded/i3/T1fftwXf8jXXX7ps79_073021.jpg_310x310.jpg" style="width:200px;height:200px;" />
		<br/>
		<ul class="taeapp-imgList">
			<li>
				<img data-bigimagewidth="700" data-bigimageheight="700" data-has-zoom="true" data-ks-imagezoom="http://img03.taobaocdn.com/bao/uploaded/i3/T1fftwXf8jXXX7ps79_073021.jpg" src="http://img03.taobaocdn.com/bao/uploaded/i3/T1fftwXf8jXXX7ps79_073021.jpg_40x40.jpg">
			</li>
			<li>
				<img src="http://img06.taobaocdn.com/imgextra/i6/354823861/T2vWNlXbFdXXXXXXXX_!!354823861.jpg_40x40.jpg" data-bigimagewidth="700" data-bigimageheight="700" data-has-zoom="true" data-ks-imagezoom="http://img06.taobaocdn.com/imgextra/i6/354823861/T2vWNlXbFdXXXXXXXX_!!354823861.jpg">
			</li>
			<li>
				<img src="http://img05.taobaocdn.com/imgextra/i5/T1DERIXmXsXXa26X.Z_031259.jpg_40x40.jpg" data-has-zoom="true" data-bigimagewidth="700" data-bigimageheight="700" data-ks-imagezoom="http://img05.taobaocdn.com/imgextra/i5/T1DERIXmXsXXa26X.Z_031259.jpg" >
			</li>
		</ul>
	</div>
</div>

<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">

     cajaConfig={//配置下你需要引入的模块名称，最后会被use到
         modules:"openjs/kissy/1.3.0/core,openjs/kissy/1.3.0/imagezoom"
     }

</script>

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?
    $jsurl="testcase/1.3.0/imagezoom.js";//注意路径
    $jsservice="../common/cajoled_service.php";//注意路径
    include("../common/foot.php");//引入foot
?>