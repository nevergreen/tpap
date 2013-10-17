<!--页头公共资源引入-->
<? include("../common/head.php");?>
<style>
	body {
		background-color: #E8E7E3;
		font-size: 12px;
		font-family: tahoma,arial,宋体,sans-serif;
	}

	.container {
		height: 500px;
	}

	.ks-waterfall {
		background-color: #FFFFFF;
		position: absolute;
		width: 192px;
		overflow: hidden;
		padding: 15px;
		border: 2px solid #ddd;
		margin-bottom: 20px;
		text-align: center;
		left:-9999px;
		top:-9999px;
	}
	.wrapper {
		border: medium none;
		margin: 0 auto;
		position: relative;
		width: auto;
	}
	.article {
		min-width: 500px;
		padding: 8px 0 0;
		width: auto;
	}
	.ColumnContainer {
		margin: 0 auto;
		min-height: 500px;
		min-width: 500px;
		position: relative;
	}
	.BackToTop {
		background-color: white;
		border: 1px solid #ECECEC;
		border-radius: 8px 8px 8px 8px;
		bottom: 9px;
		color: #41545F;
		cursor: pointer;
		opacity: 0.9;
		padding: 20px 10px;
		position: fixed;
		right: 9px;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		width: 50px;
	}
</style>
<!--
	需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
	用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->
<div class="J_TScriptedModule" data-componentid="uniqueSign">
	<!-- <div class="wrapper">
		<div id="article">
			<div class="ColumnContainer" style="zoom: 1"> </div>
			<a class="BackToTop">Scroll to Top</a>
			<div class="loadingPins"><img src="http://img03.taobaocdn.com/tps/i3/T1Ar9xXg0JXXXXXXXX-16-16.gif" alt="Pin Loader Image"/><span>Fetching pins&hellip;</span></div>
		</div>
	</div> -->
	<div class="container" style="position: relative;">
		<div class="ks-waterfall ks-waterfall-fixed-left"><img src="http://farm7.static.flickr.com/6072/6128820646_75d4f4f26d_m.jpg" width="192" height="113">
			<div class="title">untitled</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6073/6128760690_1a440d382c_m.jpg" width="192" height="288">
			<div class="title">Southern Weddings Feature! ? Jesi Haack Design Blog</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6067/6128732032_cb5f8b333a_m.jpg" width="192" height="239">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6089/6128421611_cac1c4b692_m.jpg" width="192" height="249">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall ks-waterfall-fixed-right"><img src="http://farm7.static.flickr.com/6197/6129267012_3947cdc5d5_m.jpg" width="192" height="257">
			<div class="title">biscodeja-vu:

			always wanted to since a child</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6209/6129463356_a1f5ded3a9_m.jpg" width="192" height="251">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6079/6124888544_bed1a4b55d_m.jpg" width="192" height="144">
			<div class="title">hurst song architekten: lumbrein residence</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6081/6129611392_49ffddec14_m.jpg" width="192" height="290">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6082/6129598160_0f516dc255_m.jpg" width="192" height="287">
			<div class="title">第一站：Los Angeles - Feather - Enjoyable Life</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6184/6129637246_d8424dc7b9_m.jpg" width="192" height="278">
			<div class="title">阳朔·初见 - Feather -</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall ks-waterfall-fixed-left"><img src="http://farm7.static.flickr.com/6072/6128820646_75d4f4f26d_m.jpg" width="192" height="113">
			<div class="title">untitled</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6073/6128760690_1a440d382c_m.jpg" width="192" height="288">
			<div class="title">Southern Weddings Feature! ? Jesi Haack Design Blog</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6067/6128732032_cb5f8b333a_m.jpg" width="192" height="239">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6089/6128421611_cac1c4b692_m.jpg" width="192" height="249">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall ks-waterfall-fixed-right"><img src="http://farm7.static.flickr.com/6197/6129267012_3947cdc5d5_m.jpg" width="192" height="257">
			<div class="title">biscodeja-vu:

			always wanted to since a child</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6209/6129463356_a1f5ded3a9_m.jpg" width="192" height="251">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6079/6124888544_bed1a4b55d_m.jpg" width="192" height="144">
			<div class="title">hurst song architekten: lumbrein residence</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6081/6129611392_49ffddec14_m.jpg" width="192" height="290">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6082/6129598160_0f516dc255_m.jpg" width="192" height="287">
			<div class="title">第一站：Los Angeles - Feather - Enjoyable Life</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6184/6129637246_d8424dc7b9_m.jpg" width="192" height="278">
			<div class="title">阳朔·初见 - Feather -</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall ks-waterfall-fixed-left"><img src="http://farm7.static.flickr.com/6072/6128820646_75d4f4f26d_m.jpg" width="192" height="113">
			<div class="title">untitled</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6073/6128760690_1a440d382c_m.jpg" width="192" height="288">
			<div class="title">Southern Weddings Feature! ? Jesi Haack Design Blog</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6067/6128732032_cb5f8b333a_m.jpg" width="192" height="239">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6089/6128421611_cac1c4b692_m.jpg" width="192" height="249">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall ks-waterfall-fixed-right"><img src="http://farm7.static.flickr.com/6197/6129267012_3947cdc5d5_m.jpg" width="192" height="257">
			<div class="title">biscodeja-vu:

			always wanted to since a child</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6209/6129463356_a1f5ded3a9_m.jpg" width="192" height="251">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6079/6124888544_bed1a4b55d_m.jpg" width="192" height="144">
			<div class="title">hurst song architekten: lumbrein residence</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6081/6129611392_49ffddec14_m.jpg" width="192" height="290">
			<div class="title"></div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6082/6129598160_0f516dc255_m.jpg" width="192" height="287">
			<div class="title">第一站：Los Angeles - Feather - Enjoyable Life</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6184/6129637246_d8424dc7b9_m.jpg" width="192" height="278">
			<div class="title">阳朔·初见 - Feather -</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
<!-- 

		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6072/6128820646_75d4f4f26d_m.jpg" width="192" height="113">
			<div class="title">untitled</div>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6073/6128760690_1a440d382c_m.jpg" width="192" height="288">
			<div class="title">Southern Weddings Feature! ? Jesi Haack Design Blog</div>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6067/6128732032_cb5f8b333a_m.jpg" width="192" height="239">
			<div class="title"></div>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6089/6128421611_cac1c4b692_m.jpg" width="192" height="249">
			<div class="title"></div>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6197/6129267012_3947cdc5d5_m.jpg" width="192" height="257">
			<div class="title"></div>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6191/6128826187_6db718d081_m.jpg" width="192" height="296">
			<div class="title">biscodeja-vu:

				always wanted to since a child
			</div>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6209/6129463356_a1f5ded3a9_m.jpg" width="192" height="251">
			<div class="title"></div>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6079/6124888544_bed1a4b55d_m.jpg" width="192" height="144">
			<div class="title">hurst song architekten: lumbrein residence</div>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6081/6129611392_49ffddec14_m.jpg" width="192" height="290">
			<div class="title"></div>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6185/6129587602_65cb8215c1_m.jpg" width="192" height="245">
			<div class="title"></div>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6082/6129598160_0f516dc255_m.jpg" width="192" height="287">
			<div class="title">第一站：Los Angeles - Feather - Enjoyable Life</div>
		</div>
		<div class="ks-waterfall"><img src="http://farm7.static.flickr.com/6184/6129637246_d8424dc7b9_m.jpg" width="192" height="278">
			<div class="title">阳朔·初见 - Feather -</div>
		</div> -->
	</div>
	<button class="add-something">添加元素</button>
	<button class="add-something-outer">添加外部元素</button>
	<button class="add-something-ajax">动态添加元素</button>

	<div class="ks-waterfall add-waterfall">
		<img src="http://gi2.md.alicdn.com/bao/uploaded/i2/14170027659641234/T1s6OKFXBbXXXXXXXX_!!0-item_pic.jpg" width="192" height="113">
		<div class="title">保健品0</div>
		<p>
			<button class="delete-one">删除</button>
			<button class="adjust-this">调整高度</button>
		</p>
	</div>
	<div class="ks-waterfall add-waterfall">
		<img src="http://gi2.md.alicdn.com/bao/uploaded/i2/14170027659641234/T1s6OKFXBbXXXXXXXX_!!0-item_pic.jpg" width="192" height="113">
		<div class="title">保健品1</div>
		<p>
			<button class="delete-one">删除</button>
			<button class="adjust-this">调整高度</button>
		</p>
	</div>
	<div class="ColumnContainer1" style="zoom: 1"> </div>
	<script type="tpl" class="tpl">
		<div class="ks-waterfall pin" data-id="{id}" style="display: none;">
			<img height="{height}" style='height:{height}px' alt="{title}" src="http://farm{farm}.static.flickr.com/{server}/{id}_{secret}_m.jpg" />
			<div class="title">{title}</div>
			<p>
				<button class="delete-one">删除</button>
				<button class="adjust-this">调整高度</button>
			</p>
		</div>
	</script>
	<div class="taeapp-content" style="display: none; width: 300px; height: 200px; background-color: red"></div>
</div>
<div class="ks-waterfall add-waterfall-outer">
	<img src="http://gi2.md.alicdn.com/bao/uploaded/i2/14170027659641234/T1s6OKFXBbXXXXXXXX_!!0-item_pic.jpg" width="192" height="113">
	<div class="title">保健品1</div>
</div>

<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">

	 cajaConfig={//配置下你需要引入的模块名称，最后会被use到
		 modules:"openjs/kissy/1.3.0/core, openjs/gs/1.0/index, openjs/kissy/1.3.0/waterfall"
	 }

</script>

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?
	$jsurl="testcase/1.3.0/waterfall.js";//注意路径
	$jsservice="../common/cajoled_service.php";//注意路径
	include("../common/foot.php");//引入foot
?>