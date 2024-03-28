---
title: Ollama 配置
sidebar_label: Ollama
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| api_base    | api base 地址  |  http://localhost:11434 | 
| model | 大模型名称, 例如： gemma:2b， 获取请参考：[Model](https://ollama.com/library) |  |

配置示例

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心",
        "llm_type": "ollama",
        "llm_config": {
            "api_base": "http://localhost:11434",
            "model": "gemma:7b"
        }
    }
  }
   ```