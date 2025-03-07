---
title: Getting Started
sidebar_label: Getting Started
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## About the FoloToy AI Conversation Program
This program is designed to provide users with an easy way to deploy the FoloToy AI conversation program. Used in conjunction with the FoloToy AI toy, it brings toys to life with engaging and interactive experiences. With this program, users can quickly enable the voice interaction feature of FoloToy AI toys, transforming them from simple companions into interactive partners.

The official service offers a convenient option for users who want to experience intelligent conversation features right away. For developers and enthusiasts, we also provide a self-deployment service, allowing you to configure and optimize the system according to your needs, unlocking more possibilities.

#### To enjoy the full functionality, please ensure you have a FoloToy AI toy. If you haven’t purchased one yet, feel free to visit our [official store](https://folotoy.com) to explore product details and choose your intelligent interactive toy!

:::caution
Before you start setting up the server, please read this article carefully. Pay close attention to the points mentioned in the article.

For any issues during configuration or usage, please visit the [FAQ](../faq.md) first. If you cannot resolve the issue, please contact us.

You can determine the problem based on [What do the various colors of the lights on the device represent?](../faq.md#what-do-the-various-colors-of-the-lights-represent).

:::

## Supported Services
**Self-built servers require configuration of `STT`, `LLM`, `TTS`.**

### STT (Speech to Text)
- openai-whisper
- azure-stt
- azure-whisper
- dify-stt
- aliyun-asr
- cf-workers-ai-asr (Cloudfalre Workers AI)
- volcengine-asr

### LLM (Large Language Model)
- deepseek
- openai
- azure-openai
- gemini
- dify
- qianfan
- xiaodu
- moonshot
- groq
- ollama
- anthropic
- dashscope
- spark-desk
- minimax
- aws-bedrock
- zhipu
- lingyiwanwu
- cf-workers-ai  (Cloudfalre Workers AI)
- volcengine（Skylark-chat，https://www.volcengine.com/docs/82379/1133387）
- coze (https://coze.com/open/docs/coze_api_overview)

### TTS (Text to Speech)
- openai-tts
- azure-tts
- azure-openai-tts
- elevenlabs
- edge-tts
- aliyun-tts
- dify-tts
- minimax-tts （https://www.minimaxi.com/）
- volcengine-tts (https://www.volcengine.com/docs/6561/97465)

## Server Preparation

- A machine that is always online so that the FoloToy server can continuously serve your toys.
- The machine needs at least 512 MB of memory to be successfully installed.
- Linux x86_64/ARM64 is recommended, with Debian 10-11/Ubuntu 20.04-22.04/Armbian.
- Internet access is required **(If you are using services like OpenAI or Azure, ensure that the server can communicate with domains like openai.com or azure.com)**.

## File Preparation

**We provide a convenient tool for you to generate the files. Simply go to: [Self-hosting server file online generator](https://self-hosting-file-generator.vercel.app/), generate, and copy-paste directly. Before generating, please read this article carefully.**

<Tabs
defaultValue="docker-compose"
values={[
{ label: 'docker-compose.yml', value: 'docker-compose'},
{ label: 'roles.json', value: 'roles'},
]}>
<TabItem value="docker-compose">

This file is used to configure global parameters such as the global use of `TTS`, `LLM`, `STT`, server address, port, and configuration.

Click to see details about parameters: [Environment Variables (docker-compose.yml)](https://docs.folotoy.com/en/docs/configuration/environment_variables)

:::caution

- Make sure all used ports are open, `1883/tcp`, `8082/tcp`, `18083/tcp`, `8083/tcp`, `8085/udp`, especially note that port `8085` is `UDP`. For some VPS, you may need to open them in the security group. **Please ensure that the opening is successful, especially ensure that `8085` is `UDP`.**

- After each modification, a rebuild is required, execute the following command:
    ```bash
    docker compose up -d
    ```

- The definitions of `TTS`, `LLM`, `STT` in this file have lower priority than those in `roles.json`. If `TTS`, `LLM`, `STT` are defined in `roles.json`, the definitions in this file will not take effect. After the setup is completed, if conflicts with the services defined here are found during testing, please check `roles.json`.

- The `ROLES_FILE_PATH` field configures the path of `roles.json`. Please ensure that the path is correct.
:::

</TabItem>

<TabItem value="roles">

This file is used to configure parameters for each role. For example, the `boot-up prompt audio`, `definition of prompt words for roles`, and the `TTS`, `LLM`, and `STT` for each role respectively. **If TTS, LLM, STT are not configured, the system will use the corresponding parameters configured in `docker-compose.yml`.**

Click to see details about parameters: [Role Configuration (roles.json)](https://docs.folotoy.com/en/docs/configuration/roles_config)


:::caution

1. Configuration in `roles.json` will override the configuration in `docker-compose.yml`, achieving configuration at the role level. If `TTS`, `LLM`, `STT` are defined in `roles.json`, the system will automatically use those defined in `roles.json`. **For first-time users, we recommend not defining `TTS`, `LLM`, `STT` in `roles.json`.**

2. If you want to define different `TTS`, `LLM`, `STT` for different roles, click to view [Role Configuration - Advanced Configuration](../configuration/roles_config.mdx#advanced-configuration) for details. **Please configure step by step according to the instructions.**

3. If you want the conversation to remember context, you can set the `max_message_count` parameter. Click to see details: [Role Configuration - Basic Configuration](../configuration/roles_config#basic-configuration).

4. After each modification, the Folotoy server needs to be restarted.
:::


</TabItem>
</Tabs>

## Deploying Services

We provide multiple deployment methods. Choose according to your needs:

- [docker - for those familiar with docker](./docker.md)
- [1 panel - highly recommended, operate in a visual page](./1panel.md)
- [Synology NAS](./synology-nas.md)
- [Fly.io](./flyio.md)
- [Windows WSL2](./windows-wsl2.md)

## Usage

Once the server is deployed, [configure the network](../manual/wifi-connect.md) for the device, and you can start enjoying your happy time~

During usage, if you encounter any problems, you can find solutions in the [FAQ](../faq.md). If you cannot find a solution, please contact us.
