---
title: Dify Configuration
sidebar_label: Dify
---

dify can be self-deployed at https://github.com/langgenius/dify or directly used the cloud version at https://cloud.dify.ai/

Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
|  api_base    | api base url  |  https://api.dify.ai/v1 | 
| key | dify api_key, dify can be self-deployed or used the cloud version of dify, create a conversational app and then create an api key | app-AAAAAAAAAAAAA |

Configuration example:

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "llm_type": "dify",
        "llm_config": {
            "api_base": "http://192.168.52.164/v1",
            "key": "app-AAAAAAAAAAAAAAAAAAa"
        }
    }
  }
   ```
