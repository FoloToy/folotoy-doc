---
title: Elevenlabs Text to Sound Configuration
sidebar_label: Elevenlabs TTS
---


可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| key | elevenlabs key |  |
| model | elevenlabs model | eleven_multilingual_v2  |
| voice_id | elevenlabs voice id voice id, Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices. 也可以参考下图查找 |  |

<img src="https://user-images.githubusercontent.com/1455685/281985484-7fa3e816-c384-4cb9-bf92-448b4e23fc9d.png" />

配置示例

```yml title="roles.json"
    {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "tts_type": "elevenlabs",
        "tts_config": {
          "key": "aaaaaaaaaaaa",
          "model": "eleven_multilingual_v2",
          "voice_id": "c8Vkv3mdER2fkhJdEIPK"
        }
    }
  }   
```

