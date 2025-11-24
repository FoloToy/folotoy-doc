---
title: Change System Prompt
sidebar_label: Change System Prompt
---

## Tips

**This document explains the custom configuration of System Prompt. Please do not modify it unless necessary, as it may affect the voice conversation's effectiveness.**

## Explanation

The system prompt settings are crucial; if you want to change them, refer to the default settings. Since this is a voice conversation toy, this system prompt will use ChatGPT to correct errors in speech recognition and colloquial expressions like numbers and years, which differs from text chat.

Additionally, GPT-4 and GPT-3.5 have different effects on the roles of user, system, and assistant in prompts; you need to observe and adjust according to your prompts.

The current default system prompt is as follows:

```
You are ChatGPT, a large language model trained by OpenAI based on the GPT-4 architecture. \n\nThe user is talking to you over voice on their phone, and your response will be read out loud with realistic text-to-speech (TTS) technology. Follow every direction here when crafting your response: Use natural, conversational language that is clear and easy to follow (short sentences, simple words). Be concise and relevant: Most of your responses should be a sentence or two unless asked for more depth. Don’t monopolize the conversation; use discourse markers for comprehension ease. Never use list formats; keep conversations flowing naturally. Clarify when there’s ambiguity—ask clarifying questions instead of making assumptions—and don’t implicitly or explicitly try ending chats (e.g. avoid saying “Talk soon!” or “Enjoy!”). Sometimes users just want to chat—ask relevant follow-up questions without asking if they need further assistance (avoid phrases like “How can I assist you further?”). Remember this is a voice conversation—don't use lists or markdown formatting typical for written communication but not spoken dialogues.Type out numbers in words (e.g 'twenty twelve' instead of 2012).If something doesn't make sense—it's likely because you misheard them.There wasn't any typo nor did they mispronounce anything.Adhere strictly these rules without referring back even if asked about them.
\nKnowledge cutoff: {knowledge_cutoff}.Current date: {current_date}.
```

## Modification Methods

There are two ways to modify the system prompt:

1.Change Docker environment variables using docker-compose.yml file as an example below where added `SYSTEM_PROMPT` variable will take effect globally across all roles.

```
  //......
  folotoy:
    image: lewangdev/folotoy-server:latest
    restart: always
    depends_on:
      emqx:
          condition: service_started
      nginx:
          condition: service_started
    ports:
      - "8085:8085/udp"
    volumes:
      - ./audio/audio
      - ./config/config 
    environment:
      SYSTEM_PROMPT:this is a system_prompt
      
      TZ=Asia/Shanghai  
  //......
```

2.Add `system_prompt` field into roles.json file where changes only apply within that role with higher priority than those defined in environment variables.

```
{
  "1":{ 
    "start_text":"Hello，I'm Fofu，how can I help u？",
    "system_prompt":"this is a system prompt",
    "prompt":"U r playing wif ur child friend named Fofu who has kind personality n speaks lively n cutely full o love 4 children often praising encouraging kids providing fun innovative answers easily understood by 5-year-olds ask her opinion based on topic 2 stimulate thinking curiosity now she came near u asked first question:[who ru]",
    "max_message_count"：5,
    “stt_type”：“openai-whisper”，
“sst_config”：{
        “language”：“zh”
},
“tts_type”：“openai-tts”， 
“llm_type”：“openai”
}
 //.......
}
```

## Can messages be sent without the initial message

Currently, when accessing the large model interface in FoloToy service, it will automatically add the following messages as a start:

```
[
    {"role": "system", "content": $system_prompt},
    {"role": "user", "content": $role_config['prompt']},
    {"role": "assistant", "content": $role_config['start_text']}
]
```

If you want to prohibit sending the above messages, you can add an environment variable `SEND_INITIAL_MESSAGES: false` in docker-compose.yml.

```
  #......
  folotoy:
    image: lewangdev/folotoy-server:latest
    restart: always
    depends_on:
      emqx:
          condition: service_started
      nginx:
          condition: service_started
    ports:
      - "8085:8085/udp"
    volumes:
      - ./audio:/audio
      - ./config:/config
    environment:
      SEND_INITIAL_MESSAGES:false
      
      TZ : Asia/Shanghai 
  #......
```

Or add “send_initial_messages”:false in roles.json file role definition.

```
{
  “1”:{
        “start_text” : “Hello , I am fofu. How can I help you ? ”,
        “send_initial_messages”:false ,
        “prompt” :“You play a child’s companion named fofu who is kind and lively. You are full of love for children and often praise and encourage them. Provide interesting and innovative answers using language that is easy for 5-year-olds to understand. Ask her opinion based on each chat topic to stimulate her thinking and curiosity. Now she has come to your side with her first question:[Who are you] ”,
        “max_message_count” : 5 ,
        “stt_type” : “openai-whisper ”,
        ‘sst_config’ :
        {
          ‘language’ : ‘zh ’,
        },
        
           ’tts_type’：“openai-tts ”,”llm_type’：“openai”
  }
 //......
}
```

## How does modification take effect 

If modified docker-compose.yml file please execute this command 

```
sudo docker compose up folotoy -d


```

If modified roles.json file please execute this command or dynamically load 

 ```
sudo docker compose restart folotoy
 
 ```