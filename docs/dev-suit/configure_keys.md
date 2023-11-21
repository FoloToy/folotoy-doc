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

- Only supports English input and lowercase letters.

1. **View Configuration**

    - View the current configuration file.

        ```
        at+keys=?
        ```

2. **Configure Talk Key**

    - Example: Define the talk key as GPIO 27.

        ```
        at+keys=talk,27
        ```

3. **Configure Reset WIFI Key**

    - Example: Define the WIFI reset key as GPIO 29 and GPIO 30.

        ```
        at+keys=wifi_rst,29;30
        ```

4. **Reboot Configuration**

    - After modifying the configuration file, a reboot is required for the changes to take effect.

        ```
        at+reboot
        ```

5. **Configure Role**

    - If not configured, the role ID defaults to 1.

    - Example: Define the keys for role 1 as GPIO 22.

        ```
        at+keys=role_idx,1,22
        ```

    - Example: Delete the key definition for role 1.

        ```
        at+keys=role_idx,1,0
        ```

6. **Configure Switch Role Key**

    - Example: Configure GPIO 27 to switch to the previous role.

        ```
        at+keys=role_prev,27
        ```

    - Example: Configure GPIO 28 to switch to the next role.

        ```
        at+keys=role_next,28
        ```

### Specific Steps

1. Connect the interface expansion board to a PC using the provided Type C data cable.
2. Open the [web tool](https://tool.folotoy.com/index) and navigate to the logs.

    <img src="https://user-images.githubusercontent.com/41461127/281992533-f5204e50-e79e-472c-8edf-398e087f3f91.png" />

3. Select the serial port for the kit and click "Connect."

    <img src="https://user-images.githubusercontent.com/69997928/284516480-089d0383-cf77-45e4-85a5-89527f118714.png" />

4. Enter the AT command in the pop-up log box.

    <img src="https://user-images.githubusercontent.com/69997928/284516660-5dd96e62-f94e-42cb-9d57-119930597230.png" />
