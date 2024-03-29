---
title: FastGPT Configuration
sidebar_label: FastGPT
---

FastGPT 文档说明：https://fastgpt.in/en

Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
| api_base    | Api base url  |  https://api.fastgpt.in/api | 
| key |App key for fastgpt, not account key | fastgpt-AAAAAAAAAAAAA |
| chat_id | Adding chat_id can maintain the conversation context. If it is not set, it will be automatically generated. The context is valid for the current conversation.| abd-dd |
| send_initial_messages | Send initial message to server | false |
| variables | Module variables, an object, will replace the `{{key}}` in the input box content of the module. Refer to this link: [Variables](https://doc.fastgpt.in/docs/development/openapi/chat/)| {} |

Configuration example:

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "llm_type": "dify",
        "llm_config": {
            "send_initial_messages": false,
            "api_base": "https://api.fastgpt.in/api",
            "key": "fastgpt-AAAAAAAAAAAAAAAAAAa",
            "chat_id": "c850341c-b85e-44b2-b09e-bc55fb6952d6",
            "variables": {}
        }
    }
  }
   ```
