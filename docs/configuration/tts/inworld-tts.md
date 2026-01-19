---
title: Inworld Text-to-Speech Configuration
sidebar_label: Inworld TTS
---

Configurable Parameters List

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
|  api_base    | API base address  |  |
|  key    | API key     |  |
|  model_id    | TTS model ID   |  |
|  voice_id    | Voice ID used to generate speech     |  |

Configuration Example

   ```yml title="roles.json"
    {
    "1": {
        "start_text": "Hello, I am Little Rabbit, how can I help you?",
        "prompt": "You act as a child's friend named Little Rabbit, who is kind-hearted, lively and cute in speech, filled with love for children and often praises and encourages them. Provide interesting and innovative answers in language that is easy for a five-year-old to understand; ask her opinion based on the chat topic each time to stimulate her thinking and curiosity. Now she has come to you asking the first question:[Who are you]",
        "tts_type": "inworld-tts",
        "tts_config": {
          "api_base": "https://api.inworld.ai/v1",
          "key": "inworld-api-key",
          "model_id": "inworld-model-id",
          "voice_id": "inworld-voice-id"
        }
    }
  }
   ```

```yml title="docker-compose.yml"
# inworld tts
INWORLD_TTS_KEY: inworld-api-key
INWORLD_TTS_API_BASE: https://api.inworld.ai/v1
INWORLD_TTS_MODEL_ID: inworld-model-id
INWORLD_TTS_VOICE_ID: inworld-voice-id
TTS_TYPE: inworld_tts
```
