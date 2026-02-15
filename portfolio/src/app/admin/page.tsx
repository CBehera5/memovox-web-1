import { useState } from 'react';

export default function AdminBlogUpload() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/upload-blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    const data = await res.json();
    setMessage(data.message || data.error);
    if (res.ok) {
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Upload a Blog</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border p-2 rounded min-h-[150px]"
          placeholder="Blog Content (Markdown supported)"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600" type="submit">
          Upload Blog
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
}
