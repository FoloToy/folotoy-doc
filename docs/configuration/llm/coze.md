---
title: Coze
sidebar_label: Coze
---

## Coze

https://coze.com/open/docs/coze_api_overview

## 可配置参数列表

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
| api_base    | api base url  |  https://api.coze.cn/open_api/v2 | 
| personal_access_token | personal access token | pat-AAAAAAAAAAAAA |
| bot_id | bot id |11111112222222221 |
| custom_variables | custom_variables | {} |

## 配置示例

   ```yml title="roles.json"
    {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "llm_type": "coze",
        "llm_config": {
          "personal_access_token": "aaaaaaaaaaa",
          "bot_id": "xxxxxx",
          "custom_variables": {},
          "api_base": "https://api.coze.cn/open_api/v2"
        }
    }
  }
   ```

## 环境变量

```yml
COZE_API_BASE: https://api.coze.com/open_api/v2
COZE_PERSONAL_ACCESS_TOKEN: pat_Vl3CaNcFgf67wx
COZE_BOT_ID: 73568618000000060037
```
