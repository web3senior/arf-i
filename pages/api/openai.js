import OpenAI from 'openai'
const openai = new OpenAI({
  dangerouslyAllowBrowser: false,
  apiKey: process.env.OPENAI_API_KEY,
})


let tools = [
  // {
  //   type: "function",
  //   function: {
  //     name: "get_weather",
  //     description: "Get current temperature for a given location.",
  //     parameters: {
  //       type: "object",
  //       properties: {
  //         location: {
  //           type: "string",
  //           description: "City and country e.g. Bogotá, Colombia",
  //         },
  //       },
  //       required: ["location"],
  //       additionalProperties: false,
  //     },
  //     strict: true,
  //   },
  // },
  {
    type: "function",
    function: {
      name: "get_fish_holders",
      description:
        "Getting wallets that currently holding $FISH token",
      parameters: {},
      strict: false,
    },
  },
];
let messages = [
  // {
  //   role: "system",
  //   content: "you're a good assistant. in the end mention about Aratta Labs",
  // },
  {
    role: "user",
    content: "Which wallets are currently holding $FISH?",
  },
];

export default async function handler(req, res) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages:  [
        // {
        //   role: "system",
        //   content: "you're a good assistant. in the end mention about Aratta Labs",
        // },
        {
          role: "user",
          content: "Which wallets are currently holding $FISH?",
        },
      ],
    });
  
  
  res.status(200).json({output: completion.choices[0].message})
  } catch (err) {
    res.status(500).json({ error: 'failed to load data', message: err })
  }



  // if (
  //   completion.choices[0].message.tool_calls[0].function.name ===
  //   `get_fish_holders`
  // ) {
  //   console.log(`yes`)
  //   const toolCall = completion.choices[0].message.tool_calls[0];
  //   //const args = JSON.parse(toolCall.function.arguments);

  //   const result = await get_fish_holders();
  //   console.log(result)
  //   messages.push(completion.choices[0].message); // append model's function call message
  //   messages.push({
  //     // append result message
  //     role: "tool",
  //     tool_call_id: toolCall.id,
  //     content: result.total.toString(),
  //   });
  //   const completion2 = await openai.chat.completions.create({
  //     model: "gpt-4o-mini",
  //     messages,
  //     tools,
  //   });

  //    res.status(200).json(completion2.choices[0].message.content)
  // } else {
  //   res.status(500).json(completion.choices[0].message);
  // }

}
