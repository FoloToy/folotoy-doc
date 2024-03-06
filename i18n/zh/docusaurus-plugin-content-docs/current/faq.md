---
title: 常见问题
sidebar_label: 常见问题(FAQ)
---

## FoloToy 是如何工作的？

有三个关键步骤：

- **录音**：通过UDP接收玩具发送的实时录音数据，并调用 STT（声音转文本）API 将声音转换为文本。目前支持的 STT 选项包括：`openai-whisper`、`azure-stt`、`azure-whisper`、`dify-stt`、`aliyun-asr`。
- **思考**：在接收到上述文本后，立即调用 LLM（大型语言模型）API以流式方式获取 LLM 生成的句子。然后，调用 TTS（文本转语音）API 将句子转换为人类语音。目前支持的 LLM 选项包括：`openai`、 `azure-openai`、`gemini`、`qianfan`、`dify`或由 [One-Api](https://github.com/songquanpeng/one-api) 代理的 LLM，以及与 OpenAI 接口兼容的其他大模型服务，如 moonshot。
- **播放音频**：玩具将接收由FoloToy服务器生成的 TTS（文本转语音）音频文件流，并按顺序播放它们。目前支持的 TTS 选项包括： `openai-tts`、  `azure-tts`、  `elevenlabs`、  `aliyun-tts`、`dify-tts`、`edge-tts`(免费)。

## 连不上自己的服务器?

确认以下端口是否打开，如果主机服务商有防火墙或者访问规则的设置，这些端口也需要打开。

folotoy-server-self-hosting 默认的配置 docker-compose.yml 中，使用了 1883/tcp，8082/tcp，18083/tcp，8083/tcp，8085/udp 这几个端口：

* 1883/tcp : **必选**, 玩具通过 MQTT(1883/tcp) 连接服务器
* 8082/tcp : **必选**, 玩具下载开机语音流和对话语音流的 HTTP 服务端口
* 8085/udp : **必选**, 玩具实时上传语音流的 UDP 端口
* 18083/tcp: **可选**, EMQX 的 Web 管理后台的 HTTP 端口
* 8083/tcp: **可选**, EMQX 的 Websocket 端口

## 连接刷机 USB 线后，Chrome/Edge 浏览器看不到串口设备?

**请确认玩具是否已经开机，刷机需要在通电开机状态下进行，单独的电路板连接 USB 线是不行的**

1. 确保您的计算机已安装最新版本的 Chrome/Edge 浏览器。
2. 如果是 Windows 用户，请确保安装了[驱动](https://www.wch.cn/downloads/category/67.html?feature=USB%E8%BD%AC%E4%B8%B2%E5%8F%A3&product_name=CH340)。
3. 确保您使用的是玩具配套的数据线或者其他可以传输数据的数据线（有些数据线仅用于充电）。
4. 确保数据线连接良好，您可以在刷机选择设备的时候，停留一阵子观察设备是否会经常断开重连。
5. 在确保上述的操作正确后，浏览器仍然无法查看设备的话，可以通过以下方式查看系统的串口设备：
    - macOS：
        - 打开终端。
        - 输入命令 `ls /dev/cu.*` 查看所有串口设备。
    - Windows：
        - 打开设备管理器
        - 找到“端口(COM和LPT)”查看所有串口设备
5. 如果您找到了设备，但是浏览器无法识别到设备，您可以尝试使用 [esptool](./esp-tool.mdx) 方法刷写设备。

## 使用 Chrome/Edge 浏览器刷机的过程中出现刷机错误？

1. 确保您的计算机已安装最新版本的 Chrome/Edge 浏览器。
2. 确保您使用的是玩具配套的数据线或者其他可以传输数据的数据线（有些数据线仅用于充电）。
3. 确保数据线连接良好，您可以在刷机选择设备的时候，停留一阵子观察设备是否会经常断开重连。
4. 确保您在刷机的过程中，没有误碰设备导致设备断开。
5. 如果是Macos，请确保波特率选择 460800 或者更低。
6. 如果持续出现这个问题，您可以尝试使用 [esptool](./esp-tool.mdx) 方法刷写设备。

## 修改 `roles.json` 后如何生效?

在 folotoy-server-self-hosting 目录下执行以下命令重启服务。

**注意：** 重启服务之后，玩具也需要关机重开或者按一次任意角色切换键来重新连接服务器

```bash
sudo docker compose  restart folotoy
```

## 使用 azure openai 时会找不到模型？

azure-openai 的模型名称与 openai 的不同，azure-openai 使用的是部署名（Deployment Name），例如可以在部署 gpt-3.5-turbo 的时候设置部署名称是 gpt-35，那么在 roles.json 中一定要使用 gpt-35

```json
{
  "2": {
    "model": "gpt-35",
    "start_text": "你好，俺是东北兔，请问有什么俺可以帮助你的吗？",
    "prompt": "你是一个知识渊博，乐于助人的智能机器人,你的名字叫“东北兔”，你的任务是陪我聊天，请用简短的对话方式，用中文讲一段话，每次回答不超过50个字！",
    "max_message_count": 20,
    "temperature": 0.7,
    "max_tokens": 800,
    "top_p": 0.95,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "voice_name": "zh-CN-liaoning-XiaobeiNeural",
    "language": "zh",
    "stt_type": "openai-whisper"
  }
}
```


## 已经正确配置 key 和 base_uri, 但是 openai-whisper 会报错？

openai-whisper 的 language 可以不用设置，但是如果设置了就需要使用正确的 language 语言代码，语言代码与 azure-stt 不同，例如 openai-whisper 中文要使用 `zh`, 在 roles.json 文件中为每一个角色配置正确的语言代码，点击这里查看所有的语言代码: [OpenAI Whisper language 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

```json
{
  "2": {
    "model": "gpt-3.5-turbo",
    "start_text": "你好，俺是东北兔，请问有什么俺可以帮助你的吗？",
    "prompt": "你是一个知识渊博，乐于助人的智能机器人,你的名字叫“东北兔”，你的任务是陪我聊天，请用简短的对话方式，用中文讲一段话，每次回答不超过50个字！",
    "max_message_count": 20,
    "temperature": 0.7,
    "max_tokens": 800,
    "top_p": 0.95,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "voice_name": "zh-CN-liaoning-XiaobeiNeural",
    "language": "zh",
    "stt_type": "openai-whisper"
  }
}
```
如果使用的 `v23.45.1.1` 以上镜像，也可以这样配置

```json
{
  "2": {
    "start_text": "你好，俺是东北兔，请问有什么俺可以帮助你的吗？",
    "prompt": "你是一个知识渊博，乐于助人的智能机器人,你的名字叫“东北兔”，你的任务是陪我聊天，请用简短的对话方式，用中文讲一段话，每次回答不超过50个字！",
    "max_message_count": 20,
    "stt_type": "openai-whisper",
    "stt_config": {
        "language": "zh"
    },
    "llm_config": {
        "model": "gpt-3.5-turbo",
        "temperature": 0.7,
        "max_tokens": 800,
        "top_p": 0.95,
        "frequency_penalty": 0,
        "presence_penalty": 0
    },
    "tts_config": {
        "voice_name": "zh-CN-liaoning-XiaobeiNeural"
    }
  }
}
```

## 已经正确配置 key 和 region，但是 azure-stt 会报错？

azure-stt 需要使用正确的 language 语言代码，语言代码与 openai-whipser 不同，例如 azure-stt 中文要使用 `zh-CN`, 在 roles.json 文件中为每一个角色配置正确的语言代码，点击这里查看所有的语言代码: [Azure STT language BCP-47 codes](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=stt)

```json
{
  "2": {
    "model": "gpt-3.5-turbo",
    "start_text": "你好，俺是东北兔，请问有什么俺可以帮助你的吗？",
    "prompt": "你是一个知识渊博，乐于助人的智能机器人,你的名字叫“东北兔”，你的任务是陪我聊天，请用简短的对话方式，用中文讲一段话，每次回答不超过50个字！",
    "max_message_count": 20,
    "temperature": 0.7,
    "max_tokens": 800,
    "top_p": 0.95,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "voice_name": "zh-CN-liaoning-XiaobeiNeural",
    "language": "zh-CN",
    "stt_type": "azure-stt"
  }
}
```
如果使用的 `v23.45.1.1` 以上镜像，也可以这样配置

```json
{
  "2": {
    "start_text": "你好，俺是东北兔，请问有什么俺可以帮助你的吗？",
    "prompt": "你是一个知识渊博，乐于助人的智能机器人,你的名字叫“东北兔”，你的任务是陪我聊天，请用简短的对话方式，用中文讲一段话，每次回答不超过50个字！",
    "max_message_count": 20,
    "stt_type": "azure-stt",
    "stt_config": {
        "language": "zh-CN"
    },
    "llm_config": {
        "model": "gpt-3.5-turbo",
        "temperature": 0.7,
        "max_tokens": 800,
        "top_p": 0.95,
        "frequency_penalty": 0,
        "presence_penalty": 0
    },
    "tts_config": {
        "voice_name": "zh-CN-liaoning-XiaobeiNeural"
    }
  }
}
```

## 对话不支持上下文?

修改 `roles.json` 里面 `max_message_count` 这个参数为一个大于 0 的数值，比如改成 `10`，这样表示上下文支持 10 次对话

在修改好 `roles.json` 之后, 在 folotoy-server-self-hosting 目录下执行以下重启服务才会生效

```bash
sudo docker compose restart folotoy
```


## 几次对话之后玩具不再回复?

每一个模型都有自己的上下文Token大小的限制，如果超过限制，可以再按一次当前的角色按钮来清空上下文。也可以通过调整 `max_message_count` 和 `max_tokens` 的值来大概限制上下文大小。

修改 `roles.json` 里面 `max_message_count` 这个参数为一个大于 0 的数值，比如改成 `10`，这样表示上下文支持 10 次对话，在修改 `max_tokens` 为 `200`，经过 10 轮对话，大概的上下文大小为

```
10*200*2=4000
```

这样修改之后，超过 10 轮对话，系统只会保留最近的 10 轮对话。

在修改好 `roles.json` 之后, 在 folotoy-server-self-hosting 目录下执行以下重启服务才会生效

```bash
sudo docker compose restart folotoy
```

## 语音对话间隔时间长或者出现丢失？

可以通过 AWS CloudFront CDN 加速来改善这种情况，最好的方式是换网速快的主机，如果 ping 值 200ms 以下，可以不用配置 CDN

配置 CDN 视频教程：

* [YouTube](https://www.youtube.com/watch?v=frfVUooWYIM)
* [Bilibili](https://www.bilibili.com/video/BV17G411m7rn/?spm_id_from=333.999.0.0&vd_source=c136ccc9c1aa8d8b8723abf57c945bf5)

## EMQX 后台看到未知客户端登录?

需要对 EMQX 做一些安全配置，视频教程

* [YouTube](https://www.youtube.com/watch?v=3yW5260OTwY)
* [Bilibili](https://www.bilibili.com/video/BV1S94y1b74y)

## 如何查看服务器日志?

在部署目录下执行以下命令：

```bash
sudo docker compose logs -f
```

日志文件所在位置：`/var/lib/docker/containers/{container-id}/{container-id}-json.log` 

执行命令查看 container-id 前 12 个字符

```bash
sudo docker ps
```

<img src="https://github.com/FoloToy/folotoy-server-self-hosting/assets/1455685/6b75dab4-8f71-411f-a266-0ad43824df82" />

## 查看服务器日志已经成功推送了消息，但是设备不播放？

1. 将设备连接到电脑，打开[网页工具](https://tool.folotoy.com/)查看设备日志，具体操作方法[点击](./web-tool.mdx)查看。
2. 查看设备是否有收到推送的消息。
3. 查看推送的消息是否在设备超时（默认超时为30S）后才收到，超时后收到的音频不会再播放。您可以通过 [AT 指令](./at-command.mdx#修改设备等待服务器回复的超时时长)修改超时时长。
4. 如果设备没有收到，请确保设备的 MQTT 服务器地址和端口配置正确：
    - 您可以通过重新配网的方式来修改 MQTT 服务器地址和端口。进入配网模式：[火火兔G6/G6s](./toy-pcb-replacement/alilo-g6.md#wi-fi配置)， [火火兔F6/F6s](./toy-pcb-replacement/alilo-f6.md#wi-fi配置)， [米兔C1](./toy-pcb-replacement/mitu-c1.md#wi-fi配置)。或者通过[AT 指令](./at-command.mdx#重置-wifi-并进入配网模式)进入配网模式
    - 您可以通过[AT 指令](./at-command.mdx#修改配置中的-mqtt)来重新配置 MQTT Broker 和 Port

## 如何修改服务程序日志级别为 DEBUG 或者 INFO？

修改 `docker-compose.yml` 配置，修改之后需要参考前面步骤重启容器：

把
```
LOG_LEVEL: INFO
```
改为

```
LOG_LEVEL: DEBUG
```

## 为什么我的 Docker 时间戳日志与我的机器不同？

Docker容器的时区默认为UTC。要设置容器的时区，请在您的YML文件中使用`TZ`环境变量。更多信息请参阅[环境变量](https://docs.folotoy.com/docs/configuration/environment_variables)。

## 设备如何进入配网模式？

首次收到设备或者刷机后，设备都会自动进入配网模式

手动进入配网模式：[火火兔G6/G6s](./toy-pcb-replacement/alilo-g6.md#wi-fi配置)， [火火兔F6/F6s](./toy-pcb-replacement/alilo-f6.md#wi-fi配置)， [米兔C1](./toy-pcb-replacement/mitu-c1.md#wi-fi配置)。或者通过[AT 指令](./at-command.mdx#重置-wifi-并进入配网模式)进入配网模式

## 各种灯的颜色代表了什么意思？

每种颜色都代表设备处于不同的状态

| 颜色 | 设备状态 |
|  ----  | ----  |
| 白色常亮 | 待机状态 |
| 绿色常亮 | 正在录音 |
| 粉色常亮 | 连续对话的模式下，检测到人声 |
| 红色常亮| 文件系统挂载失败 / wifi初始化失败 |
| 绿色闪烁 | 等待服务器返回音频 |
| 蓝色闪烁 | 处于配网模式 |
| 彩虹渐变 | 开机初始化 / 正在播放音频 |
| 红色闪烁 | 低电量 |
| 黄灯闪烁 | 无法连接服务器 |


