
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ListTodo,
  Clock,
  CheckCircle2,
  Plus,
} from "lucide-react";

import PageHeader from "../components/PageHeader";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

const emptyForm = {
  title: "",
  category: "Programming",
  dueDate: "",
  priority: "Medium",
};

function TasksPage() {
  const { tasks, setTasks } = useOutletContext();

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const [error, setError] = useState("");

  // Calculate task statistics
  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  );

  // Reset the form
  function resetForm() {
    setFormData(emptyForm);
    setEditingTask(null);
    setError("");
    setShowForm(false);
  }

  // Add a new task or update an existing task
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

  // Prepare a task for editing
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

  // Delete a task
  function handleDelete(taskId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) {
      return;
    }

    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );

    if (editingTask?.id === taskId) {
      resetForm();
    }
  }

  // Mark a task complete or incomplete
  function handleToggle(taskId) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div>
      <PageHeader
        eyebrow="TASK MANAGEMENT"
        title="My Tasks"
        description="Organise your study activities and keep track of your progress."
      />

      {/* Task summary */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="surface-card flex items-center gap-4 p-5">
          <ListTodo className="text-teal-700" size={24} />

          <div>
            <p className="text-sm text-gray-500">Total Tasks</p>
            <h2 className="text-2xl font-bold text-[#172D3B]">
              {tasks.length}
            </h2>
          </div>
        </div>

        <div className="surface-card flex items-center gap-4 p-5">
          <Clock className="text-orange-600" size={24} />

          <div>
            <p className="text-sm text-gray-500">Pending</p>
            <h2 className="text-2xl font-bold text-[#172D3B]">
              {pendingTasks.length}
            </h2>
          </div>
        </div>

        <div className="surface-card flex items-center gap-4 p-5">
          <CheckCircle2 className="text-green-600" size={24} />

          <div>
            <p className="text-sm text-gray-500">Completed</p>
            <h2 className="text-2xl font-bold text-[#172D3B]">
              {completedTasks.length}
            </h2>
          </div>
        </div>
      </div>

      {/* Add task button */}
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => {
            setEditingTask(null);
            setFormData(emptyForm);
            setError("");
            setShowForm(!showForm);
          }}
          className="flex items-center gap-2 rounded-lg bg-[#168C83] px-5 py-3 font-semibold text-white hover:bg-teal-700"
        >
          <Plus size={18} />
          Add New Task
        </button>
      </div>

      {/* Task form */}
      {showForm && (
        <div className="surface-card mt-5 p-6">
          <h2 className="mb-5 text-lg font-semibold text-[#172D3B]">
            {editingTask ? "Edit Task" : "Create a New Task"}
          </h2>

          <TaskForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            onCancel={resetForm}
            isEditing={Boolean(editingTask)}
            error={error}
          />
        </div>
      )}

      {/* Task list */}
      <div className="surface-card mt-6 p-6">
        <h2 className="mb-5 text-lg font-semibold text-[#172D3B]">
          All Study Tasks
        </h2>

        {tasks.length === 0 ? (
          <div className="py-10 text-center">
            <ListTodo
              size={40}
              className="mx-auto text-gray-300"
            />

            <h3 className="mt-4 font-semibold text-[#172D3B]">
              No tasks yet
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Click Add New Task to create your first study task.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
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
    </div>
  );
}

export default TasksPage;