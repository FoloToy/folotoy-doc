---
title: Azure Text to Sound Configuration
sidebar_label: Azure TTS
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| key    | Azure Speech Services Key，获取请参考：[ Azure Speech Services Key](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview)     |       |
| service_region    |  Azure Speech Services 区域, 获取请参考：[ Azure Speech Services 区域](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview)   |       |
| voice_name    |  Voice Name, 获取请参考：[声音列表](https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/language-support?tabs=tts)    |   zh-CN-YunyangNeural    |
| style | 声音特定的说话风格。您可以表达诸如欢快、同理心和冷静等情绪。您还可以针对不同的场景（例如客服、新闻播报和语音助手）优化声音。如果 style 值缺失或无效，则整个 mstts:express-as 元素将被忽略，服务将使用默认的中性语音 | 无，如果配置了这个字段，将会使用 ssml 来生成语音 |
| styledegree | 说话风格的强度。您可以指定更强或更弱的风格，使语音更加富有表现力或温和。接受值的范围：0.01 到 2 (包含 2)。默认值是 1，表示预定义的风格强度。最小单位是 0.01，会使声音稍微倾向于目标风格。值为 2 时，会使默认风格强度翻倍。如果缺少风格强度信息或您的声音不支持该属性，则会忽略此属性。 | 默认值是1，只有设置了 style 字段才会生效 |
| role | 说话角色扮演。声音可以模仿不同的年龄和性别，但语音名称不会改变。例如，男性声音可以通过升高音调并改变语调来模仿女性声音，但语音名称不会改变。如果角色信息缺失或您的声音不支持该属性，则会忽略此属性 | 无，只有设置了 style 字段才会生效 |
| dialect_name     | 方言名称     |  voice_name 要设置为一个支持方言的值，然后才能设置方言，另外需要注意 azure 的区域是否支持方言，中文方言建议使用 eastasia 区 | 
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
