import { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleComplete, onDeleteTodo, onUpdateTodo }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDeleteClick = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDeleteTodo(todo.id);
    }, 300);
  };

  const handleCheckboxChange = () => {
    onToggleComplete(todo.id);
  };

  const handleDoubleClick = () => {
    if (!todo.completed) {
      setIsEditing(true);
      setEditText(todo.text);
    }
  };

  const handleEditSubmit = () => {
    if (editText.trim() !== '') {
      onUpdateTodo(todo.id, editText.trim());
      setIsEditing(false);
    } else {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEditSubmit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    handleEditSubmit();
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${isDeleting ? 'deleting' : ''}`}>
      <div className="todo-item-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
        />
        
        {isEditing ? (
          <input
            type="text"
            className="todo-edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <label 
            className="todo-text"
            onDoubleClick={handleDoubleClick}
          >
            {todo.text}
          </label>
        )}
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