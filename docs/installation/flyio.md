---
title: Installing FoloToy Server Program on Fly.io
sidebar_label: Fly.io
---
This article provides the necessary steps to install the FoloToy server program on [Fly.io](https://fly.io).

## Prerequisites

* Register an account on [fly.io](https://fly.io) and link your bank card.
* Prepare an OpenAI API key. You can register for an API key [here](https://platform.openai.com/api-keys). If you are unable to register for OpenAI, you can also register for the [MagickChat](https://one-api.magickchat.com/) service and obtain a testing API key.

## Getting Started with Installation and Deployment

If you don't have the `git` command installed on your machine, you'll need to install `git` and the `flyctl` command. The entire deployment process requires the use of commands, so it's quite geeky.

* [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Install flyctl](https://fly.io/docs/hands-on/install-flyctl/)

### Obtain the Required Configuration Files for Deployment

Open your terminal. On macOS, you can use the built-in Terminal.app.

```
git clone https://github.com/FoloToy/folotoy-server-self-hosting.git
```

### Modify Configuration Files

Navigate to the directory `./folotoy-server-self-hosting/flyio/folotoy-server`. The files in this directory are as follows:

```
├── flyio
│   └── folotoy-server
│       ├── Dockerfile
│       ├── acl.conf
│       ├── fly.toml
│       ├── mosquitto.conf
│       ├── passwd
│       ├── roles.json
│       ├── set_secrets.sh
│       └── start.sh
```

The files that need to be modified according to your own situation are as follows:

* fly.toml
* passwd

If you want to define the roles of the toys yourself, you can also modify the roles.json file.


#### Modify the `fly.toml` File

Replace all instances of `<your_app_name>` in the `fly.toml` configuration file with your own defined name.

```
# Todo: modify your app name
app = "<your_app_name>"
......
  # Todo: modify your speech udp server host
  SPEECH_UDP_SERVER_HOST = "<your_app_name>.fly.dev"
......
    # Todo: modify your audio files download url
  AUDIO_DOWNLOAD_URL = "http://<your_app_name>.fly.dev:8082"
```
If you have named your application "folotoy-server-test," your fly.toml file should look like this:

```toml
# fly.toml app configuration file generated for folotoy-server-test on 2023-12-13T18:33:02+08:00
#
# See https://fly.io/docs/reference/configuration/ for information about how to use this file.
#

app = "folotoy-server-test"
primary_region = "nrt"

[build]

[env]
  API_SERVER = "true"
  API_SERVER_BIND_ADDRESS = "0.0.0.0"
  API_SERVER_PORT = "8082"
  AUDIO_DOWNLOAD_URL = "http://folotoy-server-test.fly.dev:8082"
  AUDIO_SAVE_PATH = "/audio"
  LLM_TYPE = "openai"
  LOG_LEVEL = "DEBUG"
  MQTT_BROKER_HOST = "127.0.0.1"
  MQTT_BROKER_PORT = "1883"
  MQTT_CLIENT_ID = "folotoy"
  MQTT_USERNAME = "folotoy"
  OPENAI_TTS_MODEL = "tts-1"
  OPENAI_WHISPER_MODEL = "whisper-1"
  ROLES_FILE_PATH = "/config/roles.json"
  SPEECH_UDP_SERVER_BIND_ADDRESS = "fly-global-services"
  SPEECH_UDP_SERVER_HOST = "folotoy-server-test.fly.dev"
  SPEECH_UDP_SERVER_PORT = "8085"
  STT_TYPE = "openai-whisper"
  TTS_TYPE = "edge-tts"
  TZ = "Asia/Shanghai"

[[services]]
  protocol = "udp"
  internal_port = 8085

  [[services.ports]]
    port = 8085

[[services]]
  protocol = "tcp"
  internal_port = 8082

  [[services.ports]]
    port = 8082

[[services]]
  protocol = "tcp"
  internal_port = 1883

  [[services.ports]]
    port = 1883

```
#### Modify the passwd file

Add your MQTT service account, toy's SN, and key to the passwd file.

* For example, my toy's SN and key are F234103026 and JvRjTtz5brsN, respectively, you can find the SN and key on the packaging. If you don't have them, you can connect the toy to your computer using the provided USB cable and visit [folotoy tool](tool.folotoy.com) to retrieve them.
* If you have multiple toys, add a new line for each toy in this file.
* My MQTT service account username and password are folotoy and Ev6****cDB, respectively. Please keep the username as folotoy, and you can choose any string as the password.
* **Note**: The passwd file should not contain empty lines, and the last line should not be empty.

For example, here is my passwd file:
```
folotoy:Ev6****cDB
F234103026:JvRjTtz5brsN
```

#### Start executing the flyio command

* fly auth login
* fly launch --ha=false --no-deploy
```
❯ fly launch --ha=false --no-deploy
Creating app in /Users/lewang/Playground/flyio/folotoy-server-self-hosting/flyio/folotoy-server
An existing fly.toml file was found for app folotoy-server-test
? Would you like to copy its configuration to the new app? Yes
Scanning source code
Detected a Dockerfile app
? Choose an app name (leaving blank will default to 'folotoy-server-test')
automatically selected personal organization: Le
App will use 'nrt' region as primary

Created app 'folotoy-server-test' in organization 'personal'
Admin URL: https://fly.io/apps/folotoy-server-test
Hostname: folotoy-server-test.fly.dev
Wrote config file fly.toml
Validating /Users/lewang/Playground/flyio/folotoy-server-self-hosting/flyio/folotoy-server/fly.toml
Platform: machines
✓ Configuration is valid
Your app is ready! Deploy with `flyctl deploy`
```

"This way, you have created an app. Open the fly.io dashboard in a browser and navigate to the newly created project to add several password configurations that you will need.

<img width="1515" alt="image" src="https://github.com/FoloToy/folotoy-doc/assets/1455685/58a3a4c0-bae8-481c-91ed-5f0f5476d286" />

<img width="1486" alt="image" src="https://github.com/FoloToy/folotoy-doc/assets/1455685/4a82c4cb-40f4-485e-9a29-9decbbe4e4ca" />

<img width="1531" alt="image" src="https://github.com/FoloToy/folotoy-doc/assets/1455685/92eadfca-7f98-476b-87a5-5a8cfd16cfd8" />

Four variables need to be added in total, where OPENAI_OPENAI_KEY, OPENAI_TTS_KEY, and OPENAI_WHISPER_KEY can use the same apiKey.

* MQTT_PASSWORD: This password is the same as the one used by the "folotoy" user in the previous "passwd" file. Please keep it consistent.
* OPENAI_OPENAI_KEY: This is the apiKey for OpenAI.
* OPENAI_TTS_KEY: This is the apiKey for OpenAI Text-to-Speech.
* OPENAI_WHISPER_KEY: This is the apiKey for OpenAI Whisper.

You can also create the secrets by modifying the set_secrets.sh file in the directory and executing the command ./set_secrets.sh. The effect is the same as adding them in the Fly.io dashboard. For example, the content of my set_secrets.sh file is as follows

```
fly secrets set MQTT_PASSWORD="Ev6****cDB"
fly secrets set OPENAI_OPENAI_KEY="sk-MOfAmt06v*********************uPx33lKL"
fly secrets set OPENAI_TTS_KEY="sk-MOfAmt06v*********************uPx33lKL"
fly secrets set OPENAI_WHISPER_KEY="sk-MOfAmt06v*********************uPx33lKL"

```

After completing the previous steps, execute the following command: `fly launch --ha=false`.

Choose "N" for the following two options.

- Would you like to set up a Postgresql database now? N
- Would you like to set up an Upstash Redis database now? N

Choose the region that is closest to you:

<img width="1458" alt="image" src="https://github.com/FoloToy/folotoy-doc/assets/1455685/e09badf8-02f4-40a5-b3a2-80ddd11b068e" />

I performed the following actions:
```
❯ fly launch --ha=false
Creating app in /Users/lewang/Playground/flyio/folotoy-server-self-hosting/flyio/folotoy-server
An existing fly.toml file was found for app folotoy-server-test
? Would you like to copy its configuration to the new app? Yes
Scanning source code
Detected a Dockerfile app
? Choose an app name (leaving blank will default to 'folotoy-server-test')
? App folotoy-server-test already exists, do you want to launch into that app? Yes
Some regions require a paid plan (bom, fra).
See https://fly.io/plans to set up a plan.

? Choose a region for deployment: Tokyo, Japan (nrt)
App will use 'nrt' region as primary

Admin URL: https://fly.io/apps/folotoy-server-test
Hostname: folotoy-server-test.fly.dev
? Would you like to set up a Postgresql database now? No
? Would you like to set up an Upstash Redis database now? No
Wrote config file fly.toml
? Would you like to deploy now? Yes
Validating /Users/lewang/Playground/flyio/folotoy-server-self-hosting/flyio/folotoy-server/fly.toml
Platform: machines
✓ Configuration is valid
==> Building image
Remote builder fly-builder-long-voice-4357 ready
==> Building image with Docker
--> docker host: 20.10.12 linux x86_64
[+] Building 1.5s (16/16) FINISHED
 => [internal] load build definition from Dockerfile                                                                                                                                                            0.5s
 => => transferring dockerfile: 69B                                                                                                                                                                             0.4s
 => [internal] load .dockerignore                                                                                                                                                                               0.4s
 => => transferring context: 2B                                                                                                                                                                                 0.4s
 => [internal] load metadata for docker.io/lewangdev/folotoy-server:23.49.1.2-beta                                                                                                                              0.5s
 => [ 1/11] FROM docker.io/lewangdev/folotoy-server:23.49.1.2-beta@sha256:0867d135d9ca5f543b37383d923df6c588edf75c3d92685061ee1b1c143447be                                                                      0.0s
 => [internal] load build context                                                                                                                                                                               0.4s
 => => transferring context: 331B                                                                                                                                                                               0.4s
 => CACHED [ 2/11] RUN apt update && apt-get install -y mosquitto                                                                                                                                               0.0s
 => CACHED [ 3/11] RUN mkdir -p /etc/mosquitto                                                                                                                                                                  0.0s
 => CACHED [ 4/11] ADD mosquitto.conf /etc/mosquitto                                                                                                                                                            0.0s
 => CACHED [ 5/11] ADD acl.conf /etc/mosquitto                                                                                                                                                                  0.0s
 => CACHED [ 6/11] ADD passwd /etc/mosquitto                                                                                                                                                                    0.0s
 => CACHED [ 7/11] RUN chown -R mosquitto:mosquitto /etc/mosquitto && chmod 600 /etc/mosquitto/acl.conf && chmod 600 /etc/mosquitto/passwd                                                                      0.0s
 => CACHED [ 8/11] RUN /usr/bin/mosquitto_passwd -U /etc/mosquitto/passwd                                                                                                                                       0.0s
 => CACHED [ 9/11] RUN mkdir /config && mkdir /audio                                                                                                                                                            0.0s
 => CACHED [10/11] ADD roles.json /config                                                                                                                                                                       0.0s
 => CACHED [11/11] ADD start.sh /src                                                                                                                                                                            0.0s
 => exporting to image                                                                                                                                                                                          0.0s
 => => exporting layers                                                                                                                                                                                         0.0s
 => => writing image sha256:e73d13c236f4465516e10b11c025be772380eeb1285e14e7408dd9d84f4bab71                                                                                                                    0.0s
 => => naming to registry.fly.io/folotoy-server-test:deployment-01HHKY297S64B3KJMF63FAFRM4                                                                                                                      0.0s
--> Building image done
==> Pushing image to fly
The push refers to repository [registry.fly.io/folotoy-server-test]
a3a035cf56be: Layer already exists
2f981c2304f3: Layer already exists
5a744ccf4f8d: Layer already exists
ff57c4eda2a9: Layer already exists
6dba0f442acc: Layer already exists
f218c961a1f3: Layer already exists
4198c989d930: Layer already exists
f215cc9c49ba: Layer already exists
6388ab9780f4: Layer already exists
2d67c58a943e: Layer already exists
08275f2186b7: Layer already exists
5f70bf18a086: Layer already exists
5e755d97a32b: Layer already exists
fde529e4faf0: Layer already exists
d47851151144: Layer already exists
e8b749f6c4d7: Layer already exists
aa065d85cfdc: Layer already exists
10764c37bcbc: Layer already exists
deployment-01HHKY297S64B3KJMF63FAFRM4: digest: sha256:fd83b390d7cf072629d34d299831161de6625db28cc1695d0617103182573afe size: 4076
--> Pushing image done
image: registry.fly.io/folotoy-server-test:deployment-01HHKY297S64B3KJMF63FAFRM4
image size: 261 MB

Watch your deployment at https://fly.io/apps/folotoy-server-test/monitoring

-------
Updating existing machines in 'folotoy-server-test' with rolling strategy
  Finished deploying
-------
 ✔ Machine 32875165a03448 [app] update finished: success
-------

```

Once the deployment is completed, you can log in to the Fly.io dashboard to check the status.

<img width="1512" alt="image" src="https://github.com/FoloToy/folotoy-doc/assets/1455685/a45970d3-374d-4a90-b2cb-2ea11501069b" />

## Configuring MQTT Server for Your Toy

If the firmware version of your toy is v23.50.3.10 or later, follow these steps to configure the toy:

1. Put the toy into configuration mode.
2. Connect your phone or computer to the toy.
3. Fill in the following information for MQTT:

   - MQTT Server Address: folotoy-server-test.fly.dev
   - MQTT Server Port: 1883

If the firmware version of your toy is earlier than v23.50.3.10, you need to update the firmware to the latest version or install the following configuration and re-publish the program:

1. Log in to the flyio backend and find the IP address of the service. For example, my IP address is 149.*.*.218.

   ![image](https://github.com/FoloToy/folotoy-doc/assets/1455685/1e440c6a-1ebd-4c08-b812-c9ff7dc03155)

2. After modifying the fly.toml file, replace:

   ```
   SPEECH_UDP_SERVER_HOST = "folotoy-server-test.fly.dev"
   ```

   with:

   ```
   SPEECH_UDP_SERVER_HOST = "149.248.197.218"
   ```

3. Save the file and execute `fly launch --ha=false` in the command line.