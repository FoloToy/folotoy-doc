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

### GPIO
    
- 目前可配置的 GPIO 一共为 8 个，分别是：

    ```
    5，18，19，21，25，33，36，39
    ```

- 每一个按键都要对应单独的 GPIO

### AT 指令

- 仅支持英文输入法且为小写字母

1. **查看配置**

    - 查看当前配置文件

        ```
        at+keys=?
        ```

2. **配置对话按键**

    - 例：对话按键定义为 GPIO 27

        ```
        at+keys=talk,27
        ```

3. **配置重置 WIFI 按键**

    - 例：将 WIFI 重置按键定义为 GPIO 29 和 GPIO 30
    
        ```
        at+keys=wifi_rst,29;30
        ```

4. **重启配置**

    - 修改配置文件后，重启才能生效

        ```
        at+reboot
        ```

5. **配置角色**

    - 如果没有配置过，则角色 id 默认为 1

    - 例：将角色 1 的按键定义为 GPIO 22
    
        ```
        at+keys=role_idx,1,22
        ```
    
    - 例：删除角色 1 的按键定义

        ```
        at+keys=role_idx,1,0
        ```

6. **配置切换角色按键**

    - 例：配置 GPIO 27 为切换上一个角色

        ```
        at+keys=role_prev,27
        ```

    - 例：配置 GPIO 28 为切换下一个角色

        ```
        at+keys=role_next,28
        ```

### 具体步骤

1. 通过套件附带的 Type C 数据线，将接口扩展板和 PC 电脑连接
2. 打开 [网页工具](https://tool.folotoy.com/index) 中的日志

    <img src="https://user-images.githubusercontent.com/41461127/281996998-de76550b-5701-40dd-a115-38988f78a1c8.png" />

3. 选择套件的串口，点击连接

    <img src="https://user-images.githubusercontent.com/69997928/284497170-75123ed9-5d84-42a2-989e-440ad5f95441.jpeg" />

4. 在弹出的日志框中输入 AT 指令

    <img src="https://user-images.githubusercontent.com/69997928/284499336-8dec6867-3410-4fe1-a706-e955f7ef202c.png" />
