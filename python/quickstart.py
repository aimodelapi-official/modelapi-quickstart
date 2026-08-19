import os
from openai import OpenAI

api_key = os.environ.get("MODELAPI_API_KEY")
if not api_key:
    raise SystemExit("Set MODELAPI_API_KEY before running this example.")

client = OpenAI(api_key=api_key, base_url="https://api.aimodelapi.ai/v1")
response = client.chat.completions.create(
    model="claude-sonnet-5",
    messages=[{"role": "user", "content": "Say hello in one sentence."}],
)
print(response.choices[0].message.content)

