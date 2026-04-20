---
title: 配置 OpenClaw
sidebar_label: OpenClaw
---

# FoloToy 玩具配置 OpenClaw 的说明

## 前期准备

1. 请先完成 OpenClaw 的部署，并确保可正常运行，创建方式见：
    - [OpenClaw 开源项目原版](https://openclaw.ai/)
    - [火山引擎 Arkclaw](https://www.volcengine.com/docs/87732/2253818?lang=zh)
    - [阿里云](https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw)

2. 在绑定 OpenClaw 前，请先将 FoloToy 玩具添加到「FoloToy AI 玩具」小程序中

    <img src="/img/openclaw/image1.jpeg" width="300" />

3. 以下命令需在 OpenClaw 所在环境的终端中执行

## 安装过程

### 1、在终端中，输入以下命令安装 FoloToy 官方插件

输入下面这条命令，并按回车：

```bash
npx -y @folotoy/folotoy-openclaw-plugin install
```

<img src="/img/openclaw/image2.png" />

### 2、等待终端中出现二维码

> 二维码有效期为 5 分钟，请在 5 分钟内完成绑定；如二维码过期，请重新运行上述的安装指令

<img src="/img/openclaw/image3.png" />

### 3、将 FoloToy 玩具绑定到 OpenClaw

> 在绑定 OpenClaw 前，请先将 FoloToy 玩具绑定到小程序中

1. 进入角色详情 -> 更多设置 -> 绑定 OpenClaw -> 扫描二维码，参考下图：

    <img src="/img/openclaw/image4.png" />

2. 点击小程序中的"扫描二维码"，扫描终端中出现的二维码（见第 2 步截图）
3. 等待页面提示绑定成功，绑定成功后，玩具会自动跳转到首页，在首页中会显示 OpenClaw 在线/已启用状态。

### 4、重启 OpenClaw

绑定完成后，OpenClaw 客户端会自动重启，如未重启，在终端输入下面这条命令重启 OpenClaw，重启成功后，就可以开始使用了。

```bash
openclaw gateway start --force
```

<img src="/img/openclaw/image5.png" />

## 常见问题

### 1. 如何取消玩具和 OpenClaw 的绑定？

在小程序中，关闭 OpenClaw 即可

<img src="/img/openclaw/image6.png" />

### 2. 如何查看插件绑定了多少个 FoloToy 玩具？

每一个插件只能绑定一个 FoloToy 的玩具，如果先后绑定多个玩具，那么最后一次将会替代前面的玩具。

### 3. 如何卸载 FoloToy OpenClaw 插件？

在命令行终端中输入以下命令，卸载插件：

```bash
openclaw plugins uninstall folotoy-openclaw-plugin
```

如果遇到配置错误的问题，在终端中输入以下命令，清理 folotoy 插件的配置：

```bash
curl https://raw.githubusercontent.com/FoloToy/folotoy-openclaw-plugin/refs/heads/main/scripts/clean-config.py | python3 -
```

### 4. FoloToy OpenClaw 插件绑定的玩具上限是多少个？

每一个 OpenClaw Agent 绑定玩具的上限是 1 个。

### 5. 怎么打开 FoloToy 小程序？

用微信扫描以下二维码，打开小程序：

<img src="/img/openclaw/image1.jpeg" width="300" />
