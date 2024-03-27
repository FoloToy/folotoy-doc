---
title: Azure OpenAI Whisper Configuration
sidebar_label: Azure OpenAI Whisper
---


:::caution
Azure Whisper is still in preview and can only be deployed in the North Central US and West Europe regions. Additionally, using Whisper requires Azure OpenAI permissions. You can check the available regions for Whisper models in the preview phase here: [Whisper Models (Preview) Available Regions](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#whisper-models-preview).
:::

Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| -------------- | --------------------- | ------------- |
| api_base | API endpoint URL | None |
| key | API key for authentication | None |
| deployment_name | Deployment name for the model (do not use the model name) | None |
| api_version | API version | 2023-09-01-preview |

Configuration example:

   ```yml title="roles.json"
   {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "max_message_count": 10,
        "stt_type": "openai-whisper",
        "stt_config": {
          "api_base": "https://xxx.openai.azure.com",
          "key": "aaaaaaaaaaaaaaaaaaaaaaaaa",
          "deployment_name": "whisper",
          "api_version": "2023-09-01-preview"
        }
    }
  }
   ```