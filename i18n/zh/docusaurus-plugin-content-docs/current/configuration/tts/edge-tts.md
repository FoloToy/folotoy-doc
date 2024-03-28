---
title: MS Edge 文本转语音配置
sidebar_label: MS Edge TTS
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
|  voice_name    |  Voice Name, 获取请查看：[声音列表](https://github.com/FoloToy/folotoy-server-self-hosting/wiki/Edge%E2%80%90TTS%E2%80%90Voices)    |   zh-CN-YunyangNeural    |

配置示例

   ```yml title="roles.json"
    {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "tts_type": "edge-tts",
        "tts_config": {
          "voice_name": "zh-CN-YunyangNeura"
        }
    }
  } 
   ```
