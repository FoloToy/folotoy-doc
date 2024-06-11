---
title: Octupus Standard Version
sidebar_label: Octupus Standard Version
---

This guide aims to introduce users to the features, configuration options, and how to get started with the Folotoy Octopus AI Development Kit. The Folotoy Octopus AI Development Kit is designed for AI voice conversation applications and educational purposes. To purchase the development kit, please visit our Taobao store [AI Toy Transformation Factory](https://folotoy.taobao.com) or [Bilibili Workshop](https://gf.bilibili.com/item/detail/1104863005).

## Overview

The Folotoy Octopus AI Development Kit includes the following components:

- Folotoy Core 1: ChatGPT AI Voice Conversation Core Board (approximately 36cm*53cm)
- Peripheral Expansion Board 1: (approximately 56mm*80mm, Raspberry Pi size)
- Speaker: 1 piece
- Electret Microphone (MIC): 1 piece
- 3.7V Lithium Battery: 1 piece, supports Type-C charging
- Function Buttons: 3 pieces
- Volume Adjustment and Power Switch Knob Module: 1 piece
- Programmable RGB Light Module: 1 set
- Type-C Data Cable: 1 piece

![IMG_8050](https://github.com/FoloToy/folotoy-doc/assets/1455685/b18e66d2-a89b-4fe5-b57c-7f02be483f0a)

## Getting Started with Assembly

### Component Overview Diagram

Let's start by familiarizing ourselves with the different components. Please refer to the diagram below:

![IMG_8051](https://github.com/FoloToy/folotoy-doc/assets/1455685/5994c26f-114a-4a77-b270-416fc0ce1eb3)

### Connection Components

Take them out and have a look first.

![IMG_8052](https://github.com/FoloToy/folotoy-doc/assets/1455685/8680e75e-7298-4b32-af8e-aa929b769833)

Then remove the covers from all the sockets on the expansion board. After removing them, it will look like this.

![IMG_8053](https://github.com/FoloToy/folotoy-doc/assets/1455685/3cf33a5d-7f69-4ef7-8190-4df024f963d9)

The lithium battery plug is inserted last. Let's first connect and insert all the plugs except for the lithium battery plug

![IMG_8054](https://github.com/FoloToy/folotoy-doc/assets/1455685/715a2c9f-770a-485b-88e6-da06715e1854)

The final step is to insert the lithium battery as well.

![IMG_8055](https://github.com/FoloToy/folotoy-doc/assets/1455685/a957d53e-63bb-4728-9db2-c2548f992f89)

### power on the device

After connecting all the components, rotate the switch on the development board to power it on and enter the network configuration mode. At this time, the LED light will display a "🔵 blue breathing effect." If you notice that the rotary switch is not working and the development board powers on automatically, you can modify the configuration by adjusting the small switch on the core board.


![IMG_8057](https://github.com/FoloToy/folotoy-doc/assets/1455685/6bd4986d-e2fc-48b6-93dc-1cd55f51b84b)

Congratulations! You have completed the assembly of the Folotoy Octopus AI Development Kit.

## Wi-Fi Configure

[Network configure and server configure](../manual/wifi-connect.md)


### How to enter pair mode


If you have already performed the initial configuration and wish to reconfigure the device, you can follow these steps:

1. Press and hold buttons B and C simultaneously for more than 3 seconds. The LED light will turn into a blue breathing blink state.
2. Open your smartphone and connect to the Folotoy Wi-Fi hotspot. Your smartphone will automatically open the network configuration page, where you can configure the Wi-Fi name, Wi-Fi password, server IP, and server port.
3. After entering the blue breathing blink state, the configuration process is identical to the initial configuration.

The expansion board is equipped with 3 buttons, which are also labeled on the board as shown in the diagram.

![ChatGPT Learning Dev](https://github.com/FoloToy/folotoy-doc/assets/1455685/cc2c77b7-2ece-4072-bb9f-867c995e22f0)



## Starting a Conversation

To start a conversation, follow these steps:

* Press and hold button A. The LED light will turn solid green, indicating that it is in the recording mode. You can now speak into the microphone.
* Release button A after you finish speaking. The LED light will start blinking green, indicating that the AI is processing your request.
* Wait for approximately 2 to 5 seconds (this time may vary depending on network latency; if the network conditions are poor, it may take longer or result in a timeout). You will hear the speaker playing back the response.
* Press button B and button C separately to cycle through different roles. Currently, the server can be configured with 7 different roles.



## Application Examples (Video Tutorials)

### Watch on Bilibili

* [DIY a ChatGPT Voice Conversation Robot](https://www.bilibili.com/video/BV12z4y1N7ne)

<iframe width="100%" height="600" src="//player.bilibili.com/player.html?aid=577930846&bvid=BV12z4y1N7ne&cid=1320023873&p=1&autoplay=0" scrolling="no" border="0" frameBorder="no" framespacing="0" allowfullscreen="true"> </iframe>

* [DIY a ChatGPT Globe](https://www.bilibili.com/video/BV1WC4y1E7rC)

<iframe width="100%" height="600" iframe src="//player.bilibili.com/player.html?aid=748378781&bvid=BV1WC4y1E7rC&cid=1334184922&p=1&autoplay=0" scrolling="no" border="0" frameBorder="no" framespacing="0" allowfullscreen="true"> </iframe>

* [Create a Thinking Hardcore Peppa Pig with a 3D Printer](https://www.bilibili.com/video/BV1Tu4y1L7BJ)

<iframe width="100%" height="600" iframe src="//player.bilibili.com/player.html?aid=919030114&bvid=BV1Tu4y1L7BJ&cid=1348458910&p=1&autoplay=0" scrolling="no" border="0" frameBorder="no" framespacing="0" allowfullscreen="true"> </iframe>

* [Santa Claus Can Use ChatGPT](https://www.bilibili.com/video/BV15N4y147Fm)

<iframe width="100%" height="600" iframe src="//player.bilibili.com/player.html?aid=880093245&bvid=BV15N4y147Fm&cid=1373634475&p=1autoplay=0" scrolling="no" border="0" frameBorder="no" framespacing="0" allowfullscreen="true"> </iframe>


### Watch on YouTube

* [DIY a ChatGPT Voice Conversation Robot](https://www.youtube.com/watch?v=jNusLpfHjgA)
* [DIY a ChatGPT Globe](https://www.youtube.com/watch?v=KgeUpd2TS2k)
* [Create a Thinking Hardcore Peppa Pig with a 3D Printer](https://www.youtube.com/watch?v=RHJuSXLq8yM)
* [Santa Claus Can Use ChatGPT](https://www.youtube.com/watch?v=I7m-jDwGem4&t=2s)