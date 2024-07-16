---
title: Elevenlabs 文本转语音配置
sidebar_label: Elevenlabs TTS
---


可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| key | elevenlabs key | 无 |
| model | elevenlabs 模型名称 | eleven_multilingual_v2  |
| voice_id | Elevenlas 语音 ID  - 要使用的语音 ID，您可以使用 https://elevenlabs.io/api 列出所有可用语音。 也可以参考下图查找 |  |

<img src="https://doc-img.folotoy.com/images/1455685/281985484-7fa3e816-c384-4cb9-bf92-448b4e23fc9d.png" />

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

