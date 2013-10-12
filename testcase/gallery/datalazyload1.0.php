<!--页头公共资源引入-->
<? include("../common/head.php");?>

<!--
    需要测试的dom结构，注意，最外层<div class="J_TScriptedModule" data-componentid="uniqueSign">
的class和为属性不可修改
    用户的javascript理论上只可以作用到这个dom下面，不可以"越界"
-->
<style type="text/css">
    .demos{margin:0 auto;width: 600px;}
    .demo1{border: 1px solid green;margin-top: 5px;}
    .gap{height: 50px;background-color: red}
    .mod{height: 410px;margin:5px;border: 1px solid red;}
</style>
<div class="J_TScriptedModule" data-componentid="uniqueSign">
    <div class="demos">
    <h2>DEMO1</h2>
        <div class="demo1" >
            <button class="pause">pause</button>
            <button class="resume">resume</button>

            <p>lazy load module when scoll to it or jump to it</p>

            <ul>
                <li>
                    <a href="#module1">Jump to module1</a>
                </li>
                <li>
                    <a href="#module2">Jump to module2</a>
                </li>
                <li>
                    <a href="#module3">Jump to module3</a>
                </li>
                <li>
                    <a href="#module4">Jump to module4</a>
                </li>
                <li>
                    <a href="#module5">Jump to module5</a>
                </li>
                <li>
                    <a href="#module6">Jump to module6</a>
                </li>
            </ul>

            <div class='mod'>
                <a name="module1"></a>
                <textarea class="ks-datalazyload" >module1</textarea>
            </div>

            <div class='mod'>
                <a name="module2"></a>
                <textarea class="ks-datalazyload" >module2</textarea>
            </div>

            <div class='mod'>
                <a name="module3"></a>
                <textarea class="ks-datalazyload" >module3</textarea>
            </div>

            <div class='mod'>
                <a name="module4"></a>
                <textarea class="ks-datalazyload" >module4</textarea>
            </div>

            <div class='mod'>
                <a name="module5"></a>
                <textarea class="ks-datalazyload" >module5</textarea>
            </div>

            <div class='mod'>
                <a name="module6"></a>
                <textarea class="ks-datalazyload" >module6</textarea>
            </div>

            <div class="gap">demo1懒加载完，会隐藏！</div>

        </div>
         <h2>DEMO2</h2>
        <div class="demo2">
            <p>
                <img data-ks-lazyload="http://img01.taobaocdn.com/tps/i1/T1zqNUXAdcXXaCwpjX.png" />
            </p>
            <p>
                <img data-ks-lazyload="http://img02.taobaocdn.com/tps/i2/T1zqNUXAdcXXaCwpjX.png" />
            </p>
            <p>
                <img data-ks-lazyload="http://img01.taobaocdn.com/tps/i1/T1H50UXAlcXXaCwpjX.png" />
            </p>
            <p>
                <img data-ks-lazyload="http://img02.taobaocdn.com/tps/i2/T15OhHXwhbXXcE7fze-700-320.png" />
            </p>
            <p>
                <img data-ks-lazyload="http://img02.taobaocdn.com/tps/i2/T15OhHXwhbXXcE7fze-700-320.png" />
            </p>
            <p>
                <img data-ks-lazyload="http://img01.taobaocdn.com/tps/i1/T1qPRVXuJcXXaCwpjX.png" />
            </p>
        </div>

         <h2>DEMO3</h2>
        <div class="demo3">
            <p>
                <img data-ks-lazyload="http://img01.taobaocdn.com/tps/i1/T1zqNUXAdcXXaCwpjX.png" />
            </p>
            <p>
                <img data-ks-lazyload="http://img02.taobaocdn.com/tps/i2/T1zqNUXAdcXXaCwpjX.png" />
            </p>
            <p>
                <img data-ks-lazyload="http://img01.taobaocdn.com/tps/i1/T1H50UXAlcXXaCwpjX.png" />
            </p>
            <p>
                <img data-ks-lazyload="http://img02.taobaocdn.com/tps/i2/T15OhHXwhbXXcE7fze-700-320.png" />
            </p>
            <p>
                <img data-ks-lazyload="http://img02.taobaocdn.com/tps/i2/T15OhHXwhbXXcE7fze-700-320.png" />
            </p>
            <p>
                <img data-ks-lazyload="http://img01.taobaocdn.com/tps/i1/T1qPRVXuJcXXaCwpjX.png" />
            </p>
        </div>
         <h2>DEMO4</h2>
        <div class="demo4">
            <textarea class="ks-datalazyload">
                <p>
                    <img src="http://img08.taobaocdn.com/bao/uploaded/i8/T1UZqgFnlfXXamRoc__110658.jpg_250x250.jpg" />
                </p>
                <p>
                    <img src="http://img08.taobaocdn.com/bao/uploaded/i8/T1wVGYXiptXXbLmaEW_022451.jpg_250x250.jpg" />
                </p>
                <p>
                    <img src="http://img01.taobaocdn.com/imgextra/i1/14620029131268031/T1GMZBXeRdXXXXXXXX_!!0-item_pic.jpg_250x250.jpg" />
                </p>
                安全考虑，禁用了脚本
                <script>KISSY.log("javascript运行了！");</script>
            </textarea>
        </div>

    </div>
</div>
</div>
<!--模块初始化的包配置，都很熟悉了-->
<script type="text/javascript">

    cajaConfig={//配置下你需要引入的模块名称，最后会被use到
        modules:"openjs/kissy/1.3.0/core,openjs/kissy/gallery/datalazyload/1.0/index"
    }

</script>

<!--这里是将自己的js让服务端编译一下，配置下服务端的php路径和自己的js即可，注意路径-->
<?
$jsurl="testcase/gallery/datalazyload1.0.js";//注意路径
$jsservice="../common/cajoled_service.php";//注意路径
include("../common/foot.php");//引入foot
?>