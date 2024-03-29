---
title: 开始
sidebar_label:  开始
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

:::caution
在您着手准备搭建服务器前，请仔细阅读这篇文章，文章中列举的需要注意的地方，请多留意。
:::

## 服务器准备工作

- 一台始终在线的机器，使 FoloToy 服务器能够持续为您的玩具提供服务
- 机器上至少需要 512 MB 的内存才能成功安装
- 推荐使用 Linux x86_64/ARM64，Debian 10-11/Ubuntu 20.04-22.04/Armbian
- 需要互联网访问权限 **（如果使用的是 OpenAI 或者 Azure 等服务，请确保服务器能够与 openai.com 或 azure.com 等进行通信）**

## 文件准备工作

Folotoy 服务器需要您准备两个文件，我们都准备好了这两个文件，您只需要修改成其中的一些参数即可。

<Tabs
defaultValue="docker-compose"
values={[
{ label: 'docker-compose.yml', value: 'docker-compose'},
{ label: 'roles.json', value: 'roles'},
]}>
<TabItem value="docker-compose">

[docker-compose.yml](../configuration/environment_variables)。该文件用于配置全局参数，例如：全局使用的`TTS（语音转文本）`，`LLM（大型语言模型）`，`STT（语音转文字）`以及`服务器地址`和`端口`和配置。最新版的文件在这里：[docker-compose.yml](https://github.com/FoloToy/folotoy-server-self-hosting/blob/main/docker-compose.yml)


:::caution

- 请注意将`your_vps_ip`为自己的 ip。将各种服务的 Key 修改为 自己的 Key。**特别注意`AUDIO_DOWNLOAD_URL`带有`http://`，`SPEECH_UDP_SERVER_HOST`不带**。

- 确保所有使用了的端口都打开，`1883/tcp`，`8082/tcp`，`18083/tcp`，`8083/tcp`，`8085/udp`，尤其注意 `8085`端口是 `UDP`。对于一些 VPS，可能需要去安全组打开，**请一定确保打开成功，特别是确保 `8085` 是`UDP`**。

- 每次修改后，都需要重编，执行以下命令：
    ```bash
    docker compose up -d
    ```
- 该文件中的 `TTS`， `LLM`， `STT` 都优先级低于 `roles.json`，如果在 `role.json` 中定义了 `TTS`， `LLM`， `STT`，该文件中的定义将不会生效。搭建完成后如果测试发现与这里定义的服务有冲突，请检查 `roles.json`。
:::

</TabItem>

<TabItem value="roles">

[roles.json](../configuration/roles_config)。该文件用于配置每个角色的参数。例如：`开机提示语音`，`角色的提示词定义`以及每个角色各自的 `TTS（语音转文本）`，`LLM（大型语言模型）`和 `STT（语音转文字）`。**如果未配置 TTS，LLM，STT，系统会选择 `docker-compose.yml`中配置的相应参数**。最新版的文件在这里：[roles.json](https://github.com/FoloToy/folotoy-server-self-hosting/blob/main/config/roles.json)

:::caution

1. `roles.json` 中的配置会覆盖 `docker-compose.yml` 中的配置，从而达到角色级别的配置。如果在 `role.json`中定义了 `TTS`， `LLM`， `STT`， 则系统会自动使用  `roles.json` 中所定义的。**首次使用我们建议您不要再`roles.json`中定义 `TTS`， `LLM`， `STT`**。

2. 如果您想给不同的角色定义不同的 `TTS`， `LLM`， `STT`, 您可以前往[角色配置](../configuration/roles_config.mdx#高级配置)中查看详情。

3. 每次修改后，都需要重启 Folotoy 服务器。

:::


</TabItem>
</Tabs>

## 部署服务

我们提供了多种方式，您根据您的需求选择：

- [docker - 适用于熟悉 docker 的人使用](../installation/docker)
- [1 panel - 强烈推荐，在可视化的页面操作](../installation/1panel.md)
- [群晖 NAS](../installation/synology-nas.md)
- [Fly.io](../installation/flyio.md)
- [Windows WSL2](../installation/windows-wsl2.md)

## 使用



部署好服务器后，将设备[配置网络](../manual/wifi-connect)，即可开始享受快乐时光～

在使用的过程中，遇到的问题，您可以在[常见问题(FAQ)](../faq.md)中找到，如果未找到相应解决方案，请联系我们。