---
title: Lingyiwanwu Configuration
sidebar_label: Lingyiwanwu
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| api_base    | api base url  |   | 
| key | api_key | sk-W2wQHS21qAAAAAAAAAAA |
| model | https://platform.lingyiwanwu.com/docs | yi-34b-chat-0205 |
| max_tokens | max output token count | 1024 |
| temperature | | 0.7 |

配置示例

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心",
        "llm_type": "lingyiwanwu",
        "llm_config": {
            "key": "sk-ant-api-TESTAAAAAAAAAAAAa",
            "model": "yi-34b-chat-0205",
            "max_tokens": 1024,
            "temperature": 0.7
        }
    }
  }
   ```