---
title: OpenAI Text to Sound Configuration
sidebar_label: OpenAI TTS
---

Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
|  api_base    | api base url  | https://api.openai.com/v1 | 
|  key    | openai api key     | sk-AAAA      |
|  model    |  One of the available TTS models: tts-1 or tts-1-hd    |  tts-1     |
|  speed    |  The speed of the generated audio. Select a value from 0.25 to 4.0    |  1.0     |
|  voice_name    |  The voice to use when generating the audio. Supported voices are alloy, echo, fable, onyx, nova, and shimmer.    |  alloy     |

Configuration example:

   ```yml title="roles.json"
    {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "tts_type": "openai-tts",
        "tts_config": {
          "api_base": "https://api.openai.com/v1",
          "key": "sk-AAAAA",
          "model": "tts-1",
          "speed": 1.0,
          "voice_name": "alloy"
        }
    }
  }
   ```

