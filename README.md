# icy
模仿爱穿衣icy.ichuanyi.com网站。<br>
实现[icy.ichuanyi.com/icy/designer](icy.ichuanyi.com/icy/designer)页面部分模块。<br>
点击[此处](https://likedblack.github.io/icy/)浏览。
***

## 开发工具
Nodejs， Ubuntu 16.04， VSCode
***

## 测试环境
Chrome浏览器，Firefox浏览器，Nubia N2手机
***

## 所用技术及框架
Vue， sass， Vant UI， axios， Easy Mock
***

## 主要功能点
1. axios动态请求后端数据，请求时显示loading提示
2. 上拉加载**大家说**模块
3. Header根据滚动条高度的动态显示与隐藏
4. 模块与引擎结构设计
***

## 关于原网站的发现
1. 原网站大量使用px作为尺寸单位，然后通过js脚本动态写入meta控制页面缩放来适配移动端。此方法的弊端是只有在载入网页的时候才能设置缩放，无法响应式改变。更好的方法是使用rem单位。
***

## 待优化部分
1. loading提示显示在底部
***

## 未做模块的实现想法
+ 下拉刷新。
  * 监听下拉事件，js判断下拉距离大于滚动条顶端距离则触发刷新。
+ 打开APP按钮
  * JS跳转链接。APP安装时向手机注册一个特定URL(由APP开发人员实现)， JS跳转此链接即可。若手机无此URL说明未安装APP，跳转到下载链接。
***

## 已知问题
1. 大家说模块**商品图片**显示模糊
***
