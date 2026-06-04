export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return res.status(500).json({
      error: 'Anthropic API key not configured. Add ANTHROPIC_API_KEY to your Vercel environment variables.'
    });
  }

  const { system, content } = req.body;

  // Convert content parts from the frontend's format to Anthropic's format.
  // Images come in as data URLs ("data:image/jpeg;base64,...") and need to be split out.
  const anthropicContent = (content || []).map(part => {
    if (part.type === 'text') return part;
    if (part.type === 'image_url') {
      const url = part.image_url?.url || '';
      const [header, data] = url.split(',');
      const media_type = (header.match(/data:(.*);base64/) || [])[1] || 'image/jpeg';
      return { type: 'image', source: { type: 'base64', media_type, data } };
    }
    return part;
  });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 4096,
        system,
        messages: [{ role: 'user', content: anthropicContent }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || `API error ${response.status}`
      });
    }

    // Return in the same shape the frontend already parses (mirrors OpenAI's response shape)
    return res.status(200).json({
      choices: [{ message: { content: data.content[0].text } }]
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
