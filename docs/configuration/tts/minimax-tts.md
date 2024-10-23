---
title: Minimax 文本转语音配置
sidebar_label: Minimax TTS
---

## Minimax TTS

https://www.minimaxi.com

## 可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
|  version    | api 版本  | T2A 或者 T2A_V2，不填默认为T2A |
|  api_base    | api base 地址  | https://api.minimax.chat/v1 |
|  key    | api key     |       |
|  group_id    | group id     |      |
|  model    |  TTS模型    |   speech-01   |
|  voice_id |  音色    |  male-qn-qingse（仅T2A版本生效）   |
|  vol    | 语音音量   |  1.0（仅T2A版本生效）     |
|  speed    | 语音速度   |  1.0（仅T2A版本生效）     |
|  pitch    | 语音音调   |  0（仅T2A版本生效）     |
|  char_to_pitch    |  请参考官方文档  |  []（仅T2A版本生效）    |
|  timber_weights    | 请参考官方文档  |  []     |
|  voice_setting    | 请参考官方文档  |  {}（仅T2A_V2版本生效）    |
|  audio_setting    | 请参考官方文档  |  {}（仅T2A_V2版本生效）    |
|  pronunciation_dict    | 请参考官方文档  |  {}（仅T2A_V2版本生效）    |
|  language_boost    | 请参考官方文档  |    默认为空（仅T2A_V2版本生效）  |


## 配置示例

   ```yml title="roles.json"
    {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "tts_type": "minimax-tts",
        "tts_config": {
          "key": "AAAAA",
          "model": "speech-01",
          "speed": 1.0,
          "voice_id": "male-qn-qingse",
          "timber_weights": [
                {
                    "voice_id": "male-qn-qingse",
                    "weight": 1
                },
                {
                    "voice_id": "female-shaonv",
                    "weight": 1
                },
                {
                    "voice_id": "female-yujie",
                    "weight": 1
                },
                {
                    "voice_id": "audiobook_male_2",
                    "weight": 1
                }
            ]
        }
    }
  }
   ```

## 环境变量

```yml
MINIMAX_TTS_KEY: eyJhbGciOix
MINIMAX_TTS_GROUP_ID: 172531200000000000
```