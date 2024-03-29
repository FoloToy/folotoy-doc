---
title: Azure OpenAI Text to Sound Configuration
sidebar_label: Azure OpenAI TTS
---


:::caution
azure-openai-tts 的还是预览状态，参考文档：https://learn.microsoft.com/en-us/azure/ai-services/openai/text-to-speech-quickstart?tabs=command-line
:::

Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| :-- | :-- | :-- |
| api_base | API endpoint | none |
| key | API key | none |
| deployment_name | Deployment name, do not fill in the model name | none |
| api_version | API version | 2024-02-15-preview |
| model | Model name | tts-1 |
| speed | Playback speed | 1 |
| voice_name | Voice name | alloy, echo, fable, onyx, nova, shimmer |

Configuration example:

```yml title="roles.json"
   {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "tts_type": "azure-openai-tts",
        "tts_config": {
          "voice_name": "nova"
        }
    }
  }
```