module.exports = {
  docs: [
    {
      type: "doc",
      id: "faq",
    },
    {
      type: "category",
      label: "Server Installation",
      items: [
        "installation/start",
        {
          type: "category",
          label: "Server Installation File",
          items: [
            "configuration/environment_variables",
            "configuration/roles_config",
            "configuration/advanced_roles_config",
          ]
        },

        {
          type: "category",
          label: "Server Installation Method",
          items: [
            "installation/docker",
            "installation/1panel",
            "installation/synology-nas",
            "installation/flyio",
            "installation/windows-wsl2",
          ]
        },
        {
          type: "category",
          label: "Roles Detailed Settings",
          items: [
            {
              type: "category",
              label: "STT Configuration",
              items: [
                "configuration/stt/openai-whisper",
                "configuration/stt/azure-whisper",
                "configuration/stt/azure-stt",
                "configuration/stt/dify-stt",
                "configuration/stt/aliyun-asr",
                "configuration/stt/cf-workers-ai-asr",
                "configuration/stt/volcengine-asr",
              ],
            },
            {
              type: "category",
              label: "LLM Configuration",
              items: [
                "configuration/llm/openai",
                "configuration/llm/azure-openai",
                "configuration/llm/gemini",
                "configuration/llm/dify",
                "configuration/llm/qianfan",
                "configuration/llm/xiaodu",
                "configuration/llm/moonshot",
                "configuration/llm/groq",
                "configuration/llm/ollama",
                "configuration/llm/anthropic",
                "configuration/llm/zhipu",
                "configuration/llm/lingyiwanwu",
                "configuration/llm/dashscope",
                "configuration/llm/spark-desk",
                "configuration/llm/minimax",
                "configuration/llm/aws-bedrock",
                "configuration/llm/fastgpt",
                "configuration/llm/coze",
                "configuration/llm/cf-workers-ai",
                "configuration/llm/volcengine",
    
              ],
            },
            {
              type: "category",
              label: "TTS Configuration",
              items: [
                "configuration/tts/openai-tts",
                "configuration/tts/azure-tts",
                "configuration/tts/azure-openai-tts",
                "configuration/tts/elevenlabs",
                "configuration/tts/edge-tts",
                "configuration/tts/aliyun-tts",
                "configuration/tts/dify-tts",
                "configuration/tts/minimax-tts",
                "configuration/tts/volcengine-tts",
                "configuration/tts/siliconflow-tts",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Guides",
          items: ["guides/emqx"],
        },
        {
          type: "category",
          label: "Integrations",
          items: ["integrations/mqtt"],
        },
        {
          type: "category",
          label: "Maintenance",
          items: ["upgrading"],
        },
      ],
    },
    {
      type: "category",
      label: "Toy PCB Replacement",
      items: [
        "toy-pcb-replacement/video-tutorial",
        "toy-pcb-replacement/alilo-g6",
        "toy-pcb-replacement/alilo-f6",
        "toy-pcb-replacement/mitu-c1",
      ],
    },
  
    {
      type: "category",
      label: "Octopus Dev Suit",
      items: ["dev-suit/quickstart",  "dev-suit/mini", "dev-suit/ultra", "dev-suit/wake_up", "dev-suit/partsinfo", "dev-suit/configure_keys",],
    },
    {
      type: "category",
      label: "Web Tool",
      items: ["web-tool", "esp-tool"],
    },
    {
      type: "category",
      label: "AT Command",
      items: ["at-command",],
    },
    {
      type: "category",
      label: "Folotoy Manual",
      items: ["manual/folotoy-manual", "manual/cactus-manual", "manual/magicBox-manual", "manual/wifi-connect"],
    },
    {
      type: "doc",
      id: "contributing",
    },
    {
      type: "doc",
      id: "community",
    },
  ],
};
