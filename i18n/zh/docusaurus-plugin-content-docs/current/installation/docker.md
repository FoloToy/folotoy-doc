---
title: 通过 Docker 安装
sidebar_label: Docker
---

本文档提供了在运行 Docker 的任何系统上安装 FoloToy 服务器的必要步骤。

如果您在家庭网络上运行 FoloToy 服务器，建议使用此设置，否则您的 [EMQX](https://github.com/emqx/emqx) 可能会有风险。如果您打算直接将 [EMQX](https://github.com/emqx/emqx) 暴露在互联网上，请查看[高级指南](../guides/emqx.md)。

:::caution
在开始部署前，请先按照[开始](../installation/start)中写的，准备好 VPS, `docker-compose.yml` 和 `roles.json`

:::

## 安装说明

1. 创建一个目录，例如在你的 Home 目录下创建目录 `folotoy-server`

  ```bash
  cd ~
  mkdir folotoy-server
  mkdir folotoy-server/config

  # 或者
  #mkdir -p folotoy-server/config
  ```

  接下来的操作都在 `folotoy-server` 目录中进行

2. 创建一个 `docker-compose.yml` 文件，将准备好的文件粘贴到文件中


3. 在 config 目录下创建一个 `roles.json` 文件，将准备好的文件粘贴到文件中

4. 使用`docker compose up`命令启动Docker容器。要在后台运行容器，请添加`-d`标志：

   ```bash
   docker compose up -d
   ```

## [更新服务器镜像](../upgrading.mdx)

要将正在运行的FoloToy服务器配置更新到最新版本，请运行以下命令：

```bash
  docker compose pull folotoy
  docker compose up folotoy -d
```
