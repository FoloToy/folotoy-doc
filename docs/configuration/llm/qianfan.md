---
title: Baidu Qianfan Configuration
sidebar_label: Baidu Qianfan
---

Support for large models in Baidu Qianfan's large model platform, click here to view the support list: [Model List](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/Nlks5zkzu#%E5%AF%B9%E8%AF%9Dchat), including but not limited to the following large models:

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


Configurable parameters:

| Parameter Name | Parameter Description | Default Value |
| :--     | :--     |  :--     |
| client_id    | Get [API Key](https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application) after creating  |  13rBTgx*****************e03XE | 
| secret | Get [Secret Key](https://console.bce.baidu.com/qianfan/ais/console/applicationConsole/application) after creating   |  zYxtMI***************QLerLgQ2W5e | 
| model | [Model List](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/Nlks5zkzu#%E5%AF%B9%E8%AF%9Dchat) | yi_34b_chat |
| extra_parameters | Advanced parameters for third-party large model inference vary depending on the third-party large model vendor.| {} |

**Caution** 

The "model" field should be filled with the model code corresponding to the large model, for example, `ERNIE-Bot 4.0`. By opening its [API documentation](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/clntwmv7t), you can see that the request URL is https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions_pro. Therefore, its model code is `completions_pro`, which means the URL follows this pattern: https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/{model}. So, the model code is the field defined as {model}.

Configuration example:

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
