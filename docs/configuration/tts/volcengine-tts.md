---
title: Volcengine Text-to-Speech Configuration
sidebar_label: Volcengine TTS
---

## Volcengine

https://www.volcengine.com/docs/6561/97465

## Configurable Parameters List

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
|  access_token    | access_token     |       |
|  app_id    | app id     |      |
|  cluster_id    | cluster id     |      |
|  voice_type |  Voice type    |    |
|  volume_ratio    | Volume   |  1.0     |
|  speed_ratio    | Speech speed   |  1.0     |
|  pitch_ratio    | Pitch   |  1.0     |
|  emotion    |  Style  |       |
|  language    | Language, including dialects  |       |


## Configuration Example

   ```yml title="roles.json"
    {
    "1": {  
        "start_text": "Hello, I am Little Rabbit, how can I help you?",
        "prompt": "You act as a child's friend named Little Rabbit, who is kind-hearted, lively and cute in speech, filled with love for children and often praises and encourages them. Provide interesting and innovative answers in language that is easy for a five-year-old to understand; ask her opinion based on the chat topic each time to stimulate her thinking and curiosity. Now she has come to you asking the first question:[Who are you]",
        "tts_type": "volcengine-tts",
        "tts_config": {
          "app_id": "4556821315",
          "cluster_id": "volcano_tts",
          "access_token": "U5joq1ow-Goyxxxxxxxxxxxxxx",
          "voice_type": "BV700_V2_streaming"
        }
    }
  }
   ```

## Environment Variables

```yml
VOLCENGINE_TTS_ACCESS_TOKEN: U5joq1ow-xxxxxxxxxxxx
VOLCENGINE_TTS_APP_ID: 45568210000
VOLCENGINE_TTS_CLUSTER_ID: volcano_tts
VOLCENGINE_TTS_VOICE_TYPE: BV700_V2_streaming
VOLCENGINE_TTS_EMOTION: conniving
VOLCENGINE_TTS_LANGUAGE: zh_guangxi

```
