import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoStats from './components/TodoStats/TodoStats';
import './App.css';

function App() {
  const [allTodos, setAllTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }, [allTodos]);

  const handleAddNewTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setAllTodos([...allTodos, newTodo]);
  };

  const handleToggleTodoComplete = (todoId) => {
    setAllTodos(allTodos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (todoId) => {
    setAllTodos(allTodos.filter(todo => todo.id !== todoId));
  };

  const handleFilterChange = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const getFilteredTodos = () => {
    if (currentFilter === 'active') {
      return allTodos.filter(todo => !todo.completed);
    }
    if (currentFilter === 'completed') {
      return allTodos.filter(todo => todo.completed);
    }
    return allTodos;
  };

  const getTodoCounts = () => {
    return {
      total: allTodos.length,
      active: allTodos.filter(todo => !todo.completed).length,
      completed: allTodos.filter(todo => todo.completed).length
    };
  };

  const filteredTodos = getFilteredTodos();
  const todoCounts = getTodoCounts();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">✨ Meine Aufgaben</h1>
        <p className="app-subtitle">Organisiere deinen Tag</p>
      </header>

      <main className="app-main">
        <TodoInput onAddTodo={handleAddNewTodo} />
        
        {allTodos.length > 0 && (
          <TodoStats
            totalTodos={allTodos.length}
            completedTodos={todoCounts.completed}
          />
        )}

        <TodoFilter
          currentFilter={currentFilter}
          onFilterChange={handleFilterChange}
          todoCounts={todoCounts}
        />

        <TodoList
          todos={filteredTodos}
          onToggleComplete={handleToggleTodoComplete}
          onDeleteTodo={handleDeleteTodo}
        />
      </main>
    </div>
  );
}

export default App;