function CategoryFilter({ categories, selected, onChange }) {
  return (
    <div className="category-filter">
      <button
        className={`category-filter-btn ${selected === '' ? 'category-filter-btn-active' : ''}`}
        onClick={() => onChange('')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`category-filter-btn ${selected === category ? 'category-filter-btn-active' : ''}`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
