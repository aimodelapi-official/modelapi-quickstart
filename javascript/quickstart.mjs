import OpenAI from "openai";

if (!process.env.MODELAPI_API_KEY) {
  throw new Error("Set MODELAPI_API_KEY before running this example.");
}

const client = new OpenAI({
  apiKey: process.env.MODELAPI_API_KEY,
  baseURL: "https://api.aimodelapi.ai/v1",
});

const response = await client.chat.completions.create({
  model: "claude-sonnet-5",
  messages: [{ role: "user", content: "Say hello in one sentence." }],
});

console.log(response.choices[0].message.content);

