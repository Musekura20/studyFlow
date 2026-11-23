
import { Link, useOutletContext } from "react-router-dom";
import {
  CheckCircle2,
  Clock,
  ListTodo,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import PageHeader from "../components/PageHeader";

function DashboardPage() {
  // Get the shared tasks from App.jsx
  const { tasks } = useOutletContext();

  // Calculate task statistics
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  // Get the next three pending tasks
  const upcomingTasks = [...tasks]
    .filter((task) => !task.completed)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
    .slice(0, 3);

  return (
    <div>
      <PageHeader
        eyebrow="YOUR STUDY OVERVIEW"
        title="Welcome to StudyFlow"
        description="Stay organised, manage your tasks, and make progress with your studies."
      />

      {/* Summary cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <div className="surface-card p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Total Tasks</p>
            <ListTodo className="text-teal-600" size={22} />
          </div>

          <h2 className="mt-3 text-3xl font-bold text-[#172D3B]">
            {totalTasks}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            All your study tasks
          </p>
        </div>

        <div className="surface-card p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Completed</p>
            <CheckCircle2 className="text-green-600" size={22} />
          </div>

          <h2 className="mt-3 text-3xl font-bold text-[#172D3B]">
            {completedTasks}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Tasks finished
          </p>
        </div>

        <div className="surface-card p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Pending</p>
            <Clock className="text-orange-500" size={22} />
          </div>

          <h2 className="mt-3 text-3xl font-bold text-[#172D3B]">
            {pendingTasks}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Tasks still to do
          </p>
        </div>

        <div className="surface-card p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Progress</p>
            <TrendingUp className="text-teal-600" size={22} />
          </div>

          <h2 className="mt-3 text-3xl font-bold text-[#172D3B]">
            {progress}%
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Overall completion
          </p>
        </div>

      </div>

      {/* Progress section */}
      <div className="surface-card mt-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#172D3B]">
              Your Study Progress
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Keep going! Every completed task counts.
            </p>
          </div>

          <span className="font-semibold text-teal-700">
            {progress}%
          </span>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-[#168C83] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-3 text-sm text-gray-500">
          {completedTasks} of {totalTasks} tasks completed
        </p>
      </div>

      {/* Upcoming tasks */}
      <div className="surface-card mt-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#172D3B]">
              Upcoming Tasks
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your next study activities
            </p>
          </div>

          <Link
            to="/tasks"
            className="flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-5 space-y-3">
          {upcomingTasks.length > 0 ? (
            upcomingTasks.map((task) => (
              <div
                key={task.id}
                className="flex flex-col justify-between gap-3 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-medium text-[#172D3B]">
                    {task.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {task.category} · Due {task.dueDate}
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    task.priority === "High"
                      ? "bg-red-50 text-red-600"
                      : task.priority === "Medium"
                      ? "bg-orange-50 text-orange-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {task.priority} Priority
                </span>
              </div>
            ))
          ) : (
            <p className="py-6 text-center text-sm text-gray-500">
              No pending tasks. Great work!
            </p>
          )}
        </div>
      </div>

      {/* Quick action */}
      <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#172D3B] p-6 text-white sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-semibold">
            Ready for your next task?
          </h2>

          <p className="mt-1 text-sm text-gray-300">
            Visit your task list and organise your study schedule.
          </p>
        </div>

        <Link
          to="/tasks"
          className="rounded-lg bg-[#168C83] px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          Manage Tasks
        </Link>
      </div>
    </div>
  );
}

export default DashboardPage;
