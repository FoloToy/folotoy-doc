---
title: Siliconflow/FishAudio 文本转语音配置
sidebar_label: FishAudio TTS
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
|  api_base    | api base 地址  | https://api.siliconflow.cn/v1 | 
|  key    | api key     | sk-AAAA      |
|  model    |  TTS模型： `fishaudio/fish-speech-1.4`    |  fishaudio/fish-speech-1.4     |
|  voice_name    |  用于生成语音的音色. 支持的音色有： https://docs.siliconflow.cn/api-reference/audio/create-speech    |  fishaudio/fish-speech-1.4:alex     |

配置示例

   ```yml title="roles.json"
    {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
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

