---
title: 配置按键
sidebar_label: 配置按键
---

# 配置按键

* 支持通过 AT 指令配置按键的 GPIO 引脚

* 目前套件中三个按键对应的 GPIO 分别是

    ```
    Button A - GPIO 18
    Button B - GPIO 19
    Button C - GPIO 5
    ```

## GPIO
    
- 目前可配置的 GPIO 一共为 8 个，分别是：

    ```
    5，18，19，21，25，33，36，39
    ```

- 每一个按键都要对应单独的 GPIO

### 配置对话按键

  - 例：对话按键定义为 GPIO 27

    ```json
    at+keys=talk,<GPIO> // at+keys=talk,27
    ```

### 配置重置 WIFI 按键

  - 例：将 WIFI 重置按键定义为 GPIO 29 和 GPIO 30

    ```json
    at+keys=wifi_rst,<GPIO>;<GPIO> // at+keys=wifi_rst,29;30
    ```

### 切换录音模式

  - 例：按下录音按键进入录音，松开按键结束录音

    ```json
      at+command=record,press
    ```

  - 例：点击录音按键进入录音，录音完成后自动结束

    ```json
    at+command=record,click
    ```

  - 例：点击录音按键进入连续对话模式

    ```json
    at+command=record,continuous
    ```

### 配置角色

  - 如果没有配置过，则角色 id 默认为 1

  - 例：将角色 1 的按键定义为 GPIO 22

    ```json
    at+keys=role_idx,<index>,<GPIO> // at+keys=role_idx,1,22
    ```

  - 例：删除角色 1 的按键定义
    
    ```json
    at+keys=role_idx,<index>,<GPIO> // at+keys=role_idx,1,0
    ```

### 配置切换角色按键

  - 例：配置 GPIO 27 为切换上一个角色

    ```json
    at+keys=role_prev,<GPIO>  // at+keys=role_prev,27
    ```

  - 例：配置 GPIO 28 为切换下一个角色

    ```json
    at+keys=role_next,<GPIO>  // at+keys=role_next,28
    ```

## 具体步骤

1. 通过套件附带的 Type C 数据线，将接口扩展板和 PC 电脑连接
2. 打开 [网页工具](https://tool.folotoy.com/index) 中的日志

    <img src="https://doc-img.folotoy.com/images/41461127/281996998-de76550b-5701-40dd-a115-38988f78a1c8.png" />

3. 选择套件的串口，点击连接

    <img src="https://doc-img.folotoy.com/images/69997928/284497170-75123ed9-5d84-42a2-989e-440ad5f95441.jpeg" />

4. 在弹出的日志框中输入 AT 指令

    <img src="https://doc-img.folotoy.com/images/69997928/284499336-8dec6867-3410-4fe1-a706-e955f7ef202c.png" />
