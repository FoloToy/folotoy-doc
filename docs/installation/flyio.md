---
title: 在 Fly.io 上安装 FoloToy 服务器程序
sidebar_label: Fly.io
---

本文提供了在[Fly.io](https://fly.io)上安装 FoloToy 服务器程序的必要步骤。


## 前置准备

* 注册 [fly.io](https://fly.io) 的账号并绑定好银行卡。
* 准备好一个 OpenAI 的 apiKey，点击这里注册 [OpenAI](https://platform.openai.com/api-keys)，如果无法注册 OpenAI， 也可以注册 [MagickChat](https://one-api.magickchat.com/) 服务，领取一个测试使用的 apiKey。

## 开始安装部署

如果本机没有安装 git 命令，也需要安装好 git 和 flyio 的命令，部署全程都需要使用命令，非常的 Geek。

* [安装 git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [安装 flyctl](https://fly.io/docs/hands-on/install-flyctl/)

### 获取部署需要的配置文件

打开你的终端，在 macOS 上可以使用自带的 Terminal.app

```
git clone https://github.com/FoloToy/folotoy-server-self-hosting.git
```

### 修改配置文件

进入目录 `./folotoy-server-self-hosting/flyio/folotoy-server` ，该目录下的文件如下：

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

需要根据自己情况修改的文件如下：

* fly.toml
* passwd

如果希望自行定义玩具的角色，还可以修改 roles.json 文件。


#### 修改 fly.toml 文件

把 fly.toml 配置文件中所有的 <your_app_name> 改为自己定义的：

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
例如我给我的应用取名是 folotoy-server-test，那么我的 fly.toml 是这样的：

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
#### 修改 passwd 文件

在 passwd 文件中添加自己 mqtt 服务账号，玩具的 SN 和 key。

* 例如我的玩具 SN 和 Key 分别是 F234103026 和 JvRjTtz5brsN，这里 SN 和 key 可以从包装上获取，没有了也可以用附带的 USB 线连接电脑和玩具，再访问 tool.folotoy.com 来查看
* 如果有多个玩具，请在这个文件中每一个玩具添加一行
* 我的 mqtt 服务账号用户名和密码分别是 folotoy 和 Ev6****cDB， 这里用户名请保持为 folotoy，密码可以设置为任意的字符串
* **注意**, passwd 这个文件不能有空行，最后一行不能为空

例如我的 passwd 如下
```
folotoy:Ev6****cDB
F234103026:JvRjTtz5brsN
```

#### 开始执行 flyio 命令

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

这样就创建好了一个app，用浏览器打开 fly.io 的后台，进入刚刚创建的项目，来添加几个需要用到的密码配置。

<img width="1515" alt="image" src="https://github.com/FoloToy/folotoy-doc/assets/1455685/58a3a4c0-bae8-481c-91ed-5f0f5476d286" />

<img width="1486" alt="image" src="https://github.com/FoloToy/folotoy-doc/assets/1455685/4a82c4cb-40f4-485e-9a29-9decbbe4e4ca" />

<img width="1531" alt="image" src="https://github.com/FoloToy/folotoy-doc/assets/1455685/92eadfca-7f98-476b-87a5-5a8cfd16cfd8" />

一共需要添加以下4个变量, 其中 OPENAI_OPENAI_KEY, OPENAI_TTS_KEY 和 OPENAI_WHISPER_KEY 可以用同一个 apiKey

* MQTT_PASSWORD ，这个密码就是前面passwd文件中使用的密码，请保持一致
* OPENAI_OPENAI_KEY，这个是 OpenAI 的 apiKey
* OPENAI_TTS_KEY，这个是 OpenAI 的 apiKey
* OPENAI_WHISPER_KEY，这个是 OpenAI 的 apiKey

也可以通过修改目录下的 set_secrets.sh 来通过执行命令行 ./set_secrets.sh 创建，效果与在flyio后台添加是一样的，例如我的 set_secrets.sh 内容如下：

```
fly secrets set MQTT_PASSWORD="Ev6****cDB"
fly secrets set OPENAI_OPENAI_KEY="sk-MOfAmt06v*********************uPx33lKL"
fly secrets set OPENAI_TTS_KEY="sk-MOfAmt06v*********************uPx33lKL"
fly secrets set OPENAI_WHISPER_KEY="sk-MOfAmt06v*********************uPx33lKL"

```

完成前面的步骤之后，执行：fly launch --ha=false

以下这两处选择 N

- Would you like to set up a Postgresql database now? N
- Would you like to set up an Upstash Redis database now? N

选择离自己近的区域：

<img width="1458" alt="image" src="https://github.com/FoloToy/folotoy-doc/assets/1455685/e09badf8-02f4-40a5-b3a2-80ddd11b068e" />

我的操作如下：
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

这样部署就完成了，进入 flyio 后台查看一下状态

<img width="1512" alt="image" src="https://github.com/FoloToy/folotoy-doc/assets/1455685/a45970d3-374d-4a90-b2cb-2ea11501069b" />


## 为自己玩具配置 MQTT 服务器

如果玩具固件版本在 v23.50.3.10 之后，在玩具进入配置模式后，用手机或者电脑连接玩具，在 MQTT 处填写如下

* MQTT Server Address: folotoy-server-test.fly.dev
* MQTT Server Port: 1883

如果玩具固件在 v23.50.3.10 之前，需要更新固件至最新版版本，或者安装下面的配置重新发布程序

* 登录 flyio 后台，查看到服务的 ip 地址，例如我的 ip 是 149.*.*.218

<img width="1624" alt="image" src="https://github.com/FoloToy/folotoy-doc/assets/1455685/1e440c6a-1ebd-4c08-b812-c9ff7dc03155" />

修改 fly.toml 文件之后再重新发布：

把
```
  SPEECH_UDP_SERVER_HOST = "folotoy-server-test.fly.dev"
```

修改为

```
  SPEECH_UDP_SERVER_HOST = "149.248.197.218"
```

保存之后，在命令行中执行 fly launch --ha=false
