---
title: Alilo F6/F6s PCB Replacement
sidebar_label: Alilo F6/F6s
---

This document provides the necessary steps for PCB replacement of Alilo F6/F6s. If you don't plan to read the document below, you can also refer to the video below.


## Requirements

- A cross screwdriver with a diameter of 2.5mm and a length of over 5cm.
- A utility knife, used to remove the adhesive on top of the PCB socket.
- A functioning Alilo F6 can be purchased on major e-commerce websites.
- A replacement circuit board for the F6, produced by FoloToy, can be purchased at: https://gf.bilibili.com/item/detail/1104222005.

<img src="https://user-images.githubusercontent.com/1455685/281617149-782ee59a-1c4a-4a80-8516-1a2946c477cc.jpg" />

## Instructions

:::caution
If it is the F6s model, the original motherboard has a Type-C interface. Direct replacement may result in an incompatible situation with the MIC and speaker interfaces. Currently, normal connection can be achieved through an adapter cable.
<img src="https://user-images.githubusercontent.com/1455685/281634362-5b038713-dc3e-4430-a698-b9c32318f12a.png" />
:::


1. Check if the recording and playback of Alilo F6 are normal.
2. Use a screwdriver to unscrew the screws on the base and back of Alilo F6.
3. Carefully open the casing of Alilo F6, unplug all plugs on the motherboard, first unplug the power plug, there is glue on the plug, you can use an art knife to gently cut it open, be sure not to cut your hand.
4. Unscrew the screws on the motherboard and remove it.
5. Replace the original motherboard with FoloToy's motherboard and tighten the screws to secure it.
6. Plug in microphone, light, speaker, and power sockets in order, finally plug in power socket.
7. After plugging in all sockets, do not close the casing or install screws yet; first turn on/off switch located at rabbit's tail to see if newly installed light can illuminate and flash slowly in blue color.
8. If there are no problems, install and screw tightens casing to complete replacement process.

## Wi-Fi Configure

[Network configure and server configure](../manual/wifi-connect.md)


### How to enter pair mode

Simultaneously press and hold the previous/next button for more than 5 seconds to enter configuration mode. At this time, the light will gradually change to blue.

   ![config](https://user-images.githubusercontent.com/1455685/281622340-7a607890-38d3-46f5-80e5-3168ee99a2e0.jpg)

<!-- ## Wi-Fi Configure

1. Turn on the switch at the back of the toy to power it on. The blue flashing light indicates that the toy has entered pairing mode.

2. Simultaneously press and hold the previous/next button for more than 5 seconds to enter configuration mode. At this time, the light will gradually change to blue.

   ![config](https://user-images.githubusercontent.com/1455685/281622340-7a607890-38d3-46f5-80e5-3168ee99a2e0.jpg)

3. Connect to the hotspot of the toy.

   Open your phone or computer and select "FoloToy-xxxx" WiFi network. Wait a moment, and your phone or computer will automatically open a configuration page where you can set up which WiFi network, server address, and port number that you want your toy to connect with.

   **Server Address/Port are required, if you have not setup your own server, please refer to [Server Installation](installation/docker.md).**

   :::caution
   If no page pops up, you can also configure it by entering http://192.168.4.1 in your browser.
   :::

   * Enter configuration mode: Simultaneously press and hold both forward and backward buttons on the front panel for 5 seconds; at this time, the earlight will flash blue.
   * Connect FoloToy: Use your phone or computer to search for available WiFi networks; look for one named "FoloToy-xxxx", such as FoloToy-b8a2.
   * Open configuration page: Once connected to FoloToy's WiFi network, it will automatically open a configuration page.
   * Home screen explanation: There are three buttons on the home screen - "Configure WiFi" is used for setting up WiFi connection; "Info" is for viewing hardware information; "Exit" is for exiting the configuration. See the image below.

   ![config](https://github.com/FoloToy/folotoy-tool/assets/1455685/3cf6d0ac-9504-40ec-94c1-54a09a990fd4)
 -->

## Usage

After assembling the toy, completing the network configuration, and connecting to the server, press and hold the indicated recording button to start a conversation. Release it to end the conversation. The small button is used for switching characters. Clicking on it will activate the character switch. The numerical values on the character buttons correspond to the keys in roles.json file.

<img src="https://user-images.githubusercontent.com/1455685/281640268-d7032dc1-af4f-4eb4-becc-094c96005ffa.jpg" />
<img src="https://user-images.githubusercontent.com/1455685/272765538-a9bcdf56-300a-4bae-a10f-ce7554a072fe.png" />