---
title:  Server Configuration File Explanation
sidebar_label:  Server Configuration File Explanation
---

1. [docker-compose.yml](../configuration/environment_variables).This file is used to configure global parameters, such as:`TTS(Text-to-Speech)`, `LLM(Large Language Model)`, `STT(Speech-to-Text)`,`Server address` and `Port`.

    :::caution

    Make sure all used ports are open, including `1883/tcp`，`8082/tcp`，`18083/tcp`，`8083/tcp`，`8085/udp`, `8085` port is a `UDP`. For some VPS, you may need to open the ports in the security group. **Please make sure it is opened successfully**.
    :::


2. [roles.json](../configuration/roles_config).This file is used to configure the parameters for each role, such as:：`start text`, `prompt`, each role's own `TTS (Text-to-Speech)`, `LLM (Large Language Model)` and `STT (Speech-to-Text)`. **If TTS, LLM, STT are not defined in `roles.json`, the system will use the ones defined in `docker-compose.yml`**。

    :::caution

    The configuration in `roles.json` will override the configuration in `docker-compose.yml`, thus achieving role-level configuration. If `TTS`, `LLM`, `STT` are defined in `roles.json`, the system will automatically use the ones defined in `roles.json`. Please carefully read the Role Detailed Settings in the documentation about the configuration of `TTS`, `LLM`, `STT`.

    :::
