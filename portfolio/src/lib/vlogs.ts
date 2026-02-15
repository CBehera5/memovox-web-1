import fs from 'fs';
import path from 'path';

export async function getAllVlogs() {
  const dir = path.join(process.cwd(), 'src/content/vlogs');
  const files = fs.readdirSync(dir);
  return files.map(filename => {
    return {
      slug: filename.replace(/\.[^/.]+$/, ''),
      filename,
    };
  });
}
