---
title: Inworld 文本转语音配置
sidebar_label: Inworld TTS
---

## 可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
|  api_base    | API 基础地址  |  |
|  key    | API key     |  |
|  model_id    | TTS 模型 ID   |  |
|  voice_id    | 用于生成语音的音色 ID     |  |

## 配置示例

   ```yml title="roles.json"
    {
    "1": {
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
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
