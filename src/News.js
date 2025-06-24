import React, { useEffect, useState } from 'react';
import { getNews, addNews, updateNews, deleteNews } from './api';

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: '', content: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    setLoading(true);
    getNews()
      .then(res => {
        setNews(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (editingId) {
      await updateNews(editingId, form);
      setEditingId(null);
    } else {
      await addNews(form);
    }
    setForm({ title: '', content: '' });
    fetchNews();
  };

  const handleEdit = item => {
    setForm({ title: item.title, content: item.content });
    setEditingId(item.id);
  };

  const handleDelete = async id => {
    await deleteNews(id);
    fetchNews();
  };

  if (loading) return <div>Loading news...</div>;

  return (
    <div>
      <h2>News/Updates</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Add'} News</button>
        {editingId && (
          <button type="button" onClick={() => { setEditingId(null); setForm({ title: '', content: '' }); }}>
            Cancel
          </button>
        )}
      </form>
      {news.length === 0 ? (
        <p>No news found.</p>
      ) : (
        <ul>
          {news.map(item => (
            <li key={item.id}>
              <strong>{item.title || 'Untitled'}</strong>
              <br />
              {item.content}
              <br />
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default News;