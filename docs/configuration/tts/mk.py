s = "openai-tts, azure-tts, azure-openai-tts, elevenlabs, edge-tts, aliyun-tts, dify-tts"
import os
for n in s.split(','):
    nn = n.strip()
    print(f"* [{nn}](./tts/{nn}.md)")
