---
title: 百度千帆配置
sidebar_label: 百度千帆
---

支持百度千帆大模型平台中的大模型，点击这里查看支持列表：[对话模型列表](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/Nlks5zkzu#%E5%AF%B9%E8%AF%9Dchat)，包括不限于以下大模型：

- ERNIE-Bot 4.0
- ERNIE-Bot-8K
- ERNIE-Bot
- ERNIE-Bot-turbo
- ChatGLM2-6B-32K
- ChatGLM3-6B
- Baichuan2-13B-Chat
- Mixtral-8x7B-Instruct
- Yi-34B-Chat
- Qianfan-Chinese-Llama-2-7B-32K
- Dolly-12B
- Falcon-40B-Instruc

可配置参数列表

| 参数名称 | 参数说明 | 默认值 |
| :--     | :--     |  :--     |
| client_id    | 创建应用后获取API Key，获取请参考：[Client Id](https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application)  |  13rBTgx*****************e03XE | 
| secret | 创建应用后获取Secret Key，获取请参考：[Secret](https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application)   |  zYxtMI***************QLerLgQ2W5e | 
| model | 大模型名称，获取请参考：[对话模型列表](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/Nlks5zkzu#%E5%AF%B9%E8%AF%9Dchat) | yi_34b_chat |
| extra_parameters | 第三方大模型推理高级参数，依据第三方大模型厂商不同而变化 | {} |

**注意** 

model 字段的填写填写大模型对应的模型代码，例如 `ERNIE-Bot 4.0`，打开它的[API文档](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/clntwmv7t), 可以看到请求的 URL 是 https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro ，
那么它的模型代码是 `completions_pro`，也就是说 URL 是这样模式  https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/{model} ，那么模型代码就是 {model} 定义的字段。

配置示例

   ```yml title="roles.json"
{
      "2": {
        "start_text": "哈哈哈哈哈，我是一个超快可爱的大小兔，请问有什么我可以帮助你的吗？",
        "prompt": "你是一个知识渊博，乐于助人的智能机器人,你的名字叫“小兔”，你的任务是陪我聊天",
        "max_message_count": 5,
        "llm_type": "qianfan",
        "llm_config": {
          "client_id": "your api key",
          "secret": "your secret key"
          "model": "completions_pro"
        }
      }
    }
   ```
