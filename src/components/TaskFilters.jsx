
function TaskFilters({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  sortBy,
  setSortBy,
  categories,
}) {
  return (
    <div className="surface-card grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">

      {/* Search */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Search tasks
        </label>

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by task title..."
          className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-[#168C83]"
        />
      </div>

      {/* Category filter */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Category
        </label>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-[#168C83]"
        >
          <option value="All">All categories</option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Status filter */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Status
        </label>

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-[#168C83]"
        >
          <option value="All">All statuses</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Sorting */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Sort by
        </label>

        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-[#168C83]"
        >
          <option value="date">Due date (earliest first)</option>
          <option value="date-latest">Due date (latest first)</option>
          <option value="az">Title (A–Z)</option>
        </select>
      </div>

    </div>
  );
}

export default TaskFilters;
