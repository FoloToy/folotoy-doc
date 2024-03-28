---
title: AWS Bedrock 配置
sidebar_label: AWS Bedrock
---


可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| region_name    | 区域名称  |  ap-northeast-1 | 
| aws_access_key_id | aws access key id | HS21qAAAAAAAAAAA |
| aws_secret_access_key | aws access secret key | HS21qAAAAAAAAAAA |
| model | 大模型名称，获取请参考：[model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-claude.html) | anthropic.claude-v2.1 |
| max_tokens | 最大输入 token| 1024 |
| temperature | | 0.7 |

配置示例

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心",
        "llm_type": "aws-bedrock",
        "llm_config": {
            "region_name": "ap-northeast-1",
            "aws_access_key_id": "TAAAAAAAAAAAAa",
            "aws_secret_access_key": "TAAAAAAAAAAAAa",
            "model": "anthropic.claude-v2.1",
            "max_tokens": 1024,
            "temperature": 0.7
        }
    }
  }
   ```