---
title: Installing via Docker
sidebar_label: Docker
---

This document provides the necessary steps to install the FoloToy server on any system running Docker.

If you are running the FoloToy server on a home network, it is recommended to use this setup, otherwise your [EMQX](https://github.com/emqx/emqx) may be at risk. If you plan to expose [EMQX](https://github.com/emqx/emqx) directly to the internet, please refer to the [Advanced Guide](../guides/emqx.md).

:::caution
Before starting the deployment, please follow the instructions in [Getting Started](../installation/start) to prepare the VPS, `docker-compose.yml`, and `roles.json`.
:::

## Installation Instructions

1. Create a directory, for example, create a directory `folotoy-server` in your Home directory

  ```bash
  cd ~
  mkdir folotoy-server
  mkdir folotoy-server/config

  # Or
  # mkdir -p folotoy-server/config
  ```

  All further operations will be carried out in the `folotoy-server` directory

2. Create a `docker-compose.yml` file and paste the prepared content into the file

3. Create a `roles.json` file in the config directory and paste the prepared content into the file

4. Start the Docker container using the `docker compose up` command. To run the container in the background, add the `-d` flag:

   ```bash
   docker compose up -d
   ```

## [Updating Server Image](../upgrading.mdx)

To update the configuration of the running FoloToy server to the latest version, run the following commands:

```bash
docker compose pull folotoy
docker compose up folotoy -d
```