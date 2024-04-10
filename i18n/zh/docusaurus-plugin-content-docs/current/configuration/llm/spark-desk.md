---
title: 讯飞 Spark Desk Configuration
sidebar_label: 讯飞星火
---

## 讯飞星火

https://console.xfyun.cn/

## 可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| api_key | api_key | xQHS21qAAAAAAAAAAA |
| api_secret | api_secret | xQHS21qAAAAAAAAAAA |
| app_id | app_id | d2c169c5 |
| api_version | api 版本: v1.5,v2.0,v3.0,v3.5 | v2.0 |
| max_tokens | 最大输出token| 1024 |
| temperature | 核采样 (top_p) 是另一种替代采样温度 (sampling temperature) 的方法。与采样温度不同，核采样关注的是概率质量累积位于顶部的部分结果 (token)。具体来说，top_p 代表了累积概率的阈值。例如，top_p 为 0.1 表示模型仅考虑占总概率质量前 10% 的结果 | 0.7 |
| top_p | 这是数值范围为 -2.0 到 2.0 的数字，用于控制文本生成过程中的新颖性。数值越高，模型就越倾向于讨论新主题，生成的句子也会更加新颖和独特 | 0.9 |

## 配置示例

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心",
        "llm_type": "spack-desk",
        "llm_config": {
            "api_key": "10610b308c7f71f",
            "api_version": "v2.0",
            "app_id": "d2c169c5",
            "api_secret": "N2I5OGY1Z",
            "max_tokens": 1024,
            "temperature": 0.7
        }
    }
  }
   ```