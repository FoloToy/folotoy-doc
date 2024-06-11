---
title: 八爪鱼 Mini 版
sidebar_label: 八爪鱼 Mini 版
---

本指南旨在向用户介绍 Folotoy 八爪鱼 mini AI 开发套件的功能、配置选项以及如何快速入门。Folotoy 八爪鱼 mini AI 开发套件面向 AI 语音对话应用与教育领域。如需购开发套件，请访问我们的淘宝网店[「AI 玩具改造总厂」](https://folotoy.taobao.com) 或 [「B站工坊」](https://gf.bilibili.com/item/detail/1104863005)。

## 概述

Folotoy 八爪鱼 mini AI 开发套件包括以下组件：

- ChatGPT AI 语音对话核心板 Folotoy Core 1 块
- 外设扩展主板 1块 （约40mm*54mm）
- 扬声器 1个
- 驻极体MIC 1个
- 3.7v 锂电池 1 个，支持 Type-C 充电
- 功能按键 2 个
- 音量调节与开关旋钮模块 1 个
- 可编程RGB灯模块 1 组
- Type-C 数据线 1 根


## 开始组装

### 组件概览图

先认识一下组件的各个部分，如图所示

![IMG_8051](https://github.com/FoloToy/folotoy-doc/assets/1455685/5994c26f-114a-4a77-b270-416fc0ce1eb3)

### 连接组件

![IMG_8052](https://github.com/FoloToy/folotoy-doc/assets/41461127/a9116fe0-4c9a-4647-b311-d4b840937f13)

#### 接口对应关系

根据板子上接口的英文，对应连接组件

| 接口英文 | 组件 | 
|  ----  | ----  |
| VOL, POWER | 音量调节与开关旋钮模块 |
| SPK | 扬声器 |
| RGB | RGB灯模块（从板子的RGB接口接到模块的 IN 口，再从模块的 OUT 口接到另一个模块的 IN 口） |
| MIC | 麦克风 |
| BUTTON A | 对话按键（颜色随意） |
| BUTTON B | 切换角色按键（颜色随意） |
| SENSOR | 语音唤醒模块 |


### 语音唤醒模块
如果您购买的是Mini Pro版本或者单独购买了语音唤醒模块，请按照以下方式安装语音唤醒模块
- 将PH2.0 3P连接线的PH2.0一端连接至FoloToy语音唤醒扩展模块的5Pin插头上（连接在中间的3Pin排针上）

    ![image](https://github.com/FoloToy/folotoy-doc/assets/41461127/6c38273c-7da1-47bc-b8e8-ce4c2501f67f)

- 将PH2.0 3P连接线的杜邦线一端连接至八爪鱼扩展板排针的对应接口(SENSOR 接口)上

    ![image](https://github.com/FoloToy/folotoy-doc/assets/41461127/7eeedd5b-4558-4906-9e78-82ddd32b4b90)

- 当模组红色电源指示灯亮起时，代表正常通电

- 模组检测到唤醒词（默认唤醒词为"hi folo(音同follow)"）时，模组的唤醒指示灯会短时间熄灭，唤醒后，模组发出“收到”提示音（at+config=common,wake_up_mode,1 的情况下）


### 通电开机

连接好所有的组件后，旋转开关开发板就会开机进入配网状态，这时 LED 灯会呈「🔵蓝色呼吸效果」。如果发现旋转开关不起作用，而且开发板会自动开机，可以通过调整核心板的的小开关来改变配置。


![IMG_8057](https://github.com/FoloToy/folotoy-doc/assets/1455685/6bd4986d-e2fc-48b6-93dc-1cd55f51b84b)

恭喜你，到这里就完成了 Folotoy 八爪鱼 AI 开发套件的组装。

## Wi-Fi配置

[设备配网及配置服务器](../manual/wifi-connect.md)

### 如何进入配网模式
* 按住按钮 B 超过3s，LED 灯将变为蓝色呼吸闪烁状态
* 打开手机并连接至 Folotoy-xxxx 的 Wi-Fi 热点，手机即可自动打开网络配置页面，在此进行Wi-Fi名称/Wi-Fi密码/服务器IP/服务器端口的配置
* 进入蓝色呼吸闪烁状态之后，配置的方法与前面初次配置完全相同。



<!-- ## 配置开发套件和连接测试服务器

### 初次配置

开发套件在第一次通电开机之后会自动进入配网模式，这时用自己的手机或者电脑，搜索 Wi-Fi，就会看到以 `FoloToy-` 开头的无线网, 选择 `FoloToy-` 之后，稍等片刻，手机或者电脑会自动弹出配置的页面，如果连接上了 `FoloToy-` 但是没有弹出配置页面，可以打开手机或者电脑的浏览器，直接输入 http://192.168.4.1 进行配置

FoloToy 提供的测试 MQTT 服务器

* 地址：47.116.13.134
* 端口：1883

如果希望自建服务器，请[参考这里服务器部署说明](../installation/1panel.md)，选择合适的方案自建服务器。

![Snipaste_2023-12-14_22-50-29](https://github.com/FoloToy/folotoy-doc/assets/1455685/6aa265ed-ccce-4f18-8f06-39abe4c30dc6)


### 重新配置

如果已经配置过，希望进行再次配置，可以参考以下步骤：

* 同时按住按钮 B 和按钮 C 超过3s，LED 灯将变为蓝色呼吸闪烁状态
* 打开手机并连接至 Folotoy- 的 Wi-Fi 热点，手机即可自动打开网络配置页面，在此进行Wi-Fi名称/Wi-Fi密码/服务器IP/服务器端口的配置
* 进入蓝色呼吸闪烁状态之后，配置的方法与前面初次配置完全相同。

扩展板上连接了 3 个按钮，在扩展板上也有标示，如图所示

![ChatGPT Learning Dev](https://github.com/FoloToy/folotoy-doc/assets/1455685/cc2c77b7-2ece-4072-bb9f-867c995e22f0)
 -->

### 开始对话

开始对话按照以下步骤进行：

* 长按按钮 A，LED 灯呈现绿色常亮状态，表示正在录音，此时即可对麦克风进行对话
* 说话结束后即可松开按住按钮 A，此时LED 灯呈现绿色呼吸闪烁状态，表示AI正在思考
* 等待大概 2s~5s 后（这个时间通常与网络延时影响，若网络条件较差，可能更长或出现超时），将听到扬声器播放回答
* 单独短按按钮 B，表示循环切换角色，目前服务器可以配置 7 种角色
* 如果带语音唤醒模块，默认唤醒词为"hi folo(音同follow)"，设备监测到唤醒词后，会发出“收到“提示音，这时可以直接和设备说话，停止说话后，设备会自动停止录音（如无法识别语音结束，需要使用AT指令调整语音阈值。AT 指令使用方法: [AT 指令](../at-command.mdx))

