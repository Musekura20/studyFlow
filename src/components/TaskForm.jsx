
function TaskForm({
  formData,
  setFormData,
  onSubmit,
  onCancel,
  isEditing,
  error,
}) {
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-[#172D3B]">
          Task Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter your task"
          className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-teal-600"
        />

        {error && (
          <p className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-[#172D3B]">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-teal-600"
        >
          <option value="Programming">Programming</option>
          <option value="Networking">Networking</option>
          <option value="Database">Database</option>
          <option value="English">English</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-[#172D3B]">
          Due Date
        </label>

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-teal-600"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-[#172D3B]">
          Priority
        </label>

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-200 p-3 outline-none focus:border-teal-600"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-lg bg-[#168C83] px-5 py-3 font-semibold text-white hover:bg-teal-700"
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-gray-200 px-5 py-3 font-semibold text-gray-600 hover:bg-gray-50"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;
