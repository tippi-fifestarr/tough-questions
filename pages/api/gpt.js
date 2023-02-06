import { Configuration, OpenAIApi } from "openai";
// import { CONSTANTS } from "../../utils/CONSTANTS";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
  const { prefix, data } = req.body;
  const prompt = `${prefix}: ${JSON.stringify(data)}`;
  console.log("prompt", prompt);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 550,
  });
  const basePromptOutput = baseCompletion.data.choices.pop();
  console.log("basePromptOutput", basePromptOutput);

  res.status(200).json({ output: basePromptOutput });
};

// should return a prompt like this:
/* module 1, introduction to topic: ... */

export default handler;
