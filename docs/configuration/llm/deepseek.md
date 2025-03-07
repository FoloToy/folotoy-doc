---
title: DeepSeek Configuration
sidebar_label: DeepSeek
---

## DeepSeek

https://platform.deepseek.com/

## Configurable Parameter List

| Parameter Name | Parameter Description | Default Value |
| :--            | :--                    |  :--          |
| api_base       | API base address       |  https://api.deepseek.com   | 
| key            | DeepSeek API key       | sk-AAAAAAAAAAAAA |
| model          | Large model name: deepseek-reasoner, deepseek-chat | deepseek-reasoner |
| max_tokens     | Maximum input tokens   | 400 |
| temperature    | Use sampling temperature to control the randomness of the output. The value ranges from 0 to 2. A higher temperature (e.g., 0.8) will make the output more random and produce unexpected results. A lower temperature (e.g., 0.2) will make the output more focused and closer to the given input content | 0.7 |
| read_thought_enabled | Whether to read out the thinking text | true |

## Configuration Example

   ```yml title="roles.json"
  {
    "1": {  
        "start_text": "Hello, I'm Bunny. How can I help you?",
        "prompt": "You play the role of a child's buddy named Bunny. You are kind, lively, and lovable. You are always full of love for children, and you often praise and encourage them. Provide interesting and innovative answers in language that a 5-year-old can easily understand. Ask for her opinion on the chat topic each time to stimulate her thinking and curiosity.",
        "llm_type": "deepseek",
        "llm_config": {
            "api_base": "https://api.deepseek.com",
            "key": "sk-TESTAAAAAAAAAAAAa",
            "model": "deepseek-reasoner",
            "max_tokens": 1024,
            "temperature": 0.7,
            "read_thought_enabled": true
        }
    }
  }
   ```
Or

   ```yml title="docker-compose.yml"
    DEEPSEEK_API_BASE: "https://api.deepseek.com"
    DEEPSEEK_MODEL: "deepseek-reasoner"
    DEEPSEEK_MAX_TOKENS: 1024
    DEEPSEEK_TEMPERATURE: 1.0
    DEEPSEEK_READ_THOUGHT_ENABLED: "true"
   ```