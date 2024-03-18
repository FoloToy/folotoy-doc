---
title: Advanced installation with EMQX
---

In case you wish to make FoloToy Server publicly available on the Internet, it is strongly recommended to secure the EMQX service and allow access to EMQX only with a password. 

## Video

<iframe width="100%" height="600" src="https://www.youtube.com/embed/3yW5260OTwY?si=SmQ_KHIQhXywoR30" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Instructions

**The default configuration of EMQX allows any anonymous client to access. You can make your EMQX service only allow connections from your own devices by following these steps.**

### Modify default password

- Open `http://your_external_server_ip:18083` in your browser(Default username： `admin`, Default password `public`. Please change your password after login)

### Toy and folotoy-server Authentication
- Create a `Password-Based database`  from sidebar `Access Control` > ` Authentication`
- Create a new **Superuser** from sidebar `Access Control` > ` Authentication` > `database_you_created` > `User Management`. (`Username` and `Password` should be the ones defined in `docker-compose.yml`  (`MQTT_USERNAME` and `MQTT_PASSWORD`)), recommended username is `folotoy`
- Create a new User from sidebar `Access Control` > ` Authentication` > `database_you_created` > `User Management`. (`Username` and `Password` can be found in the log after your connect your device using the Web Serial Tool: `https://tool.folotoy.com/index` > `Console`) or on the case with qrcode:
  - sn will be used as username
  - key will be used as passwd
- If you want to use integration mqtt api, you also need to create a username: `integration`

### Authorization

Create Authorization with File:

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