---
title: OpenAI Whisper 配置
sidebar_label: OpenAI Whisper
---

:::caution
对于 openai-whisper，语言参数不是必需的。但如果您选择设置它，则需要使用正确的语言代码。openai-whisper 的语言代码与 azure-stt 中使用的语言代码不同。例如，对于 openai-whisper 中的中文，您将使用代码 zh。在 roles.json 文件中，您可以为每个角色配置不同的语言代码。您可以在这里找到 [Openai-Whisper 所有语言代码列表](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
:::

可配置参数:

| 参数名字 | 描述 | 默认值 |
| -------------- | ----------- | ------------- |
| language | 输入音频的语言。以  [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) 格式提供输入语言将提高准确性和延迟 | 无 |
| api_base | API EendPoint 的基本 URL | https://api.openai.com/v1 |
| key | 你的 API key | 无 |
| model | 使用的模型 ID | whisper-1 |
| prompt | 这是一个可选的文本，可以用来指导模型的风格或衔接上一个音频片段。提示语的语言应该与音频的语言一致 | "ok. Let's begin." |

配置示例:

   ```yml title="roles.json"
   {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "stt_type": "openai-whisper",
        "stt_config": {
          "language": "zh",
          "api_base": "https://api.openai.com/v1",
          "key": "sk-AAAAAAAAAAAAAAAAAAa",
          "model": "whisper-1",
          "prompt": "ok. Let's begin."
        }
    }
  }
   ```