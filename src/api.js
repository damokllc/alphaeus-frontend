import axios from 'axios';

const API_BASE = 'http://localhost:3000/api';

// Projects
export const getProjects = () => axios.get(`${API_BASE}/projects`);
export const addProject = (data) => axios.post(`${API_BASE}/projects`, data);
export const updateProject = (id, data) => axios.put(`${API_BASE}/projects/${id}`, data);
export const deleteProject = (id) => axios.delete(`${API_BASE}/projects/${id}`);

// News
export const getNews = () => axios.get(`${API_BASE}/news`);
export const addNews = (data) => axios.post(`${API_BASE}/news`, data);
export const updateNews = (id, data) => axios.put(`${API_BASE}/news/${id}`, data);
export const deleteNews = (id) => axios.delete(`${API_BASE}/news/${id}`);

// Contact
export const sendContact = (data) => axios.post(`${API_BASE}/contact`, data);