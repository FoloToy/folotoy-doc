---
id: environment_variables
title: Environment Variables
sidebar_label: Environment Variables
---

FoloToy Server accepts the following environment variables for runtime configuration:

| Variable Name     | Description      | Default Value |
| --------------------------------- | ----------------------------------------------- | ----------------------------- |
| **ROLES_FILE_PATH**| role config file (**required**)        |     roles.json          |
| **STT_TYPE** | sound-to-text options: openai-whisper, azure-stt, azure-whisper, dify-stt, aliyun-asr              |   openai-whisper            |
| **OPENAI_WHISPER_API_BASE** | OpenAI Whisper API Base Url     |    https://api.openai.com/v1           |
| **OPENAI_WHISPER_KEY** |  OpenAI Whisper API Key     |   sk-AAAAAAAAA            |
| **OPENAI_WHISPER_MODEL** | OpenAI Whipser Model   |   whisper-1            |
| **AZURE_WHISPER_API_BASE** |      Azure Whisper API Base Url |           |
| **AZURE_WHISPER_KEY**            |       Azure Whisper API Key       |             |
| **AZURE_WHISPER_DEPLOYMENT_NAME**              |       Deploy Name        |          |
| **AZURE_WHISPER_API_VERSION**  |     API Version,    https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#request-a-speech-to-text-transcription |     2023-09-01-preview     |
| **AZURE_STT_KEY**     |    Azure Speech Services Key, https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview           |               |
| **AZURE_STT_SERVICE_REGION** |    Azure Speech Services Region          |          |
| **DIFY_STT_API_BASE**  |  Dify sound-to-text API Base Url. You need to enable sound-to-text feature in dify configurtions        | http://192.168.52.164/v1
| **DIFY_STT_KEY**          |  Dify sound-to-text API Key         |     sk-AAAAAAAA      |
| **LLM_TYPE**  |   Large Language Model Type: openai, azure-openai, gemini, dify, qianfan, xiaodu, moonshot, groq, ollama, anthropic  |       openai               |
| **OPENAI_OPENAI_API_BASE**  |  OpenAI API Base Url        | https://api.openai.com/v1
| **OPENAI_OPENAI_KEY**          |  OpenAI API Key         |     sk-AAAAAAAA      |
| **OPENAI_OPENAI_MODEL**          |  OpenAI Model          |     gpt-3.5-turbo      |
| **AZURE_OPENAI_KEY**          |   Azure OpenAI API Key     |               |
| **AZURE_OPENAI_ENDPOINT**  |  Azure OpenAI API Endpoint             |          |
| **AZURE_OPENAI_API_VERSION**     |   Azure OpenAI API Version, https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#completions            |  2023-05-15             |
| **AZURE_OPENAI_MODEL**          |  OpenAI Model          |     gpt-35-turbo      |
| **DIFY_API_BASE**  |  Dify API Base Url        | http://192.168.52.164/v1
| **DIFY_KEY**          |  Dify API Key         |     sk-AAAAAAAA      |
| **GEMINI_API_BASE**  |  Gemini API Base Url        | https://generativelanguage.googleapis.com
| **GEMINI_KEY**          |  Gemini API Key         |     sk-AAAAAAAA      |
| **QIANFAN_CLIENT_ID**  |  Qianfan API Key        | 13rBTgx*****************e03XE
| **QIANFAN_SECRET**          |  Qianfan Secret Key Key         |     zYxtMI***************QLerLgQ2W5e      |
| **QIANFAN_MODEL**          |  Qianfan Model Key         |     yi_34b_chat      |
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
| **VOICE_EXECUTOR_MAX_WORKERS**     |   Voice task threadpool max size             | 2 |
| **TTS_TYPE** |      Text-To-Sound Type: openai-tts, azure-tts, azure-openai-tts, elevenlabs, aliyun-tts, edge-tts    |     edge-tts          |
| **AZURE_TTS_KEY** |  Azure Speech Services Key        |               |
| **AZURE_TTS_SERVICE_REGION**      |  Azure Speech Services Region          |          |
| **ELEVENLABS_TTS_KEY** |   elevenlabs.io API Key    |          |
| **ELEVENLABS_TTS_MODEL**     |    elevenlabs.io Model              |       eleven_multilingual_v2   |
| **OPENAI_TTS_API_BASE**|     OpenAI API Base Url |        https://api.openai.com/v1       |
| **OPENAI_TTS_KEY**    |       OpenAI API Key         |   sk-AAAAAA   |
| **OPENAI_TTS_MODEL**    | OpenAI Text to speech model              |   tts-1   |
| **AZURE_OPENAI_TTS_API_BASE**      |  |    https://xxx.openai.azure.com/      |
| **AZURE_OPENAI_TTS_API_VERSION**      |  |    2024-02-15-preview      |
| **AZURE_OPENAI_TTS_DEPLOYMENT_NAME**      |  |    tts      |
| **AZURE_OPENAI_TTS_KEY**      | https://learn.microsoft.com/en-us/azure/ai-services/openai/text-to-speech-quickstart?tabs=command-line#rest-api  |         |
| **AZURE_OPENAI_TTS_MODEL**      |  |   tts-1       |
| **AUDIO_DOWNLOAD_URL**    |  Audio files download base url |       |
| **AUDIO_SAVE_PATH**    |     Audio files location              |     |
| **MQTT_BROKER_HOST**    |    MQTT Broker Host               |     |
| **MQTT_BROKER_PORT**    |   MQTT Broker Port|   1883  |
| **MQTT_CLIENT_ID**    |   MQTT Client ID for server login|     folotoy |
| **MQTT_USERNAME**    |    MQTT Username for server login               |     folotoy  |
| **MQTT_PASSWORD**    |      MQTT Password for server login             |    folotoy |
| **SPEECH_UDP_SERVER_HOST**    |      udp host for speech server for receiving recording data             |      |
| **SPEECH_UDP_SERVER_PORT**    |   udp port for speech server for receiving recording data|     8085|
| **LOG_LEVEL**    |    log level: INFO,DEBUG,WARNING               |   DEBUG   |
| **INTEGRATION_MQTT**    |    Whether to enable the MQTT integration|   false   |
| **SENTENCE_SEPARATORS**    |    separators for split the long sentences to short|   ，！。？,!.?   |
| **TZ**            | Used to establish the local time zone, e.g. to use the local time in logs. See [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).   |  Asia/Shanghai             |
