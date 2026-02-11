import { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDeleteTodo(todo.id);
    }, 300);
  };

  const handleCheckboxChange = () => {
    onToggleComplete(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${isDeleting ? 'deleting' : ''}`}>
      <div className="todo-item-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
          id={`todo-${todo.id}`}
        />
        <label htmlFor={`todo-${todo.id}`} className="todo-text">
          {todo.text}
        </label>
      </div>
      
      <button 
        className="todo-delete-button" 
        onClick={handleDeleteClick}
        aria-label="Löschen"
      >
        <span className="delete-icon">🗑️</span>
      </button>
    </div>
  );
}

export default TodoItem;