s = "openai-whisper, azure-stt, azure-whisper, dify-stt, aliyun-asr"
import os
for n in s.split(','):
    nn = n.strip()
    print(f"* [{nn}](./stt/{nn}.md)")
