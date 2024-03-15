---
title: EMQX 的高级安装说明
---

如果您希望在互联网上公开使用 FoloToy 服务器，强烈建议确保 EMQX 服务的安全，并仅允许通过密码访问 EMQX。

## 视频教程

<iframe width="100%" height="600" src="https://www.youtube.com/embed/3yW5260OTwY?si=SmQ_KHIQhXywoR30" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 步骤

**EMQX 的默认配置允许任何匿名客户端访问。按照以下步骤，您可以使您的 EMQX 服务仅允许来自您自己设备的连接。**

### 修改默认密码

- Open `http://your_external_server_ip:18083` in your browser(Default username： `admin`, Default password `public`. Please change your password after login)

### 玩具和 folotoy-server 身份验证

- 从侧边栏`访问控制` > `身份验证`创建一个基于密码的数据库
- 从侧边栏`访问控制` > `身份验证` > `你创建的数据库` > `用户管理`创建一个新的**超级用户**（用户名和密码应该是在docker-compose.yml中定义的（MQTT_USERNAME和MQTT_PASSWORD）），推荐使用用户名为`folotoy`
- 从侧边栏`访问控制` > `身份验证` > `你创建的数据库` > `用户管理`创建一个新用户（用户名和密码可以在使用 Web 串口工具连接设备后，在日志中找到：https://tool.folotoy.com/index>Console），或者在贴有二维码的包装上找到 sn 和 key：
   - sn 将作为用户名
   - key 将作为密码
- 如果您想要使用集成 MQTT，还需要创建一个名为 `integration` 的用户

### 授权

- 从侧边栏`授权` > `授权`创建一个基于文件的授权

使用创建授权文件：

```yml title="acl.erlang"
%%--------------------------------------------------------------------
%% -type(ipaddr() :: {ipaddr, string()}).
%%
%% -type(ipaddrs() :: {ipaddrs, [string()]}).
%%
%% -type(username() :: {user | username, string()} | {user | username, {re, regex()}}).
%%
%% -type(clientid() :: {client | clientid, string()} | {client | clientid, {re, regex()}}).
%%
%% -type(who() :: ipaddr() | ipaddrs() | username() | clientid() |
%%                {'and', [ipaddr() | ipaddrs() | username() | clientid()]} |
%%                {'or',  [ipaddr() | ipaddrs() | username() | clientid()]} |
%%                all).
%%
%% -type(action() :: subscribe | publish | all).
%%
%% -type(topic_filters() :: string()).
%%
%% -type(topics() :: [topic_filters() | {eq, topic_filters()}]).
%%
%% -type(permission() :: allow | deny).
%%
%% -type(rule() :: {permission(), who(), action(), topics()} | {permission(), all}).
%%--------------------------------------------------------------------

{allow, {username, {re, "^dashboard$"}}, subscribe, ["$SYS/#"]}.

{allow, {ipaddr, "127.0.0.1"}, all, ["$SYS/#", "#"]}.

{deny, all, subscribe, ["$SYS/#", {eq, "#"}]}.

%% server acl
{allow, {username, "folotoy"}, subscribe, ["/user/folotoy/+/thing/event/post", "/user/folotoy/+/thing/command/callAck"]}.
{allow, {username, "folotoy"}, publish, ["/user/folotoy/+/integration/event/post", "/user/folotoy/+/thing/command/call"]}.

%% toy acl
{allow, {username, {re, "^[0-9a-zA-Z]{8,32}$"}}, subscribe, ["/user/folotoy/${username}/thing/command/call", "/user/folotoy/${username}/thing/event/postAck"]}.
{allow, {username, {re, "^[0-9a-zA-Z]{8,32}$"}}, publish, ["/user/folotoy/${username}/thing/command/callAck", "/user/folotoy/${username}/thing/event/post"]}.

%% integration acl
{allow, {username, "integration"}, subscribe, ["/sys/folotoy/+/thing/event/post", "/sys/configAck"]}.
{allow, {username, "integration"}, publish, ["/sys/config"]}.

{deny, all}.

```