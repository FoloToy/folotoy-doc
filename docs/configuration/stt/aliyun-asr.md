---
title: Aliyun ASR Configuration
sidebar_label: Aliyun ASR
---


Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
|  access_key_id    |  For more information, refer to: [Access Key Id](https://help.aliyun.com/document_detail/450514.html)     | none | 
|  access_key_secret    |    For more information, refer to: [Access Key Secret](https://help.aliyun.com/document_detail/450514.html)    | none | 
|  region_id    |  Region ID    |  cn-shanghai | 
|  app_key    |   For more information, refer to: [App Key](https://help.aliyun.com/document_detail/72214.html)    | none | 

Configuration example:



   ```yml title="roles.json"
   {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "stt_type": "aliyun-asr",
        "stt_config": {
          "app_key": "7xxxxxxxx904N7CNG"
        }
    }
  }
   ```