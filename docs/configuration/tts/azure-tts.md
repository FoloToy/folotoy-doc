---
title: Azure Text to Sound Configuration
sidebar_label: Azure TTS
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| key    | Azure Speech Services Key, https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview     |       |
| service_region    |  Azure Speech Services Region, https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview    |       |
| voice_name    |  Voice Name, 点击这里查看声音列表 https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/language-support?tabs=tts    |   zh-CN-YunyangNeural    |
| style | The voice-specific speaking style. You can express emotions like cheerfulness, empathy, and calmness. You can also optimize the voice for different scenarios like customer service, newscast, and voice assistant. If the style value is missing or invalid, the entire mstts:express-as element is ignored and the service uses the default neutral speech.  | 无，如果配置了这个字段，将会使用 ssml 来生成语音 |
| styledegree | The intensity of the speaking style. You can specify a stronger or softer style to make the speech more expressive or subdued. The range of accepted values are: 0.01 to 2 inclusive. The default value is 1, which means the predefined style intensity. The minimum unit is 0.01, which results in a slight tendency for the target style. A value of 2 results in a doubling of the default style intensity. If the style degree is missing or isn't supported for your voice, this attribute is ignored. | 默认值是1，只有设置了 style 字段才会生效 |
| role | The speaking role-play. The voice can imitate a different age and gender, but the voice name isn't changed. For example, a male voice can raise the pitch and change the intonation to imitate a female voice, but the voice name isn't be changed. If the role is missing or isn't supported for your voice, this attribute is ignored. | 无，只有设置了 style 字段才会生效 |
| dialect_name     | dialect name     |  voice_name 要设置为一个支持方言的值，然后才能设置方言，另外需要注意 azure 的区域是否支持方言，中文方言建议使用 eastasia 区 | 
| prosody_rate     |   语速，可选值 ['slow', 'x-slow', 'medium', 'fast', 'x-fast'] 或者 [0, 3]   |   1   |
| prosody_pitch     |  声调, 可选值 ['low', 'x-low', 'medium', 'high', 'x-high'] 或者 [0.5, 1,5]   | 1     |
| prosody_volume     | 音量, 可选值 ['silent', 'x-soft', 'soft', 'medium', 'x-loud'] 或者 [0, 1.5]     |  1     |

当 voice_name 设置为 `zh-CN-XiaoxiaoDialectsNeural` 时，dialect_name 可以设置为以下的方言：

- 山东方言： `zh-CN-shandong`
- 东北话： `zh-CN-liaoning`
- 四川方言： `zh-CN-sichuan`
- 台湾话： `zh-TW`
- 河南方言： `zh-CN-henan`
- 陕西方言： `zh-CN-shaanxi`
- 闽南话： `nan-CN`
- 安徽普通话： `zh-CN-anhui`
- 甘肃方言： `zh-CN-gansu`
- 湖南普通话： `zh-CN-hunan`
- 陕西方言： `zh-CN-shanxi`


SSML 具体设置请参考 Azure 文档： https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup-voice

配置示例

   ```yml title="roles.json"
    {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "tts_type": "azure-tts",
        "tts_config": {
          "key": "aaaaaaaaaaaa",
          "service_region": "asiaeast",
          "voice_name": "zh-CN-YunyangNeura"
        }
    }
  } 
   ```
