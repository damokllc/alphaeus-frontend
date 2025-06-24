import React, { useEffect, useState } from 'react';
import { getProjects, addProject, updateProject, deleteProject } from './api';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  // Fetch projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    setLoading(true);
    getProjects()
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  // Handle form input
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit (add or edit)
  const handleSubmit = async e => {
    e.preventDefault();
    if (editingId) {
      await updateProject(editingId, form);
      setEditingId(null);
    } else {
      await addProject(form);
    }
    setForm({ name: '', description: '' });
    fetchProjects();
  };

  // Handle edit
  const handleEdit = project => {
    setForm({ name: project.name, description: project.description });
    setEditingId(project.id);
  };

  // Handle delete
  const handleDelete = async id => {
    await deleteProject(id);
    fetchProjects();
  };

  if (loading) return <div>Loading projects...</div>;

  return (
    <div>
      <h2>Projects</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Add'} Project</button>
        {editingId && (
          <button type="button" onClick={() => { setEditingId(null); setForm({ name: '', description: '' }); }}>
            Cancel
          </button>
        )}
      </form>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <strong>{project.name || 'Untitled Project'}</strong>
              <br />
              {project.description}
              <br />
              <button onClick={() => handleEdit(project)}>Edit</button>
              <button onClick={() => handleDelete(project.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;