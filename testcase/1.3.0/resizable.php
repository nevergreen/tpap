<!--页头公共资源引入-->
<? include("../common/head.php");?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->

<style>
.box {
  position: relative;
  width: 80px;
  height: 80px;
  background: white;
  cursor: auto;
}
.box .content {
  overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  filter: alpha(opacity=80);
}
.box span {
  color: #d14;
  font-size: 12px;
  cursor: pointer;
}
.box .rs-resizable-handler {
  position: absolute;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  z-index: 1;
}
.box .rs-resizable-handler-t, .box .rs-resizable-handler-b, .box .rs-resizable-handler-r, .box .rs-resizable-handler-l {
  opacity: 0.6;
  filter: alpha(opacity=60);
  background-color: #F19EC2;
}
.box .rs-resizable-handler-t, .box .rs-resizable-handler-b {
  left: 0;
  height: 3px;
  width: 100%;
  cursor: n-resize;
}
.box .rs-resizable-handler-b {
  bottom: 0;
}
.box .rs-resizable-handler-t {
  top: 0;
}
.box .rs-resizable-handler-r, .box .rs-resizable-handler-l {
  top: 0;
  height: 100%;
  _height: expression(this.parentNode.offsetHeight);
  width: 3px;
  cursor: e-resize;
}
.box .rs-resizable-handler-l {
  left: 0;
}
.box .rs-resizable-handler-r {
  right: 0;
}
.box .rs-resizable-handler-bl, .box .rs-resizable-handler-br, .box .rs-resizable-handler-tl, .box .rs-resizable-handler-tr {
  position: absolute;
  width: 3px;
  height: 3px;
  border: 1px solid #535353;
  background-color: #E4007F;
  z-index: 2;
}
.box .rs-resizable-handler-bl {
  left: -3px;
  bottom: -3px;
  cursor: sw-resize;
}
.box .rs-resizable-handler-br {
  right: -3px;
  bottom: -3px;
  cursor: nw-resize;
}
.box .rs-resizable-handler-tl {
  left: -3px;
  top: -3px;
  cursor: nw-resize;
}
.box .rs-resizable-handler-tr {
  right: -3px;
  top: -3px;
  cursor: sw-resize;
}
</style>
<div class="J_TScriptedModule" data-componentid="uniqueSign">
	<div class="box">
    	<div class="content"><img src="http://img02.taobaocdn.com/tfscom/i3/T1OLJwFh0fXXb1upjX_310x310.jpg" alt=""></div>
    	<span>取消</span>
	</div>
</div>

<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">
     cajaConfig={//配置下你需要引入的模块名称，最后会被use到
         modules:"openjs/kissy/1.3.0/core,openjs/kissy/1.3.0/resizable"
     }

</script>

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?
    $jsurl="testcase/1.3.0/resizable.js";//注意路径
    $jsservice="../common/cajoled_service.php";//注意路径
    include("../common/foot.php");//引入foot
?>