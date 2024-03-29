---
title: Dify 配置
sidebar_label: Dify
---

dify 可以自行部署 https://github.com/langgenius/dify 或者直接使用 cloud 版本 https://cloud.dify.ai/

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
|  api_base    | api base url  |  https://api.dify.ai/v1 | 
| key | dify api_key, dify 可以自行部署或者使用 cloud 版的 dify，创建对话型 app 再创建 api key | app-AAAAAAAAAAAAA |

配置示例

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "llm_type": "dify",
        "llm_config": {
            "api_base": "http://192.168.52.164/v1",
            "key": "app-AAAAAAAAAAAAAAAAAAa"
        }
    }
  }
   ```
