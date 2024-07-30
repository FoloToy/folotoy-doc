---
title: AWS Bedrock Configuration
sidebar_label: AWS Bedrock
---


Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
| region_name    | region name  |  ap-northeast-1 | 
| aws_access_key_id | aws access key id | HS21qAAAAAAAAAAA |
| aws_secret_access_key | aws access secret key | HS21qAAAAAAAAAAA |
| model | https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-claude.html | anthropic.claude-v2:1 |
| max_tokens | max output token count | 1024 |
| temperature |  What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.We generally recommend altering this or top_p but not both. | 0.7 |

Configuration example:

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
            "model": "anthropic.claude-v2:1",
            "max_tokens": 1024,
            "temperature": 0.7
        }
    }
  }
   ```
