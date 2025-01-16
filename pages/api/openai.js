import OpenAI from 'openai'

const openai = new OpenAI({
  dangerouslyAllowBrowser: false,
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req, res) {
  res.status(200).json({ output: req.body.tools })

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: req.body.messages,
      tools: req.body.tools,
    })

    res.status(200).json({ output: completion.choices[0] })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data', message: err })
  }
}
