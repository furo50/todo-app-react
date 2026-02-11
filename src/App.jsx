import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoStats from './components/TodoStats/TodoStats';
import { todoApi } from './todoApi';
import './App.css';

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Beim Start: Lade Todos vom Backend
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setIsLoading(true);
      const todos = await todoApi.getAllTodos();
      setAllTodos(todos);
    } catch (error) {
      console.error('Fehler beim Laden der Todos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddNewTodo = async (todoText) => {
    try {
      const newTodo = await todoApi.createTodo(todoText);
      setAllTodos([...allTodos, newTodo]);
    } catch (error) {
      console.error('Fehler beim Erstellen des Todos:', error);
    }
  };

  const handleToggleTodoComplete = async (todoId) => {
    try {
      const todo = allTodos.find(t => t.id === todoId);
      const updatedTodo = await todoApi.updateTodo(todoId, {
        ...todo,
        completed: !todo.completed
      });
      setAllTodos(allTodos.map(t => t.id === todoId ? updatedTodo : t));
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Todos:', error);
    }
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      await todoApi.deleteTodo(todoId);
      setAllTodos(allTodos.filter(todo => todo.id !== todoId));
    } catch (error) {
      console.error('Fehler beim Löschen des Todos:', error);
    }
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

  if (isLoading) {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">✨ Meine Aufgaben</h1>
          <p className="app-subtitle">Lädt...</p>
        </header>
      </div>
    );
  }

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