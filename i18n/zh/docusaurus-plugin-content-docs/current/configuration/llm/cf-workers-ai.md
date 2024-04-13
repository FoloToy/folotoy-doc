---
title: Cloudflare Workers AI 大模型
sidebar_label: Cloudflare Workers AI 大模型
---

## 地址

https://developers.cloudflare.com/workers-ai/models/

## 可配置参数

| 参数名字 | 描述 | 默认值 |
| :-- | :-- | :-- |
| account_id | account id | 访问 https://dash.cloudflare.com/ 获取 |
| api_token | API token | 访问 https://dash.cloudflare.com/profile/api-tokens 获取 token |
| model_id | model id, 注意带上 @ | @cf/openai/whisper  |

## 配置示例:

   ```yml title="roles.json"
 {
        "start_text": "哈哈哈哈哈，我是一个超快可爱的大小兔，请问有什么我可以帮助你的吗？",
        "prompt": "你是一个知识渊博，乐于助人的智能机器人,你的名字叫“小兔”，你的任务是陪我聊天",
        "max_message_count": 5,
        "llm_type": "cf-workers-ai",
        "llm_config": {
          "account_id": "3ccbf9e8xxxxxxxxxxxx4576285"
          "api_token": "RT0Pxxxxxxx"
          "model_id": "@cf/openchat/openchat-3.5-0106"
        }
      }
   ```

## 环境变量

```yml
      CF_WORKERS_AI_ACCOUNT_ID: 3ccbf9e8xxxxxxxxxxxx4576285
      CF_WORKERS_AI_API_TOKEN: RT0Pxxxxxxx
      CF_WORKERS_AI_MODEL_ID: "@cf/openchat/openchat-3.5-0106"
```