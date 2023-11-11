---
title: 快速开始
sidebar_label: 快速开始
---

本指南旨在向用户介绍 Folotoy ChatGPT Learning Dev Suit v1.0 AI 开发版的功能、配置选项以及如何快速入门。
Folotoy ChatGPT Learning Dev Suit AI 开发板面向 AI 语音对话应用与教育领域。

## 准备工作
- 1 × Folotoy ChatGPT Learning Dev Suit v1.0 AI 开发版套件
- 1 x Type C 数据线（Type A 转 Micro B）
- 1 × PC（Windows、 Linux 或 Mac OS）
如需购开发套件，请访问 [B站工坊](https://gf.bilibili.com/item/detail/1104863005)。

## 概述
Folotoy ChatGPT Learning Dev Suit v1.0 是一款 AI 语音开发套件，专为AI教育与DIY市场打造，除核心版外，还提供了扩展底板及AI语音对话的全套扩展套件。具体包括以下：
-  ChatGPT AI 语音核心板 Folotoy Core 1 块 (约36cm*53cm)
- 外设扩展主板 1块 （约56mm*80mm，树莓派大小）
- 扬声器 1个
- 驻极体MIC 1个
- 3.7v 锂电池 1个，支持TypeC充电
- 功能按键模块 3个
- 音量调节与开关旋钮模块 1个
- 可编程RGB灯模块 1个

下图展示的是 Folotoy ChatGPT Learning Dev Suit 的组件之间的连接方式。

![20231111094211](https://user-images.githubusercontent.com/26705239/282208638-db1f3dcf-99fe-4907-adf5-8a12ecfee124.png)


## 快速开始
**硬件连接**：将按键/扬声器/麦克风等组件连接至扩展底板，连接USB线或电池（可同时连接）向开发板进行供电，顺时针旋转旋钮开关至极限位置，电源接通Folotoy Core核心板上LED指示灯亮起。

**网络配置**：同时按住ButtonB和ButtonC 超过3s，RGB灯将变为蓝色闪烁状态，即可打开手机并连接至Folotoy-XXXX的Wi-Fi热点，手机即可自动打开网络配置页面，在此进行Wi-Fi名称/Wi-Fi密码/服务器IP/服务器端口的配置。如何配置服务器，请参考这里。

**开始使用**：按住ButtonA，RGB灯带呈现绿色常亮状态，此时即可对MIC进行对话，说话结束后即可松开ButtonA，此时RGB灯带呈现彩虹渐变闪烁状态，大概2s~5s后（这个时间通常与网络延时影响，若网络条件较差，可能更长或出现超时），将听到回答



# 应用示例

### 10分钟手搓一个ChatGPT语音对话机器人

<iframe width="100%" height="600" src="//player.bilibili.com/player.html?aid=577930846&bvid=BV12z4y1N7ne&cid=1320023873&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>