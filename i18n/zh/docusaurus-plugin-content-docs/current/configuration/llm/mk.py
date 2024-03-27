s = "openai, azure-openai, gemini, dify, qianfan, xiaodu, moonshot, groq, ollama, anthropic, dashscope, spark-desk, minimax, aws-bedrock, zhipu, lingyiwanwu"
import os
for n in s.split(','):
    nn = n.strip()
    print(f"* [{nn}](./llm/{nn}.md)")
