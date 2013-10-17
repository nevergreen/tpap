tpap(Third Party access policy)
==========

## 简介

第三方安全接入策略是一套前端安全体系的技术方案, 主要为第三方安全接入提供更加便利的支持。
其中HTML&CSS采用服务端的TBMLFILTER过滤引擎, JavaScript安全采用[t-caja](https://github.com/lorrylockie/t-caja)

t-caja本身提供了基础JavaScript语言层面的API, 虽然保证了应用的安全, 但对于开发复杂的应用, 缺少功能和ui组件的支持是很困难的，此工程的目的就是让第三方开发者可以基于t-caja使用KISSY相关特性
同时目前项目中也有关于第三方安全库适配的代码(阿里云和jssdk)

目前tpap和t-caja工程应用于淘宝的旺铺模板开发，淘宝U站，品牌中心，聚石塔等淘宝核心开放业务平台


## 如何贡献

[如何进行安全组件的适配](https://github.com/lorrylockie/tpap/wiki/如何进行前端安全组件的适配工作)

#### WIKI
也欢迎你贡献 [wiki](https://github.com/lorrylockie/tpap/wiki)

#### 有问题
欢迎[提issue](https://github.com/lorrylockie/caja/issues/new)， 我会第一时间回复


#### 目录结构说明

utf8 编码

* assets 前端源代码
* assets/base tpap的一些基础环境工具
* asssets/openjs tpap的适配模块代码，代码中有详细的注释。适配过程中可以参考一些其他模块。模块的适配已经规范化
* assets/widgets 一些公共的js服务。目前是switchable的根据html自动初始化组件

* testcase 测试用例编写目录
* testcase/index.php 测试用例索引目录
* testcase/README 如何编写测试用例说明
* testcase common 为基础的页头页尾，每个测试用例需要引入common中的head和foot文件作为基础环境，并且调用cajoled_service.php 作为js的编译服务。
* testcase 1.3.0/gallery/thirdparty 基本和assets/openjs 目录对应
* test 测试代码库，目前里面只有一个js，提供一个很简单的类似于jasmine的api


#### 代码运行
##### 适配
1. `clone https://github.com/lorrylockie/t-caja.git caja` 到本工程同级目录
2. 将caja和当前项目目录，放到php 服务器中，访问 index.php访问项目首页
3. 按照流程编写完测试用例后，直接访问测试的php文件。在运行测试代码的url上加上__dev__参数可以测试caja，如果不测试caja可以省略第一个步骤.
4. 编写完适配代码，`grunt`, 项目打包

