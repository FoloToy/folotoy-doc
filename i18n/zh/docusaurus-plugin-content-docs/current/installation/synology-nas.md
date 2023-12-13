---
title: 基于群晖NAS部署 FoloToy 服务说明
sidebar_label: 群晖 NAS
---

本文由群友 Michael 编写，此处仅作为备份，请通过原文进行阅读讨论。原文地址：[基于群晖NAS部署FoloToy 服务说明](https://tnu7owoxao.feishu.cn/wiki/HzFKwA3QPigdcCkn3VmckSPSn0g)

本文提供了在[群晖 NAS](https://www.synology.cn/)上安装 FoloToy 服务器的必要步骤。

## 说明

- 用于自托管 FoloToy 服务的 docker 配置文件
- 本教程适用于 INTEL平台 的 DSM 系统，本次演示使用的是 DS220+

## 部署前准备

- OpenAI key 或者 Azure OpenAI Key

## 环境依赖

- docker，新版本名称为 Container Manager

## 快速开始

- 前往项目仓库 https://github.com/FoloToy/folotoy-server-self-hosting 下载项目配置文件
- 修改项目目录下的 docker-compose.yml 配置文件
  - 将 docker-compose.yml 中所有的 192.168.52.164 改成您群晖设备的局域网IP 地址。
  - AUDIO_DOWNLOAD_URL: http://192.168.52.164:8082
  - SPEECH_UDP_SERVER_HOST: 192.168.52.164
  - 将 docker-compose.yml 中的 OPENAI_OPENAI_KEY 或 AZURE_OPENAI_KEY 修改成您的 OpenAI key 或 Azure OpenAI Key
  - OPENAI_OPENAI_KEY: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  - AZURE_OPENAI_KEY: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  - 保存文件
- 上传文件项目文件到 File Station 的 docker 目录下，如图
    <img src="https://user-images.githubusercontent.com/1455685/281663729-436f18ee-30f2-4204-a1a7-927ff041b71f.png" />
- 打开 Container Manager 创建项目，如图：
    <img src="https://user-images.githubusercontent.com/1455685/281663767-058e0b4d-56f6-434a-9f08-2d84f700c0be.png" />

## 更新配置

- 打开 Container Manager，进入项目详情
- 点击停止按钮，修改配置信息
- 点击保存，勾选构建并启动项目（重建映像）选项，点击确定
- 等待重启完成

## 注意事项

- 本次部署的前置条件是在路由器上处理好网络问题，群晖可以直接请求openai接口。
- 使用IP部署没有问题，域名部署可能不能正常工作。

## 致谢

* [基于群晖NAS部署FoloToy 服务说明](https://tnu7owoxao.feishu.cn/wiki/HzFKwA3QPigdcCkn3VmckSPSn0g)