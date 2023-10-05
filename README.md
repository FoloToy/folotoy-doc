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

套件包含：改造PCB1个，RGB可编程灯条1套，USB接口线1套，透明物料盒1个，国内包邮。

目前有三个版本：

 - 适配火火兔G6（已发布，建议优先选择）
 - 适配火火兔F6（计划10月上旬发布）
 - 适配米兔故事机C1（10月上旬发布）

B 站工坊下单链接：https://gf.bilibili.com/item/detail/1104524005

<img width="512" src="https://guoxinghua-md-images-1256257597.cos.ap-beijing.myqcloud.com/note/20231004191909.png" alt="folotoy-robot">

### 火火兔整机（适合希望到手即用的用户）

- 基于原厂全新 G6 版火火兔魔改主机 1 个
- 蓝色、粉色两个版本可选
- 火火兔原厂定制的空白硅胶按键 1 套
- 对话体验包：首次使用后三个月内 1000 次多角色对话（3.5版本），角色和音色可自行定义（此功能将在10月份逐步上线后兑现，目前收到货后可使用自建服务器或者我们提供体验服务器）

B 站工坊下单链接：https://gf.bilibili.com/item/detail/1104222005

<img width="512" src="https://guoxinghua-md-images-1256257597.cos.ap-beijing.myqcloud.com/note/20231004185705.png" alt="folotoy-robot">


## 适配玩具

目前改造套件适配以下版本的故事机，每种套件对应的玩具型号不同：

- 火火兔 G6 版本（必须是 MicroUSB 接口的 G6/G6C，不支持早期 MiniUSB 接口，改造成本低，推荐用户首选此版本）

<img width="512" src="https://guoxinghua-md-images-1256257597.cos.ap-beijing.myqcloud.com/note/20230927000519.png" alt="folotoy-robot">

<img width="512" src="https://guoxinghua-md-images-1256257597.cos.ap-beijing.myqcloud.com/note/20230927085208.png" alt="folotoy-robot">

以上型号对比图片来自火火兔官网：http://www.alilo.com.cn/#/pages/products/detail?type=1&name=G6

- 火火兔 F6/F6s 版本

<img width="512" src="https://guoxinghua-md-images-1256257597.cos.ap-beijing.myqcloud.com/note/20230927000812.png" alt="folotoy-robot">

- 米兔 C1 故事机(拆机需要专业工具，改造难度较大)

<img width="512" src="https://guoxinghua-md-images-1256257597.cos.ap-beijing.myqcloud.com/note/20230927000636.png" alt="folotoy-robot">


## 按键说明

改造需要替换掉玩具原来的电路板，因此按键也有了新的定义

### 火火兔 G6 按键功能

对话：和玩具开始对话时，需要**按住**中间的按键，当结束对话时，松开按键

角色切换：图示标注 1-7 数字的按键为角色切换按键，对应到角色配置文件的 1-7

<img width="512" src="https://guoxinghua-md-images-1256257597.cos.ap-beijing.myqcloud.com/note/20231005093247.png" alt="folotoy-robot">

角色的修改与定义在[roles.json](https://github.com/FoloToy/folotoy-server-self-hosting/blob/main/roles.json)中进行

<img width="512" src="https://guoxinghua-md-images-1256257597.cos.ap-beijing.myqcloud.com/note/20231005093424.png" alt="folotoy-robot">


## 交流社区

### 电报

[https://t.me/fofotuai](https://t.me/fofotuai)


<img width="256" src="https://guoxinghua-md-images-1256257597.cos.ap-beijing.myqcloud.com/note/20230926234745.png" alt="folotoy-robot">

### 微信

<img width="256" src="https://guoxinghua-md-images-1256257597.cos.ap-beijing.myqcloud.com/note/20231004073940.png" alt="folotoy-robot">
