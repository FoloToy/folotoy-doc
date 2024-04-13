---
title: 火山引擎文本转语音配置
sidebar_label: 火山引擎 TTS
---

## 火山引擎

https://www.volcengine.com/docs/6561/97465

## 可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
|  access_token    | access_token     |       |
|  app_id    | app id     |      |
|  cluster_id    | cluster id     |      |
|  voice_type |  音色    |    |
|  volume_ratio    | 语音音量   |  1.0     |
|  speed_ratio    | 语音速度   |  1.0     |
|  pitch_ratio    | 语音音调   |  1.0     |
|  emotion    |  风格  |       |
|  language    | 语种，包括方言  |       |


## 配置示例

   ```yml title="roles.json"
    {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "tts_type": "minimax-tts",
        "tts_config": {
          "app_id": "4556821315",
          "cluster_id": "volcano_tts",
          "access_token": "U5joq1ow-Goyxxxxxxxxxxxxxx",
          "voice_type": "BV700_V2_streaming"
        }
    }
  }
   ```

## 环境变量

```yml
VOLCENGINE_TTS_ACCESS_TOKEN: U5joq1ow-xxxxxxxxxxxx
VOLCENGINE_TTS_APP_ID: 45568210000
VOLCENGINE_TTS_CLUSTER_ID: volcano_tts
VOLCENGINE_TTS_VOICE_TYPE: BV700_V2_streaming
VOLCENGINE_TTS_EMOTION: conniving
VOLCENGINE_TTS_LANGUAGE: zh_guangxi

```