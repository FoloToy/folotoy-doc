---
title: MQTT 集成
sidebar_label: MQTT
---

folotoy 服务器内的 MQTT 功能允许将有用的值发布到 MQTT 代理或订阅主题以修改 folotoy 服务器的配置。这对于其他自动化平台从 folotoy 服务器消费数据或进行交流非常有用。

## MQTT Topics

以下是可用的主题和权限描述。

| Topic                                                  | Permissions | Description              | Payload                                                                           |
|--------------------------------------------------------| --------- |----------------------|---------------------------------------------------------------------------------------|
| `/sys/folotoy/$sn/thing/event/post`                  | Subscribe | 发送玩具的事件消息，identifier 包括: voice_generated，recording_transcribed         | {"msgId": 174, "identifier": "voice_generated", "inputParams": {"recordingId": 31, "order": 4, "voiceText": " What's your first question?", "voiceUrl": "http://192.168.52.164:8082/voice-58fa4289fcc04d89bfee38aa038a904a.mp3", "role": 7}}                                                                         |
| `/sys/config`                  | Publish |在线调整系统配置，identifier 包括：load_roles_config , 如果发送的消息中有 msgId，回复的消息中也会有 msgId        | {"msgId": 174, "identifier": "load_roles_config"}                                                                         |
| `/sys/configAck`                  | Subscribe | 在线调整系统配置的回复         | {"msgId": 174, "identifier": "load_roles_config", "result": 1}                                                                         |

:::note
`$sn`通常可以在您的玩具包装盒或者[tool.folotoy.com](https://tool.folotoy.com)的控制台中找到。
:::
