---
title: Alilo F6/F6s PCB Replacement
sidebar_label: Alilo F6/F6s
---

This document provides the necessary steps for PCB replacement of Alilo F6/F6s. If you don't plan to read the document below, you can also refer to the video below.


## Requirements

- A cross screwdriver with a diameter of 2.5mm and a length of over 5cm.
- A utility knife, used to remove the adhesive on top of the PCB socket.
- A functioning Alilo F6 can be purchased on major e-commerce websites.
- A replacement circuit board for the F6, produced by FoloToy, can be purchased at: https://gf.bilibili.com/item/detail/1104222005.

<img src="https://user-images.githubusercontent.com/1455685/281617149-782ee59a-1c4a-4a80-8516-1a2946c477cc.jpg" />

## Instructions

:::caution
如果是 F6s 这个型号，原主板为 Type-C 接口，直接替换存在 MIC 和扬声器接口不适配的情况，目前可通过转接线实现正常连接
<img src="https://user-images.githubusercontent.com/1455685/281634362-5b038713-dc3e-4430-a698-b9c32318f12a.png" />
:::


1. 检查 Alilo F6 录音和播放是否正常
2. 使用螺丝刀拧开 Alilo F6 底座和背后的螺丝
3. 小心的打开 Alilo F6 的外壳后，拔掉主板上所有的插头，首先拔掉电源插头，插头上有胶，可使用美工刀轻轻划开，一定要注意千万不要划到自己的手
4. 拧开主板上螺丝，取下主板
5. 使用 FoloToy 的主板替换掉原主板，拧紧螺丝固定
6. 插好话筒，灯，扬声器和电源的插座，最后插电源的插座。
7. 插好插座后，先不要合起外壳安装螺丝，先打开兔子尾巴上的电源开关，看看新安装的灯是否能亮，并且蓝色慢闪。
8. 如果没有问题，安装好外壳，拧好螺丝就完成了替换。

## Wi-Fi Configure

1. Turn on the switch at the back of the toy to power it on. The blue flashing light indicates that the toy has entered pairing mode.

2. Simultaneously press and hold the previous/next button for more than 5 seconds to enter configuration mode. At this time, the light will gradually change to blue.

   ![config](https://user-images.githubusercontent.com/1455685/281622340-7a607890-38d3-46f5-80e5-3168ee99a2e0.jpg)

3. Connect to the hotspot of the toy.

   Open your phone or computer and select "FoloToy-xxxx" WiFi network. Wait a moment, and your phone or computer will automatically open a configuration page where you can set up which WiFi network, server address, and port number that you want your toy to connect with.

   **Server Address/Port are required, if you have not setup your own server, please refer to [Server Installation](installation/docker.md).**

   :::caution
   If no page pops up, you can also configure it by entering http://192.168.4.1 in your browser.
   :::

   * Enter configuration mode: Simultaneously press and hold both forward and backward buttons on the front panel for 5 seconds; at this time, the earlight will flash blue.
   * Connect FoloToy: Use your phone or computer to search for available WiFi networks; look for one named "FoloToy-xxxx", such as FoloToy-b8a2.
   * Open configuration page: Once connected to FoloToy's WiFi network, it will automatically open a configuration page.
   * Home screen explanation: There are three buttons on the home screen - "Configure WiFi" is used for setting up WiFi connection; "Info" is for viewing hardware information; "Exit" is for exiting the configuration. See the image below.

   ![config](https://github.com/FoloToy/folotoy-tool/assets/1455685/3cf6d0ac-9504-40ec-94c1-54a09a990fd4)


## Usage

在装配好玩具并且配置完成网络并且连接上服务器之后，按住中间大圆按键进行对话，松开结束对话，周边的 7 个圆形小按键为切换角色按键，点击后切换角色生效，角色小按键上数值与 roles.json 的 key 是对应着的。

<img src="https://user-images.githubusercontent.com/1455685/281640268-d7032dc1-af4f-4eb4-becc-094c96005ffa.jpg" />
<img src="https://user-images.githubusercontent.com/1455685/272765538-a9bcdf56-300a-4bae-a10f-ce7554a072fe.png" />