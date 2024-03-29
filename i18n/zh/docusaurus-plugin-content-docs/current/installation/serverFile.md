---
title:  服务器主要配置文件说明
sidebar_label:  服务器主要配置文件说明
---

1. [docker-compose.yml](../configuration/environment_variables)。该文件用于配置全局参数，例如：全局使用的`TTS（语音转文本）`，`LLM（大型语言模型）`，`STT（语音转文字）`以及`服务器地址`和`端口`和配置。

    :::caution

    确保所有使用了的端口都打开，`1883/tcp`，`8082/tcp`，`18083/tcp`，`8083/tcp`，`8085/udp`，尤其注意 `8085`端口是 `UDP`。对于一些 VPS，可能需要去安全组打开，**请一定确保打开成功**。
    :::


2. [roles.json](../configuration/roles_config)。该文件用于配置每个角色的参数。例如：`开机提示语音`，`角色的提示词定义`以及每个角色各自的 `TTS（语音转文本）`，`LLM（大型语言模型）`和 `STT（语音转文字）`。**如果未配置 TTS，LLM，STT，系统会选择 `docker-compose.yml`中配置的相应参数**。

    :::caution

    `roles.json` 中的配置会覆盖 `docker-compose.yml` 中的配置，从而达到角色级别的配置。如果在 `role.json`中定义了 TTS， LLM， STT， 则系统会自动使用  `roles.json` 中所定义的。请仔细查阅文档中`角色详细设置`关于 TTS， LLM， STT 的配置。

    :::