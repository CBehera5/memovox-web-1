import Link from 'next/link';
import { getAllBlogs } from '@/lib/blogs';

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <ul className="space-y-4">
        {blogs.map((blog: any) => (
          <li key={blog.slug} className="border p-4 rounded bg-white">
            <Link href={`/blogs/${blog.slug}`}
              className="text-xl font-semibold text-indigo-600 hover:underline">
              {blog.title || blog.slug}
            </Link>
            <p className="text-gray-600 mt-2">{blog.content.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
