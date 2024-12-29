---
title: Xunfei Spark Desk Configuration
sidebar_label: Xunfei Spark Desk
---

Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
| key | api password | xQHS21qAAAAAAAAAAA |
| api_base | api base | https://spark-api-open.xf-yun.com/v1 |
| model | model | lite |
| max_tokens | max output token count | 1024 |
| temperature |  What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both. | 0.7 |

Configuration example:

   ```yml title="docker-compose.yml"
SPARK_DESK_KEY: WTjhmxxxxxxxxxxxxxxxxxxxZwNAg
SPARK_MODEL: lite
SPARK_DESK_TEMPERATURE: 0.7
SPARK_DESK_MAX_TOKENS: 4096
   ```

OR

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心",
        "llm_type": "spack-desk",
        "llm_config": {
            "key": "10610b308c7f71f",
            "model": "lite",
            "max_tokens": 1024,
            "temperature": 0.7
        }
    }
  }
   ```