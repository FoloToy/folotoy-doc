---
title: MQTT Integration
sidebar_label: MQTT
---

The MQTT function within folotoy server allows useful values to be published to an MQTT broker or subscribe to the topic to modify the configuration of folotoy server. This is useful in allowing other automation platforms to consume data from folotoy server or talk with.

## MQTT Topics

Before using the MQTT integration feature, you need to set `INTEGRATION_MQTT` to `true`. Please refer to the [environment variable settings](../configuration/environment_variables.md) for more information.

The following are the available topics and permission descriptions.

| Topic                                                  | Permissions | Description              | Payload                                                                           |
|--------------------------------------------------------| --------- |----------------------|---------------------------------------------------------------------------------------|
| `/sys/folotoy/$sn/thing/event/post`                  | Subscribe | Send event message about toys. identifier: voice_generated，recording_transcribed         | {"msgId": 174, "identifier": "voice_generated", "inputParams": {"recordingId": 31, "order": 4, "voiceText": " What's your first question?", "voiceUrl": "http://192.168.52.164:8082/voice-58fa4289fcc04d89bfee38aa038a904a.mp3", "role": 7}}                                                                         |
| `/sys/folotoy/$sn/thing/command/call`                  | Publish | Send command message to toys. identifier: iwantplay         |   使用角色1播放文字：<br/>{"msgId": 100,"identifier": "iwantplay","inputParams": {"role": 1,"text": "这是一个播放文字转语音的测试123 hi good 朋友"}} <br/>播放链接：<br/>{"msgId" : 1,  "identifier" : "iwantplay", "inputParams" : {  "url" : "http://192.168.52.81:9001/speech-11.mp3" }}  <br/> 当 url 和 text 同时存在时，优先播放 url                                                                |
| `/sys/folotoy/+/thing/command/callAck`                  | Subscribe | Subscribe command execution message from toys. identifier: iwantplay         |  {"identifier": "iwantplay", "msgId": 1, "result": 1}, If result is 0 when command failed |
| `/sys/config`                  | Publish |Online modification of system configuration, identifier includes: load_roles_config. If the message sent contains msgId, the reply message will also contain msgId.        | {"msgId": 174, "identifier": "load_roles_config"}                                                                         |
| `/sys/configAck`                  | Subscribe | Reply to online modification of system configuration.         | {"msgId": 174, "identifier": "load_roles_config", "result": 1}                                                                         |

:::note
`$sn` usually can be found at your Toy case or in the console of [tool.folotoy.com](https://tool.folotoy.com)
:::
