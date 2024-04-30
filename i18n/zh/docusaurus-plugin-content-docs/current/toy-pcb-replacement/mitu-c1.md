---
title: 更换米兔 C1 电路板
sidebar_label: 米兔 C1
---

本文提供了米兔 C1 更换的必要步骤。如果您不打算阅读下面的文档，也可以参考下面的视频。

<iframe width="100%" height="600" src="//player.bilibili.com/player.html?aid=959871024&bvid=BV1Qp4y1T71J&cid=1303264940&p=1&autoplay=0" scrolling="no" border="0" frameBorder="no" framespacing="0" allowfullscreen="true"> </iframe>


## 准备

- 检查原主板是否是支持的型号
- 可在主要电商网站购买到功能正常的米兔 C1
- FoloToy 生产的 C1 替换电路板可在以下链接购买：https://gf.bilibili.com/item/detail/1104222005

<img src="https://user-images.githubusercontent.com/1455685/281623396-41fd475c-39c8-44b1-b994-df8e5ae5dd0b.png" />

## 步骤

1. 检查米兔 C1 录音和播放是否正常
2. 撕开米兔 C1 底部的标签纸，使用螺丝刀拧开螺丝，取下底部盖板
3. 用薄片撬开米兔 C1 背后开关上面的外壳
4. 使用螺丝刀拧开米兔 C1 背后的颗螺丝
3. 小心的打开米兔 C1 的外壳后，拔掉主板上所有的插头，首先拔掉电源插头
4. 拧开主板上的螺丝，取下主板
5. 使用 FoloToy 的主板替换掉原主板
6. 插好替换的电源 usb 线，话筒，灯，扬声器和电源的插座，最后插电源的插座，另外固定电池的挡板需要轻轻转动一个角度。
7. 插好插座后，先不要合起外壳安装螺丝，先打开兔子尾巴上的电源开关，看看新安装的灯是否能亮，并且蓝色慢闪。
8. 如果没有问题，安装好外壳，拧好螺丝就完成了替换。

## Wi-Fi配置

[设备配网及配置服务器](../manual/wifi-connect.md)

### 如何进入配网模式

同时按住上一个/下一个按钮超过5秒钟，进入配置模式。此时，灯光将逐渐变为蓝色。

   ![config](https://user-images.githubusercontent.com/1455685/281622358-88c91980-212e-4d39-a54c-7575e788e843.jpg)
<!-- 
1. 打开玩具背面的开关以供电。蓝色闪烁的灯光表示玩具已进入配对模式。

2. 同时按住上一个/下一个按钮超过5秒钟，进入配置模式。此时，灯光将逐渐变为蓝色。

   ![config](https://user-images.githubusercontent.com/1455685/281622358-88c91980-212e-4d39-a54c-7575e788e843.jpg)

3. 连接到玩具的热点。

   打开您的手机或计算机，并选择“FoloToy-xxxx”无线网络。稍等片刻，您的手机或计算机将自动打开一个配置页面，在该页面中您可以设置要连接到哪个WiFi网络、服务器地址和端口号。

   **如果尚未设置自己的服务器，则需要提供服务器地址/端口，请参考 [Server Installation](installation/docker.md)。**

   :::caution
   如果没有弹出任何页面，也可以通过在浏览器中输入 http://192.168.4.1 来进行配置。
   :::

   * 进入配置模式：同时按住前面板上向前和向后按钮5秒钟；此时耳朵灯会闪烁蓝色。
   * 连接 FoloToy：使用手机或计算机搜索可用WiFi网络；找到名为"FoloToy-xxxx"（例如FoloToy-b8a2）的网络。
   * 打开配置页面：一旦连接到 FoloToy 的 WiFi 网络，将自动打开一个配置页面。
   * 主屏幕说明：主屏幕上有三个按钮 - "Configure WiFi"用于设置WiFi连接；"Info"用于查看硬件信息；"Exit"用于退出配置。请参考下面的图片。

   ![config](https://github.com/FoloToy/folotoy-tool/assets/1455685/3cf6d0ac-9504-40ec-94c1-54a09a990fd4) -->


## 开始对话

在装配好玩具并且配置完成网络并且连接上服务器之后，按住图示的录音按键进行对话，松开结束对话，其他小按键为切换角色按键，点击后切换角色生效，角色小按键上数值与 roles.json 的 key 是对应着的。

<img src="https://user-images.githubusercontent.com/1455685/281640312-8e8b57b6-9c77-440f-9e1c-0279ddc87588.jpg" />
<img src="https://user-images.githubusercontent.com/1455685/272765538-a9bcdf56-300a-4bae-a10f-ce7554a072fe.png" />