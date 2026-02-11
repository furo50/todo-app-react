import { useState } from 'react';
import './TodoInput.css';

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmitTodo = (event) => {
    event.preventDefault();
    
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="todo-input-container" onSubmit={handleSubmitTodo}>
      <input
        type="text"
        className="todo-input-field"
        placeholder="Was möchtest du erledigen?"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus
      />
      <button type="submit" className="todo-add-button">
        <span className="button-icon">+</span>
        <span className="button-text">Hinzufügen</span>
      </button>
    </form>
  );
}

export default TodoInput;