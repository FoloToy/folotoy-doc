---
id: environment_variables
title: 环境变量
sidebar_label: 环境变量(docker-compose.yml)
---

[自建服务器文件在线生成工具](https://self-hosting-file-generator.vercel.app/)

最新版的文件在这里：[docker-compose.yml](https://github.com/FoloToy/folotoy-server-self-hosting/blob/main/docker-compose.yml)，**请复制最新的文档来并修改其中的参数**。

该文件用于配置全局参数，例如：全局使用的`TTS（文本转语音）`，`LLM（大型语言模型）`，`STT（语音转文字）`以及`服务器地址`和`端口`和配置。

如果您想要在全局设置 TTS 的语音类型，您可以添加以下字段（请根据您的 TTS 类型 选择添加相应的字段）：

- OPENAI_TTS_VOICE_NAME(alloy, echo, fable, onyx, nova, shimmer)
- AZURE_OPENAI_TTS_VOICE_NAME(alloy, echo, fable, onyx, nova, shimmer)
- AZURE_TTS_VOICE_NAME([声音列表](https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/language-support?tabs=tts))
- EDGE_TTS_VOICE_NAME([声音列表](https://github.com/FoloToy/folotoy-server-self-hosting/wiki/Edge%E2%80%90TTS%E2%80%90Voices))
- ELEVENLABS_TTS_VOICE_ID([声音列表](https://elevenlabs.io/api))
- ALIYUN_TTS_APP_KEY([App Key](https://help.aliyun.com/document_detail/72214.html))
- DIFY_TTS_KEY

**如果您想要给每个角色设置特定的 TTS，请查看[角色配置](./roles_config.mdx#高级配置)**

:::caution

- 请注意将`your_vps_ip`为自己的 ip。将各种服务的 Key 修改为 自己的 Key。**特别注意`AUDIO_DOWNLOAD_URL`带有`http://`，`SPEECH_UDP_SERVER_HOST`不带**。

- 确保所有使用了的端口都打开，`1883/tcp`，`8082/tcp`，`18083/tcp`，`8083/tcp`，`8085/udp`，尤其注意 `8085`端口是 `UDP`。对于一些 VPS，可能需要去安全组打开，**请一定确保打开成功，特别是确保 `8085` 是`UDP`**。

- **您只需要填入你自己设置的 TTS， LLM， STT， 相应的参数。**例如：STT_TYPE 选择了`openai-whisper`，则需要填入对应的 `OPENAI_WHISPER_KEY`,`OPENAI_WHISPER_MODEL`,`OPENAI_WHISPER_API_BASE`。

- 每次修改后，都需要重编，执行以下命令：
    ```bash
    docker compose up -d
    ```
- 该文件中的 `TTS`， `LLM`， `STT` 都优先级低于 `roles.json`，如果在 `role.json` 中定义了 `TTS`， `LLM`， `STT`，该文件中的定义将不会生效。搭建完成后如果测试发现与这里定义的服务有冲突，请检查 `roles.json`。

- `ROLES_FILE_PATH` 字段配置的是 `roles.json` 的路径，请确保该路径是正确的。
:::


FoloToy 服务器接受以下环境变量以进行运行时配置：

| 变量名     | 描述          | 默认值 |
| --------------------------------- | ---------------------------- | ----------------------------- |
| **HTTPX_TIMEOUT**| 请求超时时间 |     5          |
| **ROLES_FILE_PATH**| 角色配置文件|     roles.json          |
| **STT_TYPE** | 声音转文字引擎类别: openai-whisper, azure-stt, azure-whisper, dify-stt, aliyun-asr              |   openai-whisper            |
| **OPENAI_WHISPER_API_BASE** | OpenAI Whisper API Base Url         |    https://api.openai.com/v1           |
| **OPENAI_WHISPER_KEY** |  OpenAI Whisper API Key|   sk-AAAAAAAAA            |
| **OPENAI_WHISPER_MODEL** | OpenAI Whipser Model          |   whisper-1            |
| **AZURE_WHISPER_API_BASE** |      Azure Whisper API Base Url， 可用区域查询 https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#model-summary-table-and-region-availability     |           |
| **AZURE_WHISPER_KEY**            |       Azure Whisper API Key  |             |
| **AZURE_WHISPER_DEPLOYMENT_NAME**              |       Deploy Name               |          |
| **AZURE_WHISPER_API_VERSION**  |     API Version, https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#request-a-speech-to-text-transcription   |       2023-09-01-preview   |
| **AZURE_STT_KEY**     |    Azure Speech Services Key, https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview  |               |
| **AZURE_STT_SERVICE_REGION** |    Azure Speech Services Region     |          |
| **DIFY_STT_API_BASE**  |  Dify sound-to-text API Base Url. You need to enable sound-to-text feature in dify configurtions        | http://192.168.52.164/v1
| **DIFY_STT_KEY**          |  Dify sound-to-text API Key    |     sk-AAAAAAAA      |
| **ALIYUN_ASR_ACCESS_KEY_ID**    | aliyun access key id     |   获取token请参考：https://help.aliyun.com/document_detail/450514.html   |
| **ALIYUN_ASR_ACCESS_KEY_SECRET**    | aliyun access secret key     |  获取token请参考： https://help.aliyun.com/document_detail/450514.html  |
| **ALIYUN_ASR_APP_KEY**    | aliyun app key      |   获取 app key 请参考：https://help.aliyun.com/document_detail/72214.html   |
| **LLM_TYPE**  |   Large Language Model Type: openai, azure-openai, gemini, dify, qianfan, xiaodu, moonshot, groq, ollama, anthropic  |       openai               |
| **OPENAI_OPENAI_API_BASE**  |  OpenAI API Base Url        | https://api.openai.com/v1
| **OPENAI_OPENAI_KEY**          |  OpenAI API Key    |     sk-AAAAAAAA      |
| **OPENAI_OPENAI_MODEL**          |  OpenAI Model     |     gpt-3.5-turbo      |
| **AZURE_OPENAI_KEY**          |   Azure OpenAI API Key            |               |
| **AZURE_OPENAI_ENDPOINT**  |  Azure OpenAI API Endpoint |          |
| **AZURE_OPENAI_API_VERSION**     |   Azure OpenAI API Version, ，可用版本查询 https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#completions   |  2023-05-15             |
| **AZURE_OPENAI_MODEL**          |  OpenAI Model     |     gpt-35-turbo      |
| **DIFY_API_BASE**  |  Dify API Base Url        | http://192.168.52.164/v1
| **DIFY_KEY**          |  Dify API Key    |     sk-AAAAAAAA      |
| **GEMINI_API_BASE**  |  Gemini API Base Url        | https://generativelanguage.googleapis.com
| **GEMINI_KEY**          |  Gemini API Key    |     sk-AAAAAAAA      |
| **QIANFAN_CLIENT_ID**  |  Qianfan API Key        | 13rBTgx*****************e03XE
| **QIANFAN_SECRET**          |  Qianfan Secret Key Key    |     zYxtMI***************QLerLgQ2W5e      |
| **QIANFAN_MODEL**          |  Qianfan Model Key    |     yi_34b_chat      |
| **MOONSHOT_API_BASE** | https://platform.moonshot.cn/ | https://api.moonshot.cn/v1 |
| **MOONSHOT_KEY** |  | sk-xxxxx |
| **MOONSHOT_MODEL** |  | moonshot-v1-8k |
| **OLLAMA_API_BASE** | https://ollama.com | http://localhost:11434 |
| **OLLAMA_MODEL** |  | gemma:2b |
| **GROQ_API_BASE** | Groq api base | https://api.groq.com/openai/v1 |
| **GROQ_MODEL** | Groq model | mixtral-8x7b-32768 |
| **GROQ_KEY** | Groq api key |  |
| **ANTHROPIC_API_BASE** |  | https://api.anthropic.com |
| **ANTHROPIC_KEY** |  | sk-ant-api03-xx |
| **ANTHROPIC_MODEL** |  | claude-3-sonnet-20240229 |
| **ANTHROPIC_MAX_TOKENS** |  | 1024  |
| **VOICE_EXECUTOR_MAX_WORKERS**     |   Voice task threadpool max size | 2 |
| **TTS_TYPE** |      文转声音引擎类别: openai-tts, azure-tts, azure-openai-tts, aliyun-tts, elevenlabs, edge-tts        |     edge-tts          |
| **AZURE_TTS_KEY** |  Azure Speech Services Key            |               |
| **AZURE_TTS_SERVICE_REGION**      |  Azure Speech Services Region              |          |
| **ELEVENLABS_TTS_KEY** |   elevenlabs.io API Key           |          |
| **ELEVENLABS_TTS_MODEL**     |    elevenlabs.io Model     |       eleven_multilingual_v2   |
| **OPENAI_TTS_API_BASE**|     OpenAI API Base Url  |        https://api.openai.com/v1       |
| **OPENAI_TTS_KEY**    |       OpenAI API Key|   sk-AAAAAA   |
| **OPENAI_TTS_MODEL**    | OpenAI Text to speech model     |   tts-1   |
| **ALIYUN_TTS_ACCESS_KEY_ID**    | aliyun access key id     |   获取token请参考：https://help.aliyun.com/document_detail/450514.html   |
| **ALIYUN_TTS_ACCESS_KEY_SECRET**    | aliyun access secret key     |  获取token请参考： https://help.aliyun.com/document_detail/450514.html  |
| **ALIYUN_TTS_APP_KEY**    | aliyun app key      |   获取 app key 请参考：https://help.aliyun.com/document_detail/72214.html   |
| **DIFY_TTS_API_BASE** |  Dify Base Url            |    https://api.dify.ai/v1           |
| **DIFY_TTS_KEY**      |  Dify App key              |          |
| **AZURE_OPENAI_TTS_API_BASE**      |  |    https://xxx.openai.azure.com/      |
| **AZURE_OPENAI_TTS_API_VERSION**      |  |    2024-02-15-preview      |
| **AZURE_OPENAI_TTS_DEPLOYMENT_NAME**      |  |    tts      |
| **AZURE_OPENAI_TTS_KEY**      | https://learn.microsoft.com/en-us/azure/ai-services/openai/text-to-speech-quickstart?tabs=command-line#rest-api  |         |
| **AZURE_OPENAI_TTS_MODEL**      |  |   tts-1       |
| **AUDIO_DOWNLOAD_URL**    |  录音和生成的语音的下载目录        |       |
| **AUDIO_SAVE_PATH**    |     录音和生成的语言的存放目录     |     |
| **MQTT_BROKER_HOST**    |    MQTT Broker Host      |     |
| **MQTT_BROKER_PORT**    |   MQTT Broker Port       |   1883  |
| **MQTT_CLIENT_ID**    |   用户服务器登录的 MQTT Client ID login       |     folotoy |
| **MQTT_USERNAME**    |    用户服务器登录的 MQTT Username login      |     folotoy  |
| **MQTT_PASSWORD**    |      用户服务器登录的 MQTT Password login    |    folotoy |
| **SPEECH_UDP_SERVER_HOST**    |      接受语音数据的 udp 服务主机地址    |      |
| **SPEECH_UDP_SERVER_PORT**    |   接受语音数据的 udp 服务端口        |     8085 |
| **LOG_LEVEL**    |    日志级别: INFO,DEBUG,WARNING      |   DEBUG   |
| **LOG_OUTPUT**    |    日志输出: stderr, [your-log-file-path]      |   stderr   |
| **INTEGRATION_MQTT**    |    是否开启 MQTT 集成接口      |   false   |
| **SENTENCE_SEPARATORS**    |    用于分句的标点符号       |   ，！。？,!.?   |
| **TZ**            | 用于建立本地时区，例如在日志中使用本地时间。 查看 [时区代码列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).   |  Asia/Shanghai     |
