---
title: Gemini Configuration
sidebar_label: Gemini
---

Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
| api_base    | api base url  |  https://generativelanguage.googleapis.com | 
| api_version | api version  |  v1beta | 
| key | gemini api_key | AIzaSyDd----------gDksADvDHk |
| model | Gemini models: `models/gemini-pro` | models/gemini-pro |
| max_tokens | max output token limit, a token is equivalent to about 4 characters. 100 tokens are about 60-80 English words. | 400 |
| temperature | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both. For more information, refer to: [Temperature](https://ai.google.dev/models/gemini#model_metadata) | 0.7 |
| top_p |An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. For more information, refer to: [Top_P](https://ai.google.dev/models/gemini#model_metadata) | 1 |
| top_k | For more information, refer to: [Top_K](https://ai.google.dev/models/gemini#model_metadata) | 1 |
| safety_settings | For more information, refer to: [Safety Settings](https://ai.google.dev/docs/safety_setting_gemini) | [] |

Configuration example:

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
