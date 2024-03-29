---
title: Azure Sound to Text Configuration
sidebar_label: Azure Sound to Text
---


:::caution
For `azure-stt`, you need to use the correct language codes, which are different from those used in `openai-whisper`. For example, for Chinese in `azure-stt`, you would use the code `zh-CN`. In the `roles.json` file, make sure to configure the correct language code for each role. You can find a list of all language codes supported by `azure-stt` here: [Azure STT language BCP-47 codes](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt)
:::

Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| -------------- | --------------------- | ------------- |
| language | The language of the input audio. Click here to see all language codes: [Azure STT language BCP-47 codes](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt) | zh-CN |
| key | Azure Speech Services Key. For more information, refer to: [Azure Speech Services Overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview) | None |
| service_region | Azure Speech Services Region. For more information, refer to: [Azure Speech Services Overview](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview) | None |

Configuration example:

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