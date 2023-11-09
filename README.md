# FoloToy Documents Website

This documents website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator and automatically deployed to [docs.folotoy.com](https://docs.folotoy.com).

[English](./README.md) | [简体中文](./README.zh_CN.md)

### Installation

```bash
$ npm i
```

### Local Development

```bash
$ npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

```bash
$ npm run start-zh
```

This command starts a local development server and open up a browser window with opening Chinese pages.

### Build

```bash
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
