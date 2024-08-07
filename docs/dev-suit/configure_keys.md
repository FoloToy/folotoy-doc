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

## GPIO
    
- Currently, there are a total of 8 configurable GPIO pins:

    ```
    5, 18, 19, 21, 25, 33, 36, 39
    ```

- Each key must correspond to a separate GPIO pin.

### Configure talk key:

- Example: Define talk key as GPIO 27   

    ```json
    at+keys=talk,<GPIO> // at+keys=talk,27
    ```

### Switch recording mode

- Example: press the recording button to enter recording, release the button to end recording

    ```json
    at+command=record,press
    ```

- Example: click the recording button to enter the recording, and it will automatically end after the recording is completed

    ```json
    at+command=record,click
    ```
    
- Example: click the recording button to enter continuous conversation mode

    ```json
    at+command=record,continuous
    ```

### Configure enter dialogue mode key:

- Example: Define enter dialogue mode key as GPIO 29 and GPIO 30

    ```json
    at+keys=dialogue,<GPIO>;<GPIO> // at+keys=dialogue,29;30
    ```
### Configure role:

- If not configured, the default role ID is 1.

- Example: Define GPIO 22 as the key for role 1
    ```json
    at+keys=role_idx,<index>,<GPIO> // at+keys=role_idx,1,22
    ```

- Example: Remove key definition for role 1
    
    ```json
    at+keys=role_idx,<index>,<GPIO> // at+keys=role_idx,1,0
    ```

### Configure switch role key:

- Example: Configure GPIO 27 to switch to the previous role

    ```json
    at+keys=role_prev,<GPIO>  // at+keys=role_prev,27
    ```

- Example: Configure GPIO 28 to switch to the next role

    ```json
    at+keys=role_next,<GPIO>  // at+keys=role_next,28
    ```


## Specific Steps

1. Connect the interface expansion board to a PC using the provided Type C data cable.
2. Open the [web tool](https://tool.folotoy.com/index) and navigate to the logs.

    <img src="https://doc-img.folotoy.com/images/41461127/281992533-f5204e50-e79e-472c-8edf-398e087f3f91.png" />

3. Select the serial port for the kit and click "Connect."

    <img src="https://doc-img.folotoy.com/images/69997928/284516480-089d0383-cf77-45e4-85a5-89527f118714.png" />

4. Enter the AT command in the pop-up log box.

    <img src="https://doc-img.folotoy.com/images/69997928/284516660-5dd96e62-f94e-42cb-9d57-119930597230.png" />
