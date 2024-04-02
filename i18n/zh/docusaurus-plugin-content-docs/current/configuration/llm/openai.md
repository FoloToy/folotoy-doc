---
title: OpenAI Configuration
sidebar_label: OpenAI
---

## OpenAI

https://platform.openai.com

## 可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
|  api_base    | api base 地址  |  https://api.openai.com/v1 | 
| key | openai api_key | sk-AAAAAAAAAAAAA |
| model | Azure OpenAI 的模型名称与 OpenAI 不同。Azure OpenAI 使用部署名称，例如，在部署 gpt-3.5-turbo 模型时，可以将部署名称设置为 gpt-35 | 无 |
| max_tokens | 最大输入 token，获取请参考：[Max Tokens](https://platform.openai.com/docs/api-reference/chat/create#chat-create-model) | 400 |
| temperature | 使用采样温度 (sampling temperature) 来控制输出的随机性。该值介于 0 到 2 之间。较高的温度 (例如 0.8) 会使输出更加随机，生成意想不到的结果。较低的温度 (例如 0.2) 会使输出更加集中，更贴近于给定的输入内容。我们通常建议您调整采样温度或 top_p 参数之一，但不要同时调整两者 | 0.7 |
| top_p | 核采样 (top_p) 是另一种替代采样温度 (sampling temperature) 的方法。与采样温度不同，核采样关注的是概率质量累积位于顶部的部分结果 (token)。具体来说，top_p 代表了累积概率的阈值。例如，top_p 为 0.1 表示模型仅考虑占总概率质量前 10% 的结果| 0.95 |
| frequency_penalty | - | 0 |
| presence_penalty | 这是数值范围为 -2.0 到 2.0 的数字，用于控制文本生成过程中的新颖性。数值越高，模型就越倾向于讨论新主题，生成的句子也会更加新颖和独特 | 0 |

## 配置示例

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "llm_type": "openai",
        "llm_config": {
            "model": "gpt-3.5-turbo",
            "temperature": 0.7,
            "max_tokens": 800,
            "top_p": 0.95,
            "frequency_penalty": 0,
            "presence_penalty": 0
        }
    }
  }
   ```
