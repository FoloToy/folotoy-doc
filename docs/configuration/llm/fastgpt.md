---
title: FastGPT Configuration
sidebar_label: FastGPT
---

FastGPT 文档说明：https://fastgpt.in/en

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| api_base    | api base url  |  https://api.fastgpt.in/api | 
| key | fastgpt 的 app key，不是 account key | fastgpt-AAAAAAAAAAAAA |
| chat_id | 添加 chat_id 之后可以保持会话上下文，如果不设置，会自动生成，上下文这是当前对话有效 | abd-dd |
| variables | 模块变量，一个对象，会替换模块中，输入框内容里的{{key}}, 参考这里：https://doc.fastgpt.in/docs/development/openapi/chat/ | {} |

配置示例

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "llm_type": "dify",
        "llm_config": {
            "api_base": "https://api.fastgpt.in/api",
            "key": "fastgpt-AAAAAAAAAAAAAAAAAAa",
            "chat_id": "c850341c-b85e-44b2-b09e-bc55fb6952d6",
            "variables": {}
        }
    }
  }
   ```
