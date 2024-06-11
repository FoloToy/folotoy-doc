---
title: Octopus Mini Version
sidebar_label: Octopus Mini Version
---

This guide aims to introduce users to the features, configuration options, and quick start of the Folotoy Octopus Mini AI development kit. The Folotoy Octopus Mini AI development kit is designed for AI voice dialogue applications and educational purposes. To purchase the development kit, please visit our Taobao store [AI Toy Transformation Factory](https://folotoy.taobao.com) or [Bilibili Workshop](https://gf.bilibili.com/item/detail/1104863005).

## Overview

The Folotoy Octopus Mini AI development kit includes the following components:

- ChatGPT AI Voice Dialogue Core Board Folotoy Core 1
- Peripheral Expansion Board 1 (approximately 40mm * 54mm)
- Speaker 1
- Electret Microphone 1
- 3.7v Lithium Battery 1, supports Type-C charging
- Function buttons 2
- Volume adjustment and switch knob module 1
- Programmable RGB light module 1 set
- Type-C data cable 1

## Getting Started with Assembly

### Component Overview

First, familiarize yourself with the various components as shown in the image below:

![IMG_8051](https://github.com/FoloToy/folotoy-doc/assets/1455685/5994c26f-114a-4a77-b270-416fc0ce1eb3)

### Connecting Components

![IMG_8052](https://github.com/FoloToy/folotoy-doc/assets/41461127/a9116fe0-4c9a-4647-b311-d4b840937f13)

#### Interface Correspondence

Connect the components according to the English interfaces on the board:

| Interface | Component |
| ---- | ---- |
| VOL, POWER | Volume adjustment and switch knob module |
| SPK | Speaker |
| RGB | RGB light module (connect from the board's RGB interface to the module's IN port, then from the module's OUT port to another module's IN port) |
| MIC | Microphone |
| BUTTON A | Dialogue button (color optional) |
| BUTTON B | Role switching button (color optional) |
| SENSOR | Voice wake-up module |

### Voice Wake-up Module

If you have purchased the Mini Pro version or the voice wake-up module separately, install the voice wake-up module as follows:

- Connect one end of the PH2.0 3P connection line to the 5-pin plug of the FoloToy voice wake-up expansion module (connected to the middle 3-pin header).

    ![image](https://github.com/FoloToy/folotoy-doc/assets/41461127/6c38273c-7da1-47bc-b8e8-ce4c2501f67f)

- Connect the DuPont wire end of the PH2.0 3P connection line to the corresponding interface (SENSOR interface) on the Octopus expansion board.

    ![image](https://github.com/FoloToy/folotoy-doc/assets/41461127/7eeedd5b-4558-4906-9e78-82ddd32b4b90)

- When the module's red power indicator lights up, it indicates normal power supply.

- When the module detects the wake-up word (default wake-up word is "hi folo" pronounced as "follow"), the wake-up indicator light of the module will extinguish briefly. After waking up, the module emits a "received" prompt tone (when the wake-up mode is set to 1 with the command `at+config=common,wake_up_mode,1` Instructions for AT commands can be found [here](../at-command.mdx)).

### Power On

After connecting all the components, rotate the switch on the development board to power on and enter the network configuration state. At this time, the LED will show a "🔵 blue breathing effect". If the switch does not work and the development board starts automatically, you can change the configuration by adjusting the small switch on the core board.

![IMG_8057](https://github.com/FoloToy/folotoy-doc/assets/1455685/6bd4986d-e2fc-48b6-93dc-1cd55f51b84b)

Congratulations, you have completed the assembly of the Folotoy Octopus AI development kit.

## Wi-Fi Configuration

[Device Networking and Configuration Server](../manual/wifi-connect.md)

### How to Enter Network Configuration Mode
* Press and hold button B for more than 3 seconds, the LED will turn into a blue breathing flashing state.
* Open your phone and connect to the Folotoy-xxxx Wi-Fi hotspot. Your phone will automatically open the network configuration page, where you can configure Wi-Fi name/password/server IP/server port.
* After entering the blue breathing flashing state, the configuration method is the same as the initial configuration.

### Starting a Dialogue

Start a dialogue by following these steps:

* Long press button A, the LED will show a steady green light, indicating recording is in progress. You can speak into the microphone at this time.
* Release button A after speaking. The LED will show a green breathing flashing state, indicating that the AI is thinking.
* After waiting for about 2s to 5s (this time usually depends on network latency; if the network conditions are poor, it may take longer or time out), you will hear the speaker play the response.
* Press button B briefly to cycle through different roles. Currently, the server can configure 7 types of roles.
* If equipped with a voice wake-up module, the default wake-up word is "hi folo" pronounced as "follow". After the device detects the wake-up word, it will emit a "received" prompt tone. You can then speak to the device directly. After you stop speaking, the device will automatically stop recording (if unable to recognize the end of the speech, you may need to adjust the voice threshold using AT commands. Instructions for AT commands can be found [here](../at-command.mdx)).