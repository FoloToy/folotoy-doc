---
title: FoloToy ASR Module
sidebar_label: FoloToy ASR Module
---
### Product List

1. FoloToy Voice Wake-up Expansion Module *1
2. PH2.0 3P to DuPont Connector Cable *1
3. 2.54mm Pitch Pins (Need to be soldered to the Octopus expansion board)

### Product Images

![图片](https://github.com/FoloToy/folotoy-doc/assets/41461127/16f38c28-ef2a-4c12-8c83-826e29bdf754)
![图片](https://github.com/FoloToy/folotoy-doc/assets/41461127/2c301913-0f03-489d-8d2b-7e5cc3198a02)


### Preparation for Use

1. Solder the 2.54mm pitch pins in the attachment to the Octopus Mini expansion board.
2. The device's firmware version must be above 24.17.4.30. For upgrade instructions, please refer to: [Firmware upgrade and FAQ](../web-tool.mdx)
3. Use AT commands to enable voice prompts after wake-up (after enabled, Octopus will reply with a specified voice after receiving a wake-up command).

```json
at+config=common,wake_up_mode,1 // 0-disable，1-enable.
```

For specific instructions on how to use AT commands, please refer to: [AT 指令](../at-command.mdx)

4. Use AT commands to switch the dialogue activation mode to CLICK mode.

```json
at+command=record,click
```

If you cannot recognize the end of speech, you need to use AT commands to adjust the speech threshold.

```json
at+config=common,voice,60
```

### Usage

1. Connect the PH2.0 end of the PH2.0 3P cable to the 5Pin connector on the FoloToy Voice Wake-up Expansion Module (connected to the middle 3Pin pin).
2. Connect the DuPont line end of the PH2.0 3P cable to the corresponding interface on the pin of the Octopus expansion board. The corresponding relationship is as follows:
    - G -- GND
    - V -- VCC
    - S -- TALK

    As shown below:
   ![图片](https://github.com/FoloToy/folotoy-doc/assets/41461127/f535f560-c1da-4c4c-8a09-dfa9adb69a66)
3. When the red power indicator light on the module is on, it indicates that the power is on normally.
4. When the module detects a wake-up word (the default wake-up word is "Octopus" or "hi folo"), the wake-up indicator light on the module will flash. After waking up, the module will emit a "收到" prompt tone.

### FAQ

1. What are the functions of the reserved pin holes and PH2.0 sockets on the module?
    - Reserved for future function expansion.
2. Is the module firmware source code open source?
    - The source code is not open source for the time being.
3. How can I customize the wake-up word?
    - For bulk commercial customers, wake-up word customization services can be provided.
