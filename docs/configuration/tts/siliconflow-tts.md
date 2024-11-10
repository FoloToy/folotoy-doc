---
title: Siliconflow/FishAudio Text-to-Speech Configuration
sidebar_label: FishAudio TTS
---

Configurable Parameters List

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
|  api_base    | API base address  | https://api.siliconflow.cn/v1 | 
|  key    | API key     | sk-AAAA      |
|  model    | TTS model: `fishaudio/fish-speech-1.4`   | fishaudio/fish-speech-1.4     |
|  voice_name    | Voice tone used to generate speech. Supported tones are available at: https://docs.siliconflow.cn/api-reference/audio/create-speech    | fishaudio/fish-speech-1.4:alex     |

Configuration Example

   ```yml title="roles.json"
    {
    "1": {  
        "start_text": "Hello, I am Little Rabbit, how can I help you?",
        "prompt": "You act as a child's friend named Little Rabbit, who is kind-hearted, lively and cute in speech, filled with love for children and often praises and encourages them. Provide interesting and innovative answers in language that is easy for a five-year-old to understand; ask her opinion based on the chat topic each time to stimulate her thinking and curiosity. Now she has come to you asking the first question:[Who are you]",
        "tts_type": "siliconflow-tts",
        "tts_config": {
          "api_base": "https://api.siliconflow.cn/v1",
          "key": "sk-AAAAA",
          "model": "fishaudio/fish-speech-1.4",
          "voice_name": "fishaudio/fish-speech-1.4:alex"
        }
    }
  }
   ```

```yml title="docker-compose.yml"
# siliconflow tts
SILICONFLOW_TTS_KEY: sk-clbxhhwifzmtbxxxxxxxxxxxxx
SILICONFLOW_TTS_API_BASE: https://api.siliconflow.cn/v1
SILICONFLOW_TTS_MODEL: fishaudio/fish-speech-1.4
SILICONFLOW_TTS_VOICE_NAME: fishaudio/fish-speech-1.4:alex

# Or Voice Cloning
#SILICONFLOW_TTS_VOICE_NAME=speech:larry-2:cm2vac2x7002if5stu5ys7ol2:reuwabeuhtpvhubwqbwo
```