---
title: OpenAI Whisper Configuration
sidebar_label: OpenAI Whisper
---

:::caution
For `openai-whisper`, the `language` parameter is optional. However, if you choose to set it, you need to use the correct language code. The language codes for `openai-whisper` are different from those used in `azure-stt`. For example, for Chinese in `openai-whisper`, you would use the code `zh`. In the `roles.json` file, you can configure different language codes for each role. You can find a list of all language codes for `openai-whisper` here: [OpenAI Whisper language 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
:::

Configurable parameters:

| Parameter Name | Description | Default Value |
| -------------- | ----------- | ------------- |
| language | The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency. | None |
| api_base | The base URL of the API endpoint. | https://api.openai.com/v1 |
| key | Your API key. | None |
| model | The ID of the model to use. | whisper-1 |
| prompt | An optional text to guide the model's style or continue a previous audio segment. The prompt should match the audio language. | "ok. Let's begin." |

Configuration example:

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