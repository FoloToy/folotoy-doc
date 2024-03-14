---
title: Network configure and server configure
sidebar_label:  Network configure and server configure
---

## Network Configuration

- Power on the device. If it is the first time the device is powered on, it will automatically enter pairing mode. Manually enter pairing mode: [Alilo G6/G6s](../toy-pcb-replacement/alilo-g6.md#how-to-enter-pairing-mode), [Alilo F6/F6s](../toy-pcb-replacement/alilo-f6.md#how-to-enter-pairing-mode), [Mitu C1](../toy-pcb-replacement/mitu-c1.md#how-to-enter-pairing-mode), [Octopus](../dev-suit/quickstart.md#how-to-enter-pairing-mode), or enter pairing mode through [AT commands](../at-command.mdx#reset-wifi-and-enter-pairing-mode).

- Open your smartphone or computer and select the "FoloToy-xxxx" wireless network. Wait a moment, and a configuration page will automatically open on your smartphone or computer, where you can set which WiFi network to connect to, server address, and port number.

- If no page pops up, you can also configure by entering http://192.168.4.1 in your browser.

- Main screen explanation: There are three buttons on the main screen:

  - Configure: Used to configure WiFi connection.
  - Info: Used to view hardware information.
  - Exit: Used to exit configuration.

- Click on "Configure" to enter the configuration page.

  - SSID: Name of your home/office WiFi (supports only 2.4G wireless networks).
  - Password: WiFi password for connection (cannot be empty).

<img width="30%" src="https://github.com/FoloToy/folotoy-doc/assets/41461127/a5716e99-c5c9-4ff1-8da8-acbfb6ed664e" /><img width="30%" src="https://github.com/FoloToy/folotoy-doc/assets/41461127/2a778703-a976-45dd-beae-30de076bd25a" /><img width="30%" src="https://github.com/FoloToy/folotoy-doc/assets/41461127/3a0def94-a139-4d8a-aa82-4c2f60721faa" />


## Server Configuration

- If you want to use a self-built server, we provide comprehensive documentation and tools to help you set up your own server. For more details, please [refer here](https://docs.folotoy.com/).
- After setting up your self-built server, click on "Advanced Settings" in the device pairing interface and enter your MQTT server address and MQTT server port.
- You can also purchase our testing server, [purchase link](https://item.taobao.com/item.htm?ft=t&id=753948021813&spm=a21dvs.23580594.0.0.52de3d0dWo8kQY&skuId=5273699128887).

<center>
  <img
    width="30%"
    src="https://github.com/FoloToy/folotoy-doc/assets/41461127/56dba04d-b13e-4119-bb7e-703ac2e30253"
  />
</center>