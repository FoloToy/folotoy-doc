---
title: Volcengine ASR Settings
sidebar_label: Volcengine ASR
---

## Volcengine

https://www.volcengine.com/docs/6561/80816

## Parameters

| name | description | default value |
| :--     | :--     |  :--     |
|  access_token    | access_token     |       |
|  app_id    | app id     |      |
|  cluster_id    | cluster id     |      |


## Example

   ```yml title="roles.json"
    {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "stt_type": "volcengine-asr",
        "stt_config": {
          "app_id": "4556821315",
          "cluster_id": "volcengine_input_common",
          "access_token": "U5joq1ow-Goyxxxxxxxxxxxxxx"
        }
    }
  }
   ```

## Environment Variables

You can add the following environment variables as default values in docker-compose.yml.

```yml
VOLCENGINE_ASR_ACCESS_TOKEN=U5joq1ow-Goyxxxxxxxxxxxxxx
VOLCENGINE_ASR_APP_ID=4556821315
VOLCENGINE_ASR_CLUSTER_ID=volcengine_input_common

```