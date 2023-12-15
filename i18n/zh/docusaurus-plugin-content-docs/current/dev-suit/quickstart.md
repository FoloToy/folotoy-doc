---
title: 快速开始
sidebar_label: 快速开始
---

本指南旨在向用户介绍 Folotoy 八爪鱼 AI 开发套件的功能、配置选项以及如何快速入门。Folotoy 八爪鱼 AI 开发套件面向 AI 语音对话应用与教育领域。如需购开发套件，请访问我们的淘宝网店[「AI 玩具改造总厂」](https://folotoy.taobao.com) 或 [「B站工坊」](https://gf.bilibili.com/item/detail/1104863005)。

## 概述

Folotoy 八爪鱼 AI 开发套件包括以下组件：

- ChatGPT AI 语音对话核心板 Folotoy Core 1 块 (约36cm*53cm)
- 外设扩展主板 1块 （约56mm*80mm，树莓派大小）
- 扬声器 1个
- 驻极体MIC 1个
- 3.7v 锂电池 1 个，支持 Type-C 充电
- 功能按键 3 个
- 音量调节与开关旋钮模块 1 个
- 可编程RGB灯模块 1 组
- Type-C 数据线 1 根

![IMG_8050](https://github.com/FoloToy/folotoy-doc/assets/1455685/b18e66d2-a89b-4fe5-b57c-7f02be483f0a)

## 开始组装

### 组件概览图

先认识一下组件的各个部分，如图所示

![IMG_8051](https://github.com/FoloToy/folotoy-doc/assets/1455685/5994c26f-114a-4a77-b270-416fc0ce1eb3)

### 连接组件

先拿出来看看

![IMG_8052](https://github.com/FoloToy/folotoy-doc/assets/1455685/8680e75e-7298-4b32-af8e-aa929b769833)

然后把扩展板上所有插座上的盖去掉，去掉之后是这样的

![IMG_8053](https://github.com/FoloToy/folotoy-doc/assets/1455685/3cf33a5d-7f69-4ef7-8190-4df024f963d9)

锂电池的插头最后插，我们先把除锂电池之外的所有插头都连接好插好。

![IMG_8054](https://github.com/FoloToy/folotoy-doc/assets/1455685/715a2c9f-770a-485b-88e6-da06715e1854)

最后一步我们把锂电池也插好

![IMG_8055](https://github.com/FoloToy/folotoy-doc/assets/1455685/a957d53e-63bb-4728-9db2-c2548f992f89)

### 通电开机

连接好所有的组件后，旋转开关开发板就会开机进入配网状态，这时 LED 灯会呈「🔵蓝色呼吸效果」。如果发现旋转开关不起作用，而且开发板会自动开机，可以通过调整核心板的的小开关来改变配置。


![IMG_8057](https://github.com/FoloToy/folotoy-doc/assets/1455685/6bd4986d-e2fc-48b6-93dc-1cd55f51b84b)

恭喜你，到这里就完成了 Folotoy 八爪鱼 AI 开发套件的组装。


## 配置开发套件和连接测试服务器

### 初次配置

开发套件在第一次通电开机之后会自动进入配网模式，这时用自己的手机或者电脑，搜索 Wi-Fi，就会看到以 `FoloToy-` 开头的无线网, 选择 `FoloToy-` 之后，稍等片刻，手机或者电脑会自动弹出配置的页面，如果连接上了 `FoloToy-` 但是没有弹出配置页面，可以打开手机或者电脑的浏览器，直接输入 http://192.168.4.1 进行配置

FoloToy 提供的测试 MQTT 服务器

* 地址：octopusx.fly.dev
* 端口：4883

如果希望自建服务器，请[参考这里服务器部署说明](../installation/1panel.md)，选择合适的方案自建服务器。

![Snipaste_2023-12-14_22-50-29](https://github.com/FoloToy/folotoy-doc/assets/1455685/6aa265ed-ccce-4f18-8f06-39abe4c30dc6)


### 重新配置

如果已经配置过，希望进行再次配置，可以参考以下步骤：

* 同时按住按钮 B 和按钮 C 超过3s，LED 灯将变为蓝色呼吸闪烁状态
* 打开手机并连接至 Folotoy- 的 Wi-Fi 热点，手机即可自动打开网络配置页面，在此进行Wi-Fi名称/Wi-Fi密码/服务器IP/服务器端口的配置
* 进入蓝色呼吸闪烁状态之后，配置的方法与前面初次配置完全相同。

扩展板上连接了 3 个按钮，在扩展板上也有标示，如图所示

![ChatGPT Learning Dev](https://github.com/FoloToy/folotoy-doc/assets/1455685/cc2c77b7-2ece-4072-bb9f-867c995e22f0)


### 开始对话

开始对话按照以下步骤进行：

* 按住按钮 A，LED 灯呈现绿色常亮状态，表示正在录音，此时即可对麦克风进行对话
* 说话结束后即可松开按住按钮 A，此时LED 灯呈现绿色呼吸闪烁状态，表示AI正在思考
* 等待大概 2s~5s 后（这个时间通常与网络延时影响，若网络条件较差，可能更长或出现超时），将听到扬声器播放回答
* 单独短按按钮 B 和按钮 C，表示循环切换角色，目前服务器可以配置 7 种角色



## 应用示例(视频教程)

### 在 B 站观看

* [DIY 一个 ChatGPT 语音对话机器人](https://www.bilibili.com/video/BV12z4y1N7ne)
* [DIY 一个 ChatGPT 地球仪](https://www.bilibili.com/video/BV1WC4y1E7rC)
* [用 3D 打印机制作一只会思考的硬核佩奇](https://www.bilibili.com/video/BV1Tu4y1L7BJ)

### 在 YouTube 观看 

* [DIY 一个 ChatGPT 语音对话机器人](https://www.youtube.com/watch?v=jNusLpfHjgA)
* [DIY 一个 ChatGPT 地球仪](https://www.youtube.com/watch?v=KgeUpd2TS2k)
* [用 3D 打印机制作一只会思考的硬核佩奇](https://www.youtube.com/watch?v=RHJuSXLq8yM)