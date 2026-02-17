import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import TodoInput from '../../components/TodoInput/TodoInput';
import TodoList from '../../components/TodoList/TodoList';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import TodoStats from '../../components/TodoStats/TodoStats';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import { todoApi } from '../../todoApi';
import '../../App.css';
import './TodoPage.css';

function TodoPage() {
  const [allTodos, setAllTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setIsLoading(true);
      const todos = await todoApi.getAllTodos();
      setAllTodos(todos);
    } catch (error) {
      console.error('Fehler beim Laden:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddNewTodo = async (todoText) => {
    try {
      const newTodo = await todoApi.createTodo(todoText);
      setAllTodos([...allTodos, newTodo]);
    } catch (error) {
      console.error('Fehler beim Erstellen:', error);
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
      console.error('Fehler beim Aktualisieren:', error);
    }
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      await todoApi.deleteTodo(todoId);
      setAllTodos(allTodos.filter(todo => todo.id !== todoId));
    } catch (error) {
      console.error('Fehler beim Löschen:', error);
    }
  };

  const handleUpdateTodoText = async (todoId, newText) => {
    try {
      const todo = allTodos.find(t => t.id === todoId);
      const updatedTodo = await todoApi.updateTodo(todoId, {
        ...todo,
        text: newText
      });
      setAllTodos(allTodos.map(t => t.id === todoId ? updatedTodo : t));
    } catch (error) {
      console.error('Fehler beim Aktualisieren:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getFilteredTodos = () => {
    if (currentFilter === 'active') return allTodos.filter(t => !t.completed);
    if (currentFilter === 'completed') return allTodos.filter(t => t.completed);
    return allTodos;
  };

  const getTodoCounts = () => ({
    total: allTodos.length,
    active: allTodos.filter(t => !t.completed).length,
    completed: allTodos.filter(t => t.completed).length
  });

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
      <ThemeToggle />

      <header className="app-header">
        <h1 className="app-title">✨ Meine Aufgaben</h1>
        <p className="app-subtitle">Willkommen, {user}! 👋</p>
        <button className="logout-button" onClick={handleLogout}>
          Abmelden
        </button>
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
          onFilterChange={setCurrentFilter}
          todoCounts={todoCounts}
        />

        <TodoList
          todos={filteredTodos}
          onToggleComplete={handleToggleTodoComplete}
          onDeleteTodo={handleDeleteTodo}
          onUpdateTodo={handleUpdateTodoText}
        />
      </main>
    </div>
  );
}

export default TodoPage;