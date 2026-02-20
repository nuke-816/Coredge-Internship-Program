function FilterBar({ setFilter, searchTerm, setSearchTerm }) {
  return (
    <div className="filter-bar">
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
      </div>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default FilterBar;