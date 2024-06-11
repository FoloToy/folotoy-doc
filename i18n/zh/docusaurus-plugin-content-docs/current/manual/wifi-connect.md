---
title: 设备配网及配置服务器
sidebar_label:  设备配网及配置服务器
---

##  网络配置

- 将设备开机，如果是设备首次开机，会自动进入配网模式。手动进入配网模式方法：[火火兔G6/G6s](../toy-pcb-replacement/alilo-g6.md#如何进入配网模式)， [火火兔F6/F6s](../toy-pcb-replacement/alilo-f6.md#如何进入配网模式)， [米兔C1](../toy-pcb-replacement/mitu-c1.md#如何进入配网模式)，[八爪鱼标准版](../dev-suit/quickstart.md#如何进入配网模式)，[八爪鱼 Mini 版](../dev-suit/mini#如何进入配网模式)，[仙人掌](./cactus-manual.md#如何进入配网模式)，[魔匣](./magicBox-manual#如何进入配网模式)或者通过[AT 指令](../at-command.mdx#重置-wifi-并进入配网模式)进入配网模式

- 打开您的手机或计算机，并选择“FoloToy-xxxx”无线网络。稍等片刻，您的手机或计算机将自动打开一个配置页面，在该页面中您可以设置要连接到哪个 WiFi 网络、服务器地址和端口号。

- 如果没有弹出任何页面，也可以通过在浏览器中输入 http://192.168.4.1 来进行配置。

- 主屏幕说明：主屏幕上有三个按钮 ：

  - 配置：用于配置 WiFi 连接
  - 信息：用于查看硬件信息
  - 退出：用于退出配置

- 点击"配置"进入配置页面

  - SSID： 家里/公司的 WiFi 名称（仅支持 2.4G 无线网）
  - 密码：连接的 WiFi 密码（不能为空）

<img width="30%" src="https://github.com/FoloToy/folotoy-doc/assets/41461127/a5716e99-c5c9-4ff1-8da8-acbfb6ed664e" /><img width="30%" src="https://github.com/FoloToy/folotoy-doc/assets/41461127/2a778703-a976-45dd-beae-30de076bd25a" /><img width="30%" src="https://github.com/FoloToy/folotoy-doc/assets/41461127/3a0def94-a139-4d8a-aa82-4c2f60721faa" />

##  配置服务器

- 如果您想要使用自建服务器，我们提供了完善的文档和工具，来帮助您搭建自己的服务器，详情请[查看](../installation/serverFile)。
- 搭建完您的自建服务器后，在设备配网界面点击“高级设置”，填入您的 Mqtt 服务器地址和 Mqtt 服务器端口即可。
- 您也可以购买我们提供的测试服务器，[购买链接](https://item.taobao.com/item.htm?ft=t&id=753948021813&spm=a21dvs.23580594.0.0.52de3d0dWo8kQY&skuId=5273699128887)

<center>
  <img
    width="30%"
    src="https://github.com/FoloToy/folotoy-doc/assets/41461127/56dba04d-b13e-4119-bb7e-703ac2e30253"
  />
</center>