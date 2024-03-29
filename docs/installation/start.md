---
title: Getting Started
sidebar_label: Getting Started
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

:::caution
Before you start setting up the server, please read this article carefully and pay attention to the points mentioned in the article.
:::

## Server Preparation

- A machine that is always online to ensure FoloToy server can continuously serve your toys
- The machine needs at least 512 MB of memory for successful installation
- Recommended to use Linux x86_64/ARM64, Debian 10-11/Ubuntu 20.04-22.04/Armbian
- Internet access is required **(If using services like OpenAI or Azure, ensure the server can communicate with openai.com or azure.com)**

## File Preparation

Folotoy server requires you to prepare two files, and we have prepared these two files for you. You just need to modify some parameters in them.

<Tabs
defaultValue="docker-compose"
values={[
{ label: 'docker-compose.yml', value: 'docker-compose'},
{ label: 'roles.json', value: 'roles'},
]}>
<TabItem value="docker-compose">

[docker.compose.yml](../configuration/environment_variables). This file is used to configure global parameters such as the global use of `TTS (Text-to-Speech)`, `LLM (Large Language Model)`, `STT (Speech-to-Text)`, server address, and port configuration. The latest version of the file is available here: [docker-compose.yml](https://github.com/FoloToy/folotoy-server-self-hosting/blob/main/docker-compose.yml)


:::caution

- Make sure to replace `your_vps_ip` with your own IP. Modify the keys for various services to your own keys. **Pay special attention that `AUDIO_DOWNLOAD_URL` should have `http://`, and `SPEECH_UDP_SERVER_HOST` should not have it**.

- Ensure that all ports being used are open, `1883/tcp`, `8082/tcp`, `18083/tcp`, `8083/tcp`, `8085/udp`, especially note that port `8085` is `UDP`. For some VPS, you may need to open these ports in the security group, **make sure they are successfully opened, especially ensure that `8085` is `UDP`**.

- After each modification, you need to rebuild by executing the following command:
    ```bash
    docker compose up -d
    ```
- The definitions of `TTS`, `LLM`, `STT` in this file take lower priority than those in `roles.json`. If there are conflicts with the services defined here after deployment, please check `roles.json`.
:::

</TabItem>

<TabItem value="roles">

[roles.json](../configuration/roles_config). This file is used to configure parameters for each role, such as `startup prompt voice`, `definition of role prompts`, and individual `TTS (Text-to-Speech)`, `LLM (Large Language Model)`, and `STT (Speech-to-Text)` for each role. **If TTS, LLM, STT are not configured, the system will use the corresponding parameters configured in `docker.compose.yml`**. The latest version of the file is available here: [roles.json](https://github.com/FoloToy/folotoy-server-self-hosting/blob/main/config/roles-minimal.json)

:::caution

1. The configurations in `roles.json` will override the configurations in `docker-compose.yml`, achieving role-level configuration. If `TTS`, `LLM`, `STT` are defined in `role.json`, the system will automatically use those defined in `roles.json`. **For initial use, we recommend not defining `TTS`, `LLM`, `STT` in `roles.json`**.

2. If you want to define different `TTS`, `LLM`, `STT` for different roles, you can check the details in `Role Detailed Settings`.

3. After each modification, you need to restart the Folotoy server.

:::

</TabItem>
</Tabs>

## Deploying Services

We provide multiple ways for deployment based on your requirements:

- [docker - For those familiar with docker](../installation/docker)
- [1 panel - Highly recommended for visual page operations](../installation/1panel.md)
- [Synology NAS](../installation/synology-nas.md)
- [Fly.io](../installation/flyio.md)
- [Windows WSL2](../installation/windows-wsl2.md)

## Usage

Once the server is deployed, configure the network for the device [here](../manual/wifi-connect), and you can start enjoying happy times~

If you encounter any issues during usage, you can find solutions in the [FAQ](../faq.md). If you do not find a solution, please contact us.