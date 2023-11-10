---
title: 更换火火兔 G6/G6s 电路板
sidebar_label: 火火兔 G6/G6s
---

本文提供了火火兔 G6/G6s PCB更换的必要步骤。如果您不打算阅读下面的文档，也可以参考下面的视频。

<iframe width="100%" height="600" src="https://www.youtube.com/embed/hR7V1izzeZw?si=T3cY8y4Oy2Bxkg0H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## 准备

:::caution
在购买 G6 的时候，不要买错了型号，替换电路板只支持右边 MicroUSB 接口的 G6
<img src="https://user-images.githubusercontent.com/1455685/281634732-af6d9f5e-a11d-42d7-9d6f-3a296a4aac42.png" />
:::

- 直径为2.5毫米，长度超过5厘米的十字螺丝刀。
- 一把实用刀，用于去除PCB插座上的粘合剂。
- 可在主要电商网站购买到功能正常的Alilo G6。
- FoloToy生产的G6替换电路板可在以下链接购买：https://gf.bilibili.com/item/detail/1104222005。

<img src="https://user-images.githubusercontent.com/1455685/281617149-782ee59a-1c4a-4a80-8516-1a2946c477cc.jpg" />

## 步骤

1. 检查 火火兔 G6 录音和播放是否正常
2. 使用螺丝刀拧开 火火兔 G6 背后的 6 颗螺丝
3. 小心的打开 火火兔 G6 的外壳后，拔掉主板上所有的插头，首先拔掉电源插头，插头上有胶，可使用美工刀轻轻划开，一定要注意千万不要划到自己的手
4. 拧开主板上的4颗螺丝，取下主板
5. 使用 FoloToy 的主板替换掉原主板，拧紧 3 颗螺丝固定
6. 插好话筒，灯，扬声器和电源的插座，最后插电源的插座。
7. 插好插座后，先不要合起外壳安装螺丝，先打开兔子尾巴上的电源开关，看看新安装的灯是否能亮，并且蓝色慢闪。
8. 如果没有问题，安装好外壳，拧好螺丝就完成了替换。

## Wi-Fi配置

1. 打开玩具背面的开关以供电。蓝色闪烁的灯光表示玩具已进入配对模式。

2. 同时按住上一个/下一个按钮超过5秒钟，进入配置模式。此时，灯光将逐渐变为蓝色。

   ![config](https://user-images.githubusercontent.com/1455685/281584076-b5234f63-f7b5-4e8e-a710-6eedf19b8997.jpg)

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

   ![config](https://github.com/FoloToy/folotoy-tool/assets/1455685/3cf6d0ac-9504-40ec-94c1-54a09a990fd4)


## 开始对话

在装配好玩具并且配置完成网络并且连接上服务器之后，按住中间大圆按键进行对话，松开结束对话，周边的 7 个圆形小按键为切换角色按键，点击后切换角色生效，角色小按键上数值与 roles.json 的 key 是对应着的。

<img src="https://user-images.githubusercontent.com/1455685/278226434-d732ea4b-f4de-4f91-920b-f5bcc17e779f.png" />
<img src="https://user-images.githubusercontent.com/1455685/272765538-a9bcdf56-300a-4bae-a10f-ce7554a072fe.png" />