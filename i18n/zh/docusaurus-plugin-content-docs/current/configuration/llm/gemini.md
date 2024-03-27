---
title: Gemini Configuration
sidebar_label: Gemini
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| api_base    | api base url  |  https://generativelanguage.googleapis.com | 
| api_version | api version  |  v1beta | 
| key | gemini api_key | AIzaSyDd----------gDksADvDHk |
| model | Gemini models: `models/gemini-pro` | models/gemini-pro |
| max_tokens | max output token limit, a token is equivalent to about 4 characters. 100 tokens are about 60-80 English words. | 400 |
| temperature | https://ai.google.dev/models/gemini#model_metadata. | 0.7 |
| top_p | https://ai.google.dev/models/gemini#model_metadata | 1 |
| top_k | https://ai.google.dev/models/gemini#model_metadata | 1 |
| safety_settings | 填写 gemini 文档中定义的格式，https://ai.google.dev/docs/safety_setting_gemini | [] |

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
