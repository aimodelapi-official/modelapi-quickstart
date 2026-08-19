# ModelAPI Quickstart

Call leading AI models through one OpenAI-compatible endpoint in Python, JavaScript, or curl.

## 1. Create a key

[Create a ModelAPI account](https://aimodelapi.ai/auth/register?utm_source=github&utm_medium=repository&utm_campaign=quickstart) and copy your API key once. Store it in an environment variable:

```bash
export MODELAPI_API_KEY="sk-ama-YOUR_KEY"
```

## 2. Choose a language

### Python

```bash
python -m pip install openai
python python/quickstart.py
```

### JavaScript

```bash
npm install openai
node javascript/quickstart.mjs
```

### curl

```bash
curl https://api.aimodelapi.ai/v1/chat/completions \
  -H "Authorization: Bearer $MODELAPI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"claude-sonnet-5","messages":[{"role":"user","content":"Say hello in one sentence."}]}'
```

## Next steps

- [Model catalog](https://aimodelapi.ai/models?utm_source=github&utm_medium=repository&utm_campaign=quickstart)
- [API documentation](https://aimodelapi.ai/docs?utm_source=github&utm_medium=repository&utm_campaign=quickstart)
- [Pricing](https://aimodelapi.ai/pricing?utm_source=github&utm_medium=repository&utm_campaign=quickstart)
- [Status](https://aimodelapi.ai/status?utm_source=github&utm_medium=repository&utm_campaign=quickstart)

Do not commit `.env` files or API keys. Examples use a currently documented model ID; consult the live catalog before production deployment.

