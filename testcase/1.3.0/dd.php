<!--页头公共资源引入-->
<? include("../common/head.php");?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->

<style>
.drag{
    width: 200px;
    height: 200px;
    background-color:black;
    position: relative;
}
.drag .header{
    width:100%;
    height:20px;
    background-color: gray;
    cursor:move;
    text-align:center;
}

.drop{
    width: 200px;
    height: 200px;
    background-color:#468847;
    position: relative; 
}
.drop .header{
    width:100%;
    height:20px;
    background-color: gray;
    cursor:default;
    text-align:center;
}


.wrapper {
	width:500px;
	height:500px;
	background:#09F;
}
</style>
<div class="J_TScriptedModule" data-componentid="uniqueSign">
  <div class="wrapper">
    <div class="drop drop1">
      <div class="header">header</div>
    </div>
    <div class="drag drag1">
      <div class="header">header</div>
    </div>
    <div class="drag drag2">
      <div class="header">header</div>
    </div>
  </div>
</div>

<!--模块初始化的包配置，都很熟悉了--> 
<script type="text/javascript">
     cajaConfig={//配置下你需要引入的模块名称，最后会被use到
         modules:"openjs/kissy/1.3.0/core,openjs/kissy/1.3.0/dd"
     }

</script> 

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?
    $jsurl="testcase/1.3.0/dd.js";//注意路径
    $jsservice="../common/cajoled_service.php";//注意路径
    include("../common/foot.php");//引入foot
?>
