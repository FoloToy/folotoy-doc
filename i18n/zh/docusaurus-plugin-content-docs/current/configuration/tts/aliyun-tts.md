---
title: 阿里云文本转语音配置
sidebar_label: 阿里云 TTS
---
:::caution
支持阿里云平台官方模型和自己训练的个性化模型 
:::

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
|  access_key_id    | 获取请参考：[Access Key Id](https://help.aliyun.com/document_detail/450514.html)    | | 
|  access_key_secret    |  获取请参考：[Access Key Secret](https://help.aliyun.com/document_detail/450514.html)    |  | 
|  region_id    |  区域代码    |  cn-shanghai | 
|  app_key    |  获取请参考：[App Key](https://help.aliyun.com/document_detail/72214.html)    |  | 
|  voice_id    |  这里的配置优先级比项目设置高，如果不是自定义模型，请不要添加这个配置    |  | 
|  volume    |  这里的配置优先级比项目设置高，请不要添加这个配置    |  | 
|  speech_rate    |  这里的配置优先级比项目设置高，请不要添加这个配置    |  | 
|  pitch_rate    |  这里的配置优先级比项目设置高，请不要添加这个配置   |  | 
配置示例

   ```yml title="roles.json"
   {
    "1": {  
        "start_text": "你好，我是小兔兔，请问有什么我可以帮助你的吗？",
        "prompt": "你扮演一个孩子的小伙伴，名字叫小兔兔，性格和善，说话活泼可爱，对孩子充满爱心，经常赞赏和鼓励孩子，用5岁孩子容易理解语言提供有趣和创新的回答，每次回复根据聊天主题询问她的看法以激发她的思考和好奇心，现在她来到了你身边问了第一个问题:[你是谁]",
        "tts_type": "aliyun-tts",
        "tts_config": {
          "app_key": "Lxxxxxxxx904N7XJN",
          "access_key_id": "xxxx",
          "access_key_secret": "xxxx"
        }
    }
  }
   ```