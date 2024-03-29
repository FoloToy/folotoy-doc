---
title: Moonshot Configuration
sidebar_label: Moonshot
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| api_base    | api base url  |  https://api.moonshot.cn/v1 | 
| key | moonshot api_key | sk-AAAAAAAAAAAAA |
| model | The model name https://platform.moonshot.cn/docs/pricing |  |
| max_tokens | max output token count | 400 |
| temperature | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both. | 0.7 |

配置示例

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心",
        "llm_type": "moonshot",
        "llm_config": {
            "api_base": "https://api.moonshot.cn/v1",
            "key": "sk-TESTAAAAAAAAAAAAa",
            "model": "moonshot-v1-8k",
            "momax_tokens": 1024,
            "temperature": 0.7
        }
    }
  }
   ```
