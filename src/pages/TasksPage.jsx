
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ListTodo,
  Clock,
  CheckCircle2,
  Plus,
  Search,
} from "lucide-react";

import PageHeader from "../components/PageHeader";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import TaskFilters from "../components/TaskFilters";

const emptyForm = {
  title: "",
  category: "Programming",
  dueDate: "",
  priority: "Medium",
};

function TasksPage() {
  const { tasks, setTasks } = useOutletContext();

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const [error, setError] = useState("");

  // Search, filter and sorting state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  // Task statistics
  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  // Get unique categories from existing tasks
  const categories = [
    ...new Set(tasks.map((task) => task.category)),
  ];

  // Apply search and filters
  let filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || task.category === category;

    const matchesStatus =
      status === "All" ||
      (status === "Completed" && task.completed) ||
      (status === "Pending" && !task.completed);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Apply sorting
  if (sortBy === "date") {
    filteredTasks.sort((a, b) =>
      (a.dueDate || "9999-12-31").localeCompare(
        b.dueDate || "9999-12-31"
      )
    );
  } else if (sortBy === "date-latest") {
    filteredTasks.sort((a, b) =>
      (b.dueDate || "0000-01-01").localeCompare(
        a.dueDate || "0000-01-01"
      )
    );
  } else if (sortBy === "az") {
    filteredTasks.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  // Reset form
  function resetForm() {
    setFormData(emptyForm);
    setEditingTask(null);
    setError("");
    setShowForm(false);
  }

  // Add or update task
  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.title.trim()) {
      setError("Please enter a task title.");
      return;
    }

    if (editingTask) {
      setTasks((previousTasks) =>
        previousTasks.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                ...formData,
                title: formData.title.trim(),
              }
            : task
        )
      );
    } else {
      const newTask = {
        id: crypto.randomUUID(),
        ...formData,
        title: formData.title.trim(),
        completed: false,
      };

      setTasks((previousTasks) => [
        ...previousTasks,
        newTask,
      ]);
    }

    resetForm();
  }

  // Prepare task for editing
  function handleEdit(task) {
    setEditingTask(task);

    setFormData({
      title: task.title,
      category: task.category,
      dueDate: task.dueDate,
      priority: task.priority,
    });

    setError("");
    setShowForm(true);
  }

  // Delete task
  function handleDelete(taskId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );

    if (editingTask?.id === taskId) {
      resetForm();
    }
  }

  // Complete or undo task
  function handleToggle(taskId) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Clear all search and filter selections
  function clearFilters() {
    setSearch("");
    setCategory("All");
    setStatus("All");
    setSortBy("date");
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="STAY ORGANIZED"
        title="My Tasks"
        description="Manage your study tasks and keep track of your progress."
      />

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="surface-card p-5">
          <div className="flex items-center gap-3">
            <ListTodo className="text-[#168C83]" size={22} />
            <p className="text-sm text-gray-500">Total Tasks</p>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#172D3B]">
            {tasks.length}
          </h2>
        </div>

        <div className="surface-card p-5">
          <div className="flex items-center gap-3">
            <Clock className="text-amber-500" size={22} />
            <p className="text-sm text-gray-500">Pending</p>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#172D3B]">
            {pendingTasks.length}
          </h2>
        </div>

        <div className="surface-card p-5">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#168C83]" size={22} />
            <p className="text-sm text-gray-500">Completed</p>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#172D3B]">
            {completedTasks.length}
          </h2>
        </div>

      </div>

      {/* Task actions */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-[#172D3B]">
          All Tasks
        </h2>

        <button
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="primary-button flex items-center gap-2"
        >
          <Plus size={18} />
          Add New Task
        </button>
      </div>

      {/* Add and edit form */}
      {showForm && (
        <TaskForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          onCancel={resetForm}
          isEditing={Boolean(editingTask)}
          error={error}
        />
      )}

      {/* Search and filters */}
      <TaskFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={categories}
      />

      {/* Results heading */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing {filteredTasks.length} of {tasks.length} tasks
        </p>

        <button
          onClick={clearFilters}
          className="text-sm font-medium text-[#168C83] hover:underline"
        >
          Clear filters
        </button>
      </div>

      {/* Task list and empty states */}
      {tasks.length === 0 ? (
        <div className="surface-card py-12 text-center">
          <ListTodo
            size={40}
            className="mx-auto mb-3 text-gray-400"
          />
          <h3 className="font-semibold text-[#172D3B]">
            No tasks yet
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Add your first study task to get started.
          </p>
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="surface-card py-12 text-center">
          <Search
            size={40}
            className="mx-auto mb-3 text-gray-400"
          />
          <h3 className="font-semibold text-[#172D3B]">
            No matching tasks
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TasksPage;
