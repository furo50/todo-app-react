import './TodoFilter.css';

function TodoFilter({ currentFilter, onFilterChange, todoCounts}) {
    const filterOptions = [
        { id: 'all', label: 'Alle', count: todoCounts.total },
        { id: 'active', label: 'Aktiv', count: todoCounts.active },
        { id: 'completed', label: 'Erledigt', count: todoCounts.completed },
    ];

    return (
        <div className="todo-filter">
            {filterOptions.map((option) => (
                <button 
                    key={option.id}
                    className={`filter-button ${currentFilter === option.id ? 'active' : ''}`}
                    onClick={() => onFilterChange(option.id)}
                    >
                        {option.label}
                        <span className="filter-count">{option.count}</span>
                    </button>
            ))}
        </div>
    )
}

export default TodoFilter;
