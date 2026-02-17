import axios from 'axios';

const API_URL = 'http://localhost:8080/api/todos';

// Axios Interceptor - fügt Token automatisch zu JEDEM Request hinzu
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const todoApi = {
  getAllTodos: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  createTodo: async (text) => {
    const response = await axios.post(API_URL, { text, completed: false });
    return response.data;
  },

  updateTodo: async (id, todo) => {
    const response = await axios.put(`${API_URL}/${id}`, todo);
    return response.data;
  },

  deleteTodo: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  }
};