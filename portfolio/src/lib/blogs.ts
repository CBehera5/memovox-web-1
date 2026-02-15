import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getAllBlogs() {
  const dir = path.join(process.cwd(), 'src/content/blogs');
  const files = fs.readdirSync(dir);
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
