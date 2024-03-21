---
title: Alilo G6/G6s PCB Replacement
sidebar_label: Alilo G6/G6s
---

This document provides the necessary steps for PCB replacement of Alilo G6/G6s. If you don't plan to read the document below, you can also refer to the video below.


<iframe width="100%" height="600" src="https://www.youtube.com/embed/hR7V1izzeZw?si=T3cY8y4Oy2Bxkg0H" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Requirements

:::caution
When purchasing the G6, make sure not to buy the wrong model. The replacement circuit board only supports the G6 with a MicroUSB interface on the right side.
<img src="https://user-images.githubusercontent.com/1455685/281634732-af6d9f5e-a11d-42d7-9d6f-3a296a4aac42.png" />
:::

- A cross screwdriver with a diameter of 2.5mm and a length of over 5cm.
- A utility knife, used to remove the adhesive on top of the PCB socket.
- A functioning Alilo G6 can be purchased on major e-commerce websites.
- A replacement circuit board for the G6, produced by FoloToy, can be purchased at: https://gf.bilibili.com/item/detail/1104222005.

<img src="https://user-images.githubusercontent.com/1455685/281617149-782ee59a-1c4a-4a80-8516-1a2946c477cc.jpg" />

## Instructions

1. Check if the recording and playback of Alilo G6 are normal.
2. Use a screwdriver to unscrew the 6 screws on the back of Alilo G6.
3. Carefully open the casing of Alilo G6, unplug all plugs on the motherboard, first unplug the power plug, there is glue on the plug, you can use an art knife to gently cut it open, be sure not to cut your hand.
4. Unscrew the 4 screws on the motherboard and remove it.
5. Replace the original motherboard with FoloToy's motherboard and tighten 3 screws to fix it.
6. Plug in microphone, light, speaker and power sockets, finally plug in power socket.
7. After plugging in all sockets, do not close the casing or install screws yet. First turn on/off switch on rabbit's tail to see if newly installed light can turn on and flash slowly in blue color.
8. If there is no problem, install the casing and tighten screws to complete replacement process.


## Wi-Fi Configure

[Network configure and server configure](../manual/wifi-connect.md)


### How to enter pair mode

imultaneously press and hold the previous/next button for more than 5 seconds to enter configuration mode. At this time, the light will gradually change to blue.

   ![config](https://user-images.githubusercontent.com/1455685/281584076-b5234f63-f7b5-4e8e-a710-6eedf19b8997.jpg)


<!-- ## Wi-Fi Configure

1. Turn on the switch at the back of the toy to power it on. The blue flashing light indicates that the toy has entered pairing mode.

2. Simultaneously press and hold the previous/next button for more than 5 seconds to enter configuration mode. At this time, the light will gradually change to blue.

   ![config](https://user-images.githubusercontent.com/1455685/281584076-b5234f63-f7b5-4e8e-a710-6eedf19b8997.jpg)

3. Connect to the hotspot of the toy.

   Open your phone or computer and select "FoloToy-xxxx" WiFi network. Wait a moment, and your phone or computer will automatically open a configuration page where you can set up which WiFi network, server address and port that you want your toy to connect with.

   **Server Address/Port are required, if you have not setup your own server, please refer to [Server Installation](installation/docker.md).**

   :::caution
   If no page pops up, you can also configure it by entering http://192.168.4.1 in your browser.
   :::

   * Enter configuration mode: Simultaneously press and hold both forward and backward buttons on the front panel for 5 seconds; at this time, the earlight will flash blue.
   * Connect FoloToy: Use your phone or computer to search for available WiFi networks; look for one named "FoloToy-xxxx", such as FoloToy-b8a2.
   * Open configuration page: Once connected to FoloToy's WiFi network, it will automatically open a configuration page.
   * Home screen explanation: There are three buttons on the home screen - "Configure WiFi" is used for setting up WiFi connection; "Info" is for viewing hardware information; "Exit" is for exiting the configuration. See the image below.

   ![config](https://github.com/FoloToy/folotoy-tool/assets/1455685/3cf6d0ac-9504-40ec-94c1-54a09a990fd4) -->


## Starting a Conversation

After assembling the toy, completing the network configuration, and connecting to the server, hold down the large circular button in the middle for conversation. Release it to end the conversation. The 7 small circular buttons around it are character switch buttons. Clicking on them will activate character switching, and the numerical values on these buttons correspond to the keys in roles.json.

<img src="https://user-images.githubusercontent.com/1455685/278226434-d732ea4b-f4de-4f91-920b-f5bcc17e779f.png" />
<img src="https://user-images.githubusercontent.com/1455685/272765538-a9bcdf56-300a-4bae-a10f-ce7554a072fe.png" />