# FoloToy - A ChatGPT Toy

<p align="center">
这是一个语音对话玩具改造项目，选择了孩子的故事机玩具进行改造，目的是任何人可以自己动手快速打造出个性化的 AI 语音交互玩具，创造更多可能。
</p>

</p>

## 目录

* [视频教程](#视频教程)
* [资源集合](#资源集合)
* [硬件改造](#硬件改造)
* [适配玩具](#适配玩具)
* [按键说明](#按键说明)
* [交流社区](#交流社区)


## 视频教程

- YouTube

  - [电路板替换教程](https://youtu.be/hR7V1izzeZw)
  - [服务器程序安装教程 ](https://www.youtube.com/watch?v=AKHzjdfIoTM)

- B 站
  - [电路板替换教程](https://www.bilibili.com/video/BV1184y1S7pV)
  - [服务器程序安装教程-Windows ](https://www.bilibili.com/video/BV1YN411t74A)
  - [服务器程序安装教程-Linux ](https://www.bilibili.com/video/BV1bp4y1w7ER)


## 资源集合

- [服务器部署指南](https://github.com/FoloToy/folotoy-server-self-hosting)
- [WiFi配网指南](https://github.com/FoloToy/folotoy-tool/wiki/%E9%85%8D%E7%BD%91%E8%AF%B4%E6%98%8E)
- [固件下载指南](https://github.com/FoloToy/folotoy-tool/wiki/%E5%88%B7%E6%9C%BA%E8%AF%B4%E6%98%8E)
- [刷机工具](https://tool.folotoy.com/index)
- [交流社区](https://t.me/fofotuai)


## 硬件改造

### 改造套件（适合喜欢DIY的用户）

套件包含：改造 PCB 1 个，RGB 可编程灯条 1 套，USB 接口线 1 套，透明物料盒 1 个邮。

目前有三个版本：

 - 适配火火兔 G6（推荐）
 - 适配火火兔 F6（10 月上旬发布）
 - 适配米兔故事机 C1（10 月上旬发布）

B 站工坊下单链接：https://gf.bilibili.com/item/detail/1104524005

<img width="512" src="https://user-images.githubusercontent.com/1455685/272765067-ff9585f6-4533-453e-a1ff-6d9d61f0a5dd.jpg" alt="folotoy-robot">


### 火火兔整机（适合希望到手即用的用户）

- 基于原厂全新 G6 版火火兔魔改主机 1 个
- 蓝色、粉色两个版本可选
- 火火兔原厂定制的空白硅胶按键 1 套
- 对话体验包：首次使用后三个月内 1000 次多角色对话（3.5版本），角色和音色可自行定义（此功能将在 10 月份逐步上线后兑现，目前收到货后可使用自建服务器或者我们提供体验服务器）

B 站工坊下单链接：https://gf.bilibili.com/item/detail/1104222005

<img width="512" src="https://user-images.githubusercontent.com/1455685/272764856-8e9e4d23-71ad-4fcc-ad78-91e866702c7a.png" alt="folotoy-robot">


## 适配玩具

目前改造套件适配以下版本的故事机，每种套件对应的玩具型号不同：

- 火火兔 G6 版本（必须是 MicroUSB 接口的 G6/G6C，不支持早期 MiniUSB 接口，改造成本低，推荐用户首选此版本）

<img width="512" src="https://user-images.githubusercontent.com/1455685/272773157-68ad9fb7-f77e-4ae3-ad48-7e0cf2d113e9.jpg" alt="folotoy-robot">

<img width="512" src="https://user-images.githubusercontent.com/1455685/272765099-0f76547e-22f9-41d9-8d8e-f013adb42349.png" alt="folotoy-robot">

以上型号对比图片来自火火兔官网：http://www.alilo.com.cn/#/pages/products/detail?type=1&name=G6

- 火火兔 F6/F6s 版本

<img width="512" src="https://user-images.githubusercontent.com/1455685/272765126-3730b1aa-d65e-4ab4-b31d-a32d27c11b19.png" alt="folotoy-robot">

- 米兔 C1 故事机(拆机需要专业工具，改造难度较大)

<img width="512" src="https://user-images.githubusercontent.com/1455685/272773277-81106667-86cf-4e14-856d-19b463f786d6.png" alt="folotoy-robot">


## 按键说明

改造需要替换掉玩具原来的电路板，因此按键也有了新的定义

### 火火兔 G6 按键功能

对话：和玩具开始对话时，需要**按住**中间的按键，当结束对话时，松开按键

角色切换：图示标注 1-7 数字的按键为角色切换按键，对应到角色配置文件的 1-7

<img width="512" src="https://user-images.githubusercontent.com/1455685/272773455-36eb6085-2b62-4009-8eaf-5b3bf88768c1.png" alt="folotoy-robot">

<img width="512" src="https://user-images.githubusercontent.com/1455685/272764950-cbaf933e-69fc-4cfb-932c-b4a1b26067a5.jpg" alt="folotoy-robot">

角色的修改与定义在[roles.json](https://github.com/FoloToy/folotoy-server-self-hosting/blob/main/roles.json)中进行

<img width="512" src="https://user-images.githubusercontent.com/1455685/272765538-a9bcdf56-300a-4bae-a10f-ce7554a072fe.png" alt="folotoy-robot">


## 交流社区

### 电报

[https://t.me/fofotuai](https://t.me/fofotuai)


<img width="256" src="https://user-images.githubusercontent.com/1455685/272765491-57b7b972-18a6-403a-8ab3-535292178172.png" alt="folotoy-robot">

### 微信

<img width="256" src="https://user-images.githubusercontent.com/1455685/272772738-98deeac3-87cc-42cb-9f1b-332078b1da72.png" alt="folotoy-robot">
