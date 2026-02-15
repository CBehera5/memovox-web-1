import { getAllBlogs } from '@/lib/blogs';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog: any) => ({ slug: blog.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'src/content/blogs', `${params.slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{data.title || params.slug}</h1>
      <article className="prose prose-lg" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
