---
title: 火山方舟大模型平台
sidebar_label: 云雀（火山方舟）
---

## 火山引擎

https://www.volcengine.com/docs/82379/1133387

## 可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
|  host    | host     |    maas-api.ml-platform-cn-beijing.volces.com   |
|  region    | region     |   cn-beijing   |
|  api_version | api version     |   v2   |
|  access_key    | access key     |      |
|  secret_key | secret key   |    |
|  model    |   |  skylark-chat     |
|  max_tokens    |    | 1000     |
|  temperature    |    |  0.7     |
|  top_p    |  top_p  |  0.9     |
|  top_k    | top_k  |   0    |


## 配置示例

   ```yml title="roles.json"
    {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "llm_type": "volcengine",
        "llm_config": {
          "access_key": "aaaaaaaaaaa",
          "secret_key": "xxxxxx",
          "model": "skylark-chat"
        }
    }
  }
   ```

## 环境变量

v3 支持豆包大模型

```yml
VOLCENGINE_API_VERSION: v3
VOLCENGINE_MODEL: ep-20240522143915-k7mb7
VOLCENGINE_ACCESS_KEY: AKLTNDRkNzBmYxxxxxxxxxxxxxxxxxxx
VOLCENGINE_SECRET_KEY: "Tm1JMFkyUTFaRE5qTm00000000000000000000000000000"
```

v2 支持原有的大模型

```yml
VOLCENGINE_API_VERSION: v2
VOLCENGINE_MODEL: skylark-chat
VOLCENGINE_HOST: maas-api.ml-platform-cn-beijing.volces.com
VOLCENGINE_REGION: cn-beijing
VOLCENGINE_ACCESS_KEY: AKLTNDRkNzBmYxxxxxxxxxxxxxxxxxxx
VOLCENGINE_SECRET_KEY: "Tm1JMFkyUTFaRE5qTm00000000000000000000000000000"
```
