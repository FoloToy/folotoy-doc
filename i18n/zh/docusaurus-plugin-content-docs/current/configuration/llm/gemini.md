---
title: Gemini 配置
sidebar_label: Gemini
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| api_base    | api base url  |  https://generativelanguage.googleapis.com | 
| api_version | api version  |  v1beta | 
| key | gemini api_key | AIzaSyDd----------gDksADvDHk |
| model | Gemini models: `models/gemini-pro` | models/gemini-pro |
| max_tokens | 最大输出词元限制：一个词元相当于约 4 个字符。100 个词元相当于约 60-80 个英语单词。 | 400 |
| temperature | 使用采样温度 (sampling temperature) 来控制输出的随机性。该值介于 0 到 2 之间。较高的温度 (例如 0.8) 会使输出更加随机，生成意想不到的结果。较低的温度 (例如 0.2) 会使输出更加集中，更贴近于给定的输入内容。我们通常建议您调整采样温度或 top_p 参数之一，但不要同时调整两者。[Temperature](https://ai.google.dev/models/gemini#model_metadata) | 0.7 |
| top_p | 核采样 (top_p) 是另一种替代采样温度 (sampling temperature) 的方法。与采样温度不同，核采样关注的是概率质量累积位于顶部的部分结果 (token)。具体来说，top_p 代表了累积概率的阈值。例如，top_p 为 0.1 表示模型仅考虑占总概率质量前 10% 的结果。获取请参考： [Top_P](https://ai.google.dev/models/gemini#model_metadata) | 1 |
| top_k | 获取请参考： [Top_K](https://ai.google.dev/models/gemini#model_metadata) | 1 |
| safety_settings | 填写 gemini 文档中定义的格式。获取请参考： [Safety Settings](https://ai.google.dev/docs/safety_setting_gemini )| [] |

配置示例

   ```yml title="roles.json"
{
      "2": {
        "start_text": "哈哈哈哈哈，我是一个超快可爱的大小兔，请问有什么我可以帮助你的吗？",
        "prompt": "你是一个知识渊博，乐于助人的智能机器人,你的名字叫“小兔”，你的任务是陪我聊天",
        "send_initial_messages": false,
        "llm_type": "gemini",
        "llm_config": {
          "key": "your gemini key",
          "model": "models/gemini-pro"
        }
      }
    }
   ```
