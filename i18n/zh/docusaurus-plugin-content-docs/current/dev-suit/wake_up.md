---
title: 语音唤醒模块
sidebar_label: 语音唤醒模块(焊接版)
---

# 唤醒模块
:::caution
语音唤醒模块仅支持 Folotoy 八爪鱼 mini 版本
:::
FoloToy ASR 模块是 FoloToy 为八爪鱼 Mini 版本开发的语音唤醒模块（标准版的用户单独购买 Mini 扩展接口板也可实现接入），可通过线缆连接至 FoloToy Mini 扩展底板上，实现语音唤醒功能。

### 产品清单：
1. FoloToy 语音唤醒扩展模块 *1
2. PH2.0 3P 转杜邦接头连接线 *1
3. 2.54mm 排针（需要焊接在八爪鱼的扩展板上）
### 产品图片
![图片](https://github.com/FoloToy/folotoy-doc/assets/41461127/16f38c28-ef2a-4c12-8c83-826e29bdf754)
![图片](https://github.com/FoloToy/folotoy-doc/assets/41461127/2c301913-0f03-489d-8d2b-7e5cc3198a02)

### 使用准备

1. 将附件的 2.54 排针焊接在八爪鱼 Mini 扩展板上
2. 设备的固件版本需要在 24.17.4.30 以上，升级方法：[固件升级和问题诊断](../web-tool.mdx)
3. 使用 AT 指令开启唤醒后语音提示（开启后八爪鱼在收到唤醒命令后会回复指定语音）

    ```json
    at+config=common,wake_up_mode,1 // 0-disable，1-enable.
    ```
    AT 指令具体使用方法：[AT 指令](../at-command.mdx)
4. 使用 AT 指令切换对话激活模式为 CLICK 模式  

    ```json
    at+command=record,click
    ```
    如无法识别语音结束，需要使用 AT 指令调整语音阈值
    ```json
    at+config=common,voice,60
    ```
### 使用方法
1. 将 PH2.0 3P 连接线的 PH2.0 一端连接至 FoloToy 语音唤醒扩展模块的5Pin插头上（连接在中间的 3Pin 排针上）
2. 将 PH2.0 3P 连接线的杜邦线一端连接至八爪鱼扩展板排针的对应接口上，对应关系如下：
    - G -- GND
    - V -- VCC
    - S -- TALK

    如下图：
    ![图片](https://github.com/FoloToy/folotoy-doc/assets/41461127/f535f560-c1da-4c4c-8a09-dfa9adb69a66)
3. 当模组红色电源指示灯亮起时，代表正常通电
4. 模组检测到唤醒词（默认唤醒词为“八爪鱼”或"hi folo(音同 follow)"）时，模组的唤醒指示灯会闪烁，唤醒后，模组发出“收到”提示音

### 常见问题

1. 模组预留的其他排针孔位、PH2.0插孔有什么用途？
    -  预留用于后续功能扩展
2. 模组固件源码是否开放？
    - 暂不开放源码
3. 我想要定制唤醒词怎么办？
    -  针对批量商用客户，可提供唤醒词定制服务

