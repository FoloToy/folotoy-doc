---
title: 阿里云 Dashscope 配置
sidebar_label: 阿里云 Dashscope
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| api_base    | api base 地址  |  https://api.minimax.chat/v1/text/chatcompletion_v2 | 
| key | api_key | xQHS21qAAAAAAAAAAA |
| model | 大模型名称 |  abab5.5-chat |
| max_tokens | 最大输入 token | 1024 |
| temperature | 使用采样温度 (sampling temperature) 来控制输出的随机性。该值介于 0 到 2 之间。较高的温度 (例如 0.8) 会使输出更加随机，生成意想不到的结果。较低的温度 (例如 0.2) 会使输出更加集中，更贴近于给定的输入内容。我们通常建议您调整采样温度或 top_p 参数之一，但不要同时调整两者 | 0.7 |
| top_p | 核采样 (top_p) 是另一种替代采样温度 (sampling temperature) 的方法。与采样温度不同，核采样关注的是概率质量累积位于顶部的部分结果 (token)。具体来说，top_p 代表了累积概率的阈值。例如，top_p 为 0.1 表示模型仅考虑占总概率质量前 10% 的结果 | 0.9 |
| enable_search | 开启联网搜索 | true |

配置示例

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