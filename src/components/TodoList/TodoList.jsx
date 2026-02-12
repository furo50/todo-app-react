import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos, onToggleComplete, onDeleteTodo, onUpdateTodo }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">📝</span>
        <p className="empty-text">Keine Aufgaben vorhanden</p>
        <p className="empty-subtext">Füge deine erste Aufgabe hinzu!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;