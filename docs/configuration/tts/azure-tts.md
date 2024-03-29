---
title: Azure Text to Sound Configuration
sidebar_label: Azure TTS
---

Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
| key    | Azure Speech Services Key, For more information, refer to: [Azure Speech Services Key](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview)     |   none    |
| service_region    |  Azure Speech Services Region, For more information, refer to: [Services Region](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview)   |    none   |
| voice_name    |  Voice Name, For more information, refer to: [Voice Name](https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/language-support?tabs=tts)    |   zh-CN-YunyangNeural    |
| style | The voice-specific speaking style. You can express emotions like cheerfulness, empathy, and calmness. You can also optimize the voice for different scenarios like customer service, newscast, and voice assistant. If the style value is missing or invalid, the entire mstts:express-as element is ignored and the service uses the default neutral speech.  | None. If this field is configured, SSML will be used to generate the speech. |
| styledegree | The intensity of the speaking style. You can specify a stronger or softer style to make the speech more expressive or subdued. The range of accepted values are: 0.01 to 2 inclusive. The default value is 1, which means the predefined style intensity. The minimum unit is 0.01, which results in a slight tendency for the target style. A value of 2 results in a doubling of the default style intensity. If the style degree is missing or isn't supported for your voice, this attribute is ignored. | 默认值是1，只有设置了 style 字段才会生效 |
| role | The speaking role-play. The voice can imitate a different age and gender, but the voice name isn't changed. For example, a male voice can raise the pitch and change the intonation to imitate a female voice, but the voice name isn't be changed. If the role is missing or isn't supported for your voice, this attribute is ignored. | 无，只有设置了 style 字段才会生效 |
| dialect_name     | dialect name     |  voice_name needs to be set to a value that supports dialects before setting the dialect. Also, please ensure that the Azure region supports the dialect. For Chinese dialects, it is recommended to use the eastasia region. | 
| prosody_rate     |   Speech rate, optional values are ['slow', 'x-slow', 'medium', 'fast', 'x-fast'] or [0, 3].  |   1   |
| prosody_pitch     |Pitch, optional values are ['low', 'x-low', 'medium', 'high', 'x-high'] or [0.5, 1.5].  | 1     |
| prosody_volume     | Volume, optional values are ['silent', 'x-soft', 'soft', 'medium', 'x-loud'] or [0, 1.5].    |  1     |

When voice_name is set to `zh-CN-XiaoxiaoDialectsNeural`, dialect_name can be set to the following dialects:

- Shandong Dialect: `zh-CN-shandong`
- Northeastern Mandarin: `zh-CN-liaoning`
- Sichuan Dialect: `zh-CN-sichuan`
- Taiwanese Mandarin: `zh-TW`
- Henan Dialect: `zh-CN-henan`
- Shaanxi Dialect: `zh-CN-shaanxi`
- Minnan Dialect: `nan-CN`
- Anhui Mandarin: `zh-CN-anhui`
- Gansu Dialect: `zh-CN-gansu`
- Hunan Mandarin: `zh-CN-hunan`
- Shaanxi Dialect: `zh-CN-shanxi`

For specific SSML settings, please refer to the Azure documentation: https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup-voice

Configuration example:

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
