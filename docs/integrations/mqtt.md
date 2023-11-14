---
title: MQTT Integration
sidebar_label: MQTT
---

The MQTT function within folotoy server allows useful values to be published to an MQTT broker or subscribe to the topic to modify the configuration of folotoy server.. This is useful in allowing other automation platforms to consume data from folotoy server or talk with.

## MQTT Topics

The following are the available topics and permission descriptions.

| Topic                                                  | Permissions | Description              | Payload                                                                           |
|--------------------------------------------------------| --------- |----------------------|---------------------------------------------------------------------------------------|
| `/sys/folotoy/$sn/thing/event/post`                  | Subscribe | Send event message about toys.，identifier: voice_generated，recording_transcribed         | {"msgId": 174, "identifier": "voice_generated", "inputParams": {"recordingId": 31, "order": 4, "voiceText": " What's your first question?", "voiceUrl": "http://192.168.52.164:8082/voice-58fa4289fcc04d89bfee38aa038a904a.mp3", "role": 7}}                                                                         |
| `/sys/config`                  | Publish |Online modification of system configuration, identifier includes: load_roles_config. If the message sent contains msgId, the reply message will also contain msgId.        | {"msgId": 174, "identifier": "load_roles_config"}                                                                         |
| `/sys/configAck`                  | Subscribe | Reply to online modification of system configuration.         | {"msgId": 174, "identifier": "load_roles_config", "result": 1}                                                                         |

:::note
`$sn` usually can be found at your Toy case or in the console of [tool.folotoy.com](https://tool.folotoy.com)
:::
