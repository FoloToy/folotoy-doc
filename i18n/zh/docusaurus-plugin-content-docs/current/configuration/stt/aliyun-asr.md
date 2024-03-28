---
title: 阿里云 ASR 配置
sidebar_label: 阿里云 ASR
---

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
|  access_key_id    | 获取请参考：[Access Key ID](https://help.aliyun.com/document_detail/450514.html)     | 无 | 
|  access_key_secret    |  获取请参考：[Access Key Secret](https://help.aliyun.com/document_detail/450514.html)    | 无 | 
|  region_id    |  区域代码    |  cn-shanghai | 
|  app_key    |  获取请参考：[App Key](https://help.aliyun.com/document_detail/72214.html)  | 无  | 
配置示例

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