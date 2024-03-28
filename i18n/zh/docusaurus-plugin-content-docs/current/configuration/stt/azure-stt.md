---
title: Azure Sound to Text 配置
sidebar_label: Azure Sound to Text
---


:::caution
对于 `azure-stt` 语音转文本服务，您需要使用正确的语言代码，这些代码与 `openai-whisper` 不同。例如，对于中文，`azure-stt` 使用代码 `zh-CN`。在 `roles.json` 文件中，请确保为每个角色配置正确的语言代码。您可以在此链接找到 `azure-stt` 支持的所有语言代码列表：[Azure STT 语言 BCP-47 代码](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt)
:::

可配置参数:

| 参数名字 | 描述 | 默认值 |
| -------------- | --------------------- | ------------- |
| language | 输入入音频的语言，语言代码：[Azure STT language BCP-47 codes](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt) | zh-CN |
| key | Azure Speech Services Key. 点击查看更多：[Azure Speech Services Overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview) | 无 |
| service_region | Azure Speech Services 地区. 点击查看更多：[Azure Speech Services Overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview) | 无 |

配置示例:

   ```yml title="roles.json"
   {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "stt_type": "azure-stt",
        "stt_config": {
          "language": "zh-CN",
          "key": "ef0f2781b5a24bbbbbbbbbbbbbbbbbbbb",
          "service_region": "eastus"
        }
    }
  }
   ```