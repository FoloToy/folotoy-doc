---
title: Aliyun Dashscope Configuration
sidebar_label: Aliyun Dashscope
---

Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
| api_base    | api base url  |  https://api.minimax.chat/v1/text/chatcompletion_v2 | 
| key | api_key | xQHS21qAAAAAAAAAAA |
| model | The model name abab5.5-chat |  abab5.5-chat |
| max_tokens | max output token count | 1024 |
| temperature |  What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both. | 0.7 |
| top_p | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. | 0.9 |
| enable_search | Enable online search. | true |

Configuration example:

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心",
        "llm_type": "dashscope",
        "llm_config": {
            "key": "TAAAAAAAAAAAAa",
            "model": "qwen-turbo",
            "max_tokens": 1024,
            "temperature": 0.7,
            "enable_search": true
        }
    }
  }
   ```