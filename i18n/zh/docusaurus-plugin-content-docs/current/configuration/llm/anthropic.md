---
title: Anthropic 配置
sidebar_label: Anthropic
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| api_base    | api base 地址  |  https://api.anthropic.com | 
| key | api_key | sk-ant-api03-Vq-W2wQHS21qAAAAAAAAAAA |
| model | 大模型名称， 获取请参考：[Model](https://www.anthropic.com/api) |  |
| max_tokens | 最大输入 token | 1024 |
| temperature | 使用采样温度 (sampling temperature) 来控制输出的随机性。该值介于 0 到 2 之间。较高的温度 (例如 0.8) 会使输出更加随机，生成意想不到的结果。较低的温度 (例如 0.2) 会使输出更加集中，更贴近于给定的输入内容 | 0.7 |

配置示例

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心",
        "llm_type": "anthropic",
        "llm_config": {
            "api_base": "https://api.anthropic.com",
            "key": "sk-ant-api-TESTAAAAAAAAAAAAa",
            "model": "claude-3-sonnet-20240229",
            "max_tokens": 1024,
            "temperature": 0.7
        }
    }
  }
   ```
