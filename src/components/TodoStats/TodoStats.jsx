import './TodoStats.css';

function TodoStats({ totalTodos, completedTodos }) {
  const percentageCompleted = totalTodos > 0 
    ? Math.round((completedTodos / totalTodos) * 100) 
    : 0;

  const activeTodos = totalTodos - completedTodos;

  return (
    <div className="todo-stats">
      <div className="stats-header">
        <div className="stats-text">
          <span className="stats-number">{completedTodos}</span>
          <span className="stats-label"> von {totalTodos} erledigt</span>
        </div>
        <div className="stats-percentage">{percentageCompleted}%</div>
      </div>

      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill"
          style={{ width: `${percentageCompleted}%` }}
        >
          {percentageCompleted > 10 && (
            <span className="progress-text">{percentageCompleted}%</span>
          )}
        </div>
      </div>

      {activeTodos > 0 && (
        <p className="stats-motivation">
          Noch {activeTodos} {activeTodos === 1 ? 'Aufgabe' : 'Aufgaben'} zu erledigen! 💪
        </p>
      )}

      {totalTodos > 0 && percentageCompleted === 100 && (
        <p className="stats-celebration">
          🎉 Alle Aufgaben erledigt! Großartig!
        </p>
      )}
    </div>
  );
}

export default TodoStats;