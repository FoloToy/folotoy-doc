---
title: OpenAI Configuration
sidebar_label: OpenAI
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
|  api_base    | api base url  |  https://api.openai.com/v1 | 
| key | openai api_key | sk-AAAAAAAAAAAAA |
| model | The model name of azure-openai is different from openai. Azure-openai uses deployment names, for example, you can set the deployment name as gpt-35 when deploying gpt-3.5-turbo. |  |
| max_tokens |https://platform.openai.com/docs/api-reference/chat/create#chat-create-model | 400 |
| temperature | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both. | 0.7 |
| top_p | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. | 0.95 |
| frequency_penalty |  | 0 |
| presence_penalty | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics. | 0 |

配置示例

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "llm_type": "openai",
        "llm_config": {
            "model": "gpt-3.5-turbo",
            "temperature": 0.7,
            "max_tokens": 800,
            "top_p": 0.95,
            "frequency_penalty": 0,
            "presence_penalty": 0
        }
    }
  }
   ```
