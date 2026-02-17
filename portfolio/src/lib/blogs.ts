import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getAllBlogs() {
  const dir = path.join(process.cwd(), 'src/content/blogs');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return [];
  }
  
  const files = fs.readdirSync(dir).filter(file => file.endsWith('.md'));
  return files.map(filename => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
      content,
    };
  });
}
