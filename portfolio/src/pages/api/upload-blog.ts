import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }
    const filePath = path.join(process.cwd(), 'src/content/blogs', `${title.replace(/\s+/g, '-')}.md`);
    fs.writeFileSync(filePath, content);
    return res.status(201).json({ message: 'Blog uploaded successfully.' });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
