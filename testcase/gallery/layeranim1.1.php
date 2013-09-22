<!--页头公共资源引入-->
<? include("../common/head.php");?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign"> 的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->
<div class="J_TScriptedModule" data-componentid="uniqueSign">
    <style>
        .layerAnimTest {
            position: relative;
            height: 400px;
            width: 400px;
        }
        .layer1,
        .layer2,
        .layer3,
        .layer4,
        .layer5{
            position: absolute;
            background: red;
            height: 20px;
            width: 20px;
        }
        .layer2 {
            background: blue;
            top: 20px;
        }
        .layer3 {
            background: green;
            top: 40px;
        }
        .layer4 {
            background: yellow;
            top: 60px;
        }
        .layer5 {
            background: purple;
            top: 80px;
        }
        .msg {
            color:red;
        }
    </style>
    <div class="layerAnimTest">
        <div class="layer1"></div>
        <div class="layer2"></div>
        <div class="layer3"></div>
        <div class="layer4"></div>
        <div class="layer5"></div>
    </div>

    <button class="run">run</button>
    <button class="runReverse">runReverse</button>
    <button class="pause">pause</button>
    <button class="resume">resume</button>
    <button class="stop1">stop[rest]</button>
    <button class="stop2">stop[not reset]</button>
    <button class="seek">seek(1s)</button>
    <button class="end">end</button>
    <button class="kill">kill</button>
    <button class="add">add</button>
    <button class="clear">clear</button>

    <p class="msg"></p>

</div>

<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">

    cajaConfig={//配置下你需要引入的模块名称，最后会被use到
        modules:"openjs/kissy/1.3.0/core,openjs/kissy/gallery/layer-anim/1.1/index"
    }

</script>

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?
$jsurl="testcase/gallery/layeranim1.1.js";//注意路径
$jsservice="../common/cajoled_service.php";//注意路径
include("../common/foot.php");//引入foot
?>