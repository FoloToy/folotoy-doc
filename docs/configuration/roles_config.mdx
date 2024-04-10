---
id: environment_variables
title: Environment Variables
sidebar_label: Environment Variables (docker-compose.yml)
---

[Self-hosting Server File Online Generator](https://self-hoseting-file-generator.vercel.app/)

The latest version of the file is available here: [docker-compose.yml](https://github.com/FoloToy/folotoy-server-self-hosting/blob/main/docker-compose.yml). **Please copy the latest document and modify the parameters as needed.**

This file is used to configure global parameters, such as the global use of `TTS (Text-to-Speech)`, `LLM (Large Language Model)`, `STT (Speech-to-Text)`, as well as `server address`, `port`, and other configurations.

If you want to set the voice type for TTS globally, you can add the following fields (please add the corresponding fields based on your TTS type):

- OPENAI_TTS_VOICE_NAME (alloy, echo, fable, onyx, nova, shimmer)
- AZURE_OPENAI_TTS_VOICE_NAME (alloy, echo, fable, onyx, nova, shimmer)
- AZURE_TTS_VOICE_NAME ([Voice List](https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/language-support?tabs=tts))
- EDGE_TTS_VOICE_NAME ([Voice List](https://github.com/FoloToy/folotoy-server-self-hosting/wiki/Edge%E2%80%90TTS%E2%80%90Voices))
- ELEVENLABS_TTS_VOICE_ID ([Voice List](https://elevenlabs.io/api))
- ALIYUN_TTS_APP_KEY ([App Key](https://help.aliyun.com/document_detail/72214.html))
- DIFY_TTS_KEY

**If you want to set specific TTS for each role, please refer to [Role Configuration](./roles_config.mdx#advanced-configuration)**

:::caution

- Make sure to replace `your_vps_ip` with your own IP address. Modify the keys of various services to your own keys. **Especially note that `AUDIO_DOWNLOAD_URL` starts with `http://`, and `SPEECH_UDP_SERVER_HOST` does not**.

- Make sure all used ports are open, `1883/tcp`, `8082/tcp`, `18083/tcp`, `8083/tcp`, `8085/udp`, especially note that port `8085` is `UDP`. For some VPS, you may need to open them in the security group. **Please ensure that the opening is successful, especially ensure that `8085` is `UDP`.**

- **You only need to fill in your own set of TTS, LLM, STT, and the corresponding parameters.** For example: If you choose `openai-whisper` for STT_TYPE, then you need to fill in the corresponding `OPENAI_WHISPER_KEY`, `OPENAI_WHISPER_MODEL`, `OPENAI_WHISPER_API_BASE`.

- After each modification, a rebuild is required, execute the following command:
    ```bash
    docker compose up -d
    ```

- The definitions of `TTS`, `LLM`, `STT` in this file have lower priority than those in `roles.json`. If `TTS`, `LLM`, `STT` are defined in `roles.json`, the definitions in this file will not take effect. After the setup is completed, if conflicts with the services defined here are found during testing, please check `roles.json`.

- The `ROLES_FILE_PATH` field configures the path of `roles.json`. Please ensure that the path is correct.
:::

FoloToy server accepts the following environment variables for runtime configuration:

| Variable Name     | Description          | Default Value |
| --------------------------------- | ---------------------------- | ----------------------------- |
| **ROLES_FILE_PATH**| Role configuration file|     roles.json          |
| **STT_TYPE** | Speech-to-Text Engine Type: openai-whisper, azure-stt, azure-whisper, dify-stt, aliyun-asr              |   openai-whisper            |
| **OPENAI_WHISPER_API_BASE** | OpenAI Whisper API Base Url         |    https://api.openai.com/v1           |
| **OPENAI_WHISPER_KEY** |  OpenAI Whisper API Key|   sk-AAAAAAAAA            |
| **OPENAI_WHISPER_MODEL** | OpenAI Whipser Model          |   whisper-1            |
| **AZURE_WHISPER_API_BASE** |      Azure Whisper API Base Url，Regions availability: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#model-summary-table-and-region-availability     |           |
| **AZURE_WHISPER_KEY**            |       Azure Whisper API Key  |             |
| **AZURE_WHISPER_DEPLOYMENT_NAME**              |       Deploy Name               |          |
| **AZURE_WHISPER_API_VERSION**  |     API Version, Details: https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#request-a-speech-to-text-transcription   |       2023-09-01-preview   |
| **AZURE_STT_KEY**     |    Azure Speech Services Key, Details: https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview  |               |
| **AZURE_STT_SERVICE_REGION** |    Azure Speech Services Region     |          |
| **DIFY_STT_API_BASE**  |  Dify Sound-to-Text API Base Url. You need to enable sound-to-text feature in Dify configurations        | http://192.168.52.164/v1
| **DIFY_STT_KEY**          |  Dify Sound-to-Text API Key    |     sk-AAAAAAAA      |
| **ALIYUN_ASR_ACCESS_KEY_ID**    | Aliyun Access Key ID     |   For token retrieval, refer: https://help.aliyun.com/document_detail/450514.html   |
| **ALIYUN_ASR_ACCESS_KEY_SECRET**    | Aliyun Access Secret Key     |  For token retrieval, refer: https://help.aliyun.com/document_detail/450514.html  |
| **ALIYUN_ASR_APP_KEY**    | Aliyun App Key      |   For app key retrieval, refer: https://help.aliyun.com/document_detail/72214.html   |
| **LLM_TYPE**  |   Large Language Model Type: openai, azure-openai, gemini, dify, qianfan, xiaodu, moonshot, groq, ollama, anthropic  |       openai               |
| **OPENAI_OPENAI_API_BASE**  |  OpenAI API Base Url        | https://api.openai.com/v1
| **OPENAI_OPENAI_KEY**          |  OpenAI API Key    |     sk-AAAAAAAA      |
| **OPENAI_OPENAI_MODEL**          |  OpenAI Model     |     gpt-3.5-turbo      |
| **AZURE_OPENAI_KEY**          |   Azure OpenAI API Key            |               |
| **AZURE_OPENAI_ENDPOINT**  |  Azure OpenAI API Endpoint |          |
| **AZURE_OPENAI_API_VERSION**     |   Azure OpenAI API Version, ，Available versions: https://learn

.microsoft.com/en-us/azure/ai-services/openai/reference#completions   |  2023-05-15             |
| **AZURE_OPENAI_MODEL**          |  OpenAI Model     |     gpt-35-turbo      |
| **DIFY_API_BASE**  |  Dify API Base Url        | http://192.168.52.164/v1
| **DIFY_KEY**          |  Dify API Key    |     sk-AAAAAAAA      |
| **GEMINI_API_BASE**  |  Gemini API Base Url        | https://generativelanguage.googleapis.com
| **GEMINI_KEY**          |  Gemini API Key    |     sk-AAAAAAAA      |
| **QIANFAN_CLIENT_ID**  |  Qianfan API Key        | 13rBTgx*****************e03XE
| **QIANFAN_SECRET**          |  Qianfan Secret Key Key    |     zYxtMI***************QLerLgQ2W5e      |
| **QIANFAN_MODEL**          |  Qianfan Model Key    |     yi_34b_chat      |
| **MOONSHOT_API_BASE** | Moonshot API Base Url | https://api.moonshot.cn/v1 |
| **MOONSHOT_KEY** |  | sk-xxxxx |
| **MOONSHOT_MODEL** |  | moonshot-v1-8k |
| **OLLAMA_API_BASE** | Ollama API Base Url | http://localhost:11434 |
| **OLLAMA_MODEL** |  | gemma:2b |
| **GROQ_API_BASE** | Groq API Base Url | https://api.groq.com/openai/v1 |
| **GROQ_MODEL** | Groq Model | mixtral-8x7b-32768 |
| **GROQ_KEY** | Groq API Key |  |
| **ANTHROPIC_API_BASE** |  | https://api.anthropic.com |
| **ANTHROPIC_KEY** |  | sk-ant-api03-xx |
| **ANTHROPIC_MODEL** |  | claude-3-sonnet-20240229 |
| **ANTHROPIC_MAX_TOKENS** |  | 1024  |
| **VOICE_EXECUTOR_MAX_WORKERS**     |   Voice task thread pool max size | 2 |
| **TTS_TYPE** |      Text-to-Speech Engine Type: openai-tts, azure-tts, azure-openai-tts, aliyun-tts, elevenlabs, edge-tts        |     edge-tts          |
| **AZURE_TTS_KEY** |  Azure Speech Services Key            |               |
| **AZURE_TTS_SERVICE_REGION**      |  Azure Speech Services Region              |          |
| **ELEVENLABS_TTS_KEY** |   elevenlabs.io API Key           |          |
| **ELEVENLABS_TTS_MODEL**     |    elevenlabs.io Model     |       eleven_multilingual_v2   |
| **OPENAI_TTS_API_BASE**|     OpenAI API Base Url  |        https://api.openai.com/v1       |
| **OPENAI_TTS_KEY**    |       OpenAI API Key|   sk-AAAAAA   |
| **OPENAI_TTS_MODEL**    | OpenAI Text to speech model     |   tts-1   |
| **ALIYUN_TTS_ACCESS_KEY_ID**    | Aliyun Access Key ID     |   For token retrieval, refer: https://help.aliyun.com/document_detail/450514.html   |
| **ALIYUN_TTS_ACCESS_KEY_SECRET**    | Aliyun Access Secret Key     |  For token retrieval, refer: https://help.aliyun.com/document_detail/450514.html  |
| **ALIYUN_TTS_APP_KEY**    | Aliyun App Key      |   For app key retrieval, refer: https://help.aliyun.com/document_detail/72214.html   |
| **DIFY_TTS_API_BASE** |  Dify Base Url            |    https://api.dify.ai/v1           |
| **DIFY_TTS_KEY**      |  Dify App key              |          |
| **AZURE_OPENAI_TTS_API_BASE**      |  |    https://xxx.openai.azure.com/      |
| **AZURE_OPENAI_TTS_API_VERSION**      |  |    2024-02-15-preview      |
| **AZURE_OPENAI_TTS_DEPLOYMENT_NAME**      |  |    tts      |
| **AZURE_OPENAI_TTS_KEY**      | Details: https://learn.microsoft.com/en-us/azure/ai-services/openai/text-to-speech-quickstart?tabs=command-line#rest-api  |         |
| **AZURE_OPENAI_TTS_MODEL**      |  |   tts-1       |
| **AUDIO_DOWNLOAD_URL**    |  Directory for downloading recordings and generated voices        |       |
| **AUDIO_SAVE_PATH**    |     Directory for saving recordings and generated voices     |     |
| **MQTT_BROKER_HOST**    |    MQTT Broker Host      |     |
| **MQTT_BROKER_PORT**    |   MQTT Broker Port       |   1883  |
| **MQTT_CLIENT_ID**    |   MQTT Client ID for user server login       |     folotoy |
| **MQTT_USERNAME**    |    MQTT Username for user server login      |     folotoy  |
| **MQTT_PASSWORD**    |      MQTT Password for user server login    |    folotoy |
| **SPEECH_UDP_SERVER_HOST**    |      Host address of the UDP server that receives speech data    |      |
| **SPEECH_UDP_SERVER_PORT**    |   Port of the UDP server that receives speech data        |     8085 |
| **LOG_LEVEL**    |    Log Level: INFO,DEBUG,WARNING      |   DEBUG   |
| **INTEGRATION_MQTT**    |    Whether to enable MQTT integration interface      |   false   |
| **SENTENCE_SEPARATORS**    |    Punctuation marks used for sentence separation       |   ，！。？,!.?   |
| **TZ**            | Used to establish local timezone, for example, to use local time in logs. Check [List of Timezone Codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).   |  Asia/Shanghai     |

Translated directly into English.