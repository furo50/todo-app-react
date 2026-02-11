import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/todos';

export const todoApi = {
    getAllTodos: async () => {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    },

    createTodo: async (todoText) => {
        const response = await axios.post(API_BASE_URL, {
            text: todoText,
            completed: false
        });
        return response.data;
    },

    updateTodo: async (id, todoData) => {
        const response = await axios.put(`${API_BASE_URL}/${id}`, todoData);
        return response.data;
    },

    deleteTodo: async (id) => {
        await axios.delete(`${API_BASE_URL}/${id}`);
    }
};