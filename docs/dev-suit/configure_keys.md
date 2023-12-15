---
title: Configure Keys
sidebar_label: Configure Keys
---

# Configure Keys

* Supports configuring GPIO pins for keys through AT commands.

* Currently, the GPIO pins corresponding to the three buttons in the kit are as follows:

    ```
    Button A - GPIO 18
    Button B - GPIO 19
    Button C - GPIO 5
    ```

### GPIO
    
- Currently, there are a total of 8 configurable GPIO pins:

    ```
    5, 18, 19, 21, 25, 33, 36, 39
    ```

- Each key must correspond to a separate GPIO pin.

### AT Commands

*** changes take effect after reboot. Only English input and lowercase letters are supported. ***

1. View configuration file:
   ```
   at+config=?
   ```

2. View all AT commands:
   ```
   at+command=?
   ```

3. View key configuration:
   ```
   at+keys=?
   ```

4. Configure talk key:

- Example: Define talk key as GPIO 27

    ```
    at+keys=talk,<GPIO> // at+keys=talk,27
    ```

5. Configure WIFI reset key:

- Example: Define WIFI reset key as GPIO 29 and GPIO 30

    ```
    at+keys=wifi_rst,<GPIO>;<GPIO> // at+keys=wifi_rst,29;30
    ```

6. Configure enter dialogue mode key:

- Example: Define enter dialogue mode key as GPIO 29 and GPIO 30

    ```
    at+keys=dialogue,<GPIO>;<GPIO> // at+keys=dialogue,29;30
    ```

7. Reboot configuration (changes take effect after reboot):

   ```
   at+reboot
   ```

8. Configure role:

- If not configured, the default role ID is 1.

- Example: Define GPIO 22 as the key for role 1

    ```
    at+keys=role_idx,<index>,<GPIO> // at+keys=role_idx,1,22
    ```

- Example: Remove key definition for role 1

    ```
    at+keys=role_idx,<index>,<GPIO> // at+keys=role_idx,1,0
    ```

9. Configure switch role key:

- Example: Configure GPIO 27 to switch to the previous role

    ```
    at+keys=role_prev,<GPIO>  // at+keys=role_prev,27
    ```

- Example: Configure GPIO 28 to switch to the next role

    ```
    at+keys=role_next,<GPIO>  // at+keys=role_next,28
    ```

10. Modify MQTT configuration:

- Example: Modify the broker to 192.168.52.1

    ```
    at+config=mqtt,broker,<broker> // at+config=mqtt,broker,192.168.52.1
    ```

- Example: Modify the port to 1883

    ```
    at+config=mqtt,port,<port> // at+config=mqtt,port,1883
    ```

- Modify both the broker and port simultaneously

    ```
    at+config=mqtt,broker,<broker>;port,<port> // at+config=mqtt,broker,192.168.52.1;port,1883
    ```

11. Modify WIFI configuration:

- Example: Modify the SSID to "test-wifi"

    ```
    at+config=wifi,ssid,<ssid> // at+config=wifi,ssid,test-wifi
    ```

- Example: Modify the password to "123456"
    ```
    at+config=wifi,password,<password> // at+config=wifi,password,123456
    ```

- Modify both the SSID and password simultaneously

    ```
    at+config=wifi,ssid,<ssid>;password,<password> // at+config=wifi,ssid,test-wifi;password,123456
    ```

12. Modify voice threshold in continuous dialogue mode:

- Example: Modify voice threshold to 100

    ```
    at+config=common,voice,<threshold> // at+config=common,voice,100
    ```

13. Continuous dialogue:
    ```
    at+command=dialogue,start // enter continuous dialogue mode
    at+command=dialogue,stop // exit continuous dialogue mode
    ```

14. Reset WIFI and enter pairing mode:
    ```
    at+command=wifi,reset
    ```

### Specific Steps

1. Connect the interface expansion board to a PC using the provided Type C data cable.
2. Open the [web tool](https://tool.folotoy.com/index) and navigate to the logs.

    <img src="https://user-images.githubusercontent.com/41461127/281992533-f5204e50-e79e-472c-8edf-398e087f3f91.png" />

3. Select the serial port for the kit and click "Connect."

    <img src="https://user-images.githubusercontent.com/69997928/284516480-089d0383-cf77-45e4-85a5-89527f118714.png" />

4. Enter the AT command in the pop-up log box.

    <img src="https://user-images.githubusercontent.com/69997928/284516660-5dd96e62-f94e-42cb-9d57-119930597230.png" />
