---
title: Azure OpenAI Whisper 配置
sidebar_label: Azure OpenAI Whisper
---


:::caution
Azure Whisper 目前仍处于预览阶段，并且只能在以下区域部署：美国中部北区和西欧。此外，使用 Whisper 需要 Azure OpenAI 权限。有关预览阶段 Whisper 模型的可用区域，您可以在此链接查看：[Whisper 模型（预览版）可用区域](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#whisper-models-preview).
:::

可配置参数:

| 参数名字 | 描述 | 默认值 |
| -------------- | --------------------- | ------------- |
| api_base | API endpoint 地址 | 无 |
| key | 用于认证的 API key | 无 |
| deployment_name | 模型部署名称（请勿使用模型名称） | 无 |
| api_version | API 版本 | 2023-09-01-preview |

配置示例:

   ```yml title="roles.json"
   {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "max_message_count": 10,
        "stt_type": "azure-whisper",
        "stt_config": {
          "api_base": "https://xxx.openai.azure.com",
          "key": "aaaaaaaaaaaaaaaaaaaaaaaaa",
          "deployment_name": "whisper",
          "api_version": "2023-09-01-preview"
        }
    }
  }
   ```