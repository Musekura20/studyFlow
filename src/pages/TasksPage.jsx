
import { useOutletContext } from "react-router-dom";
import {
  ListTodo,
  CalendarDays,
  CheckCircle2,
  Clock,
} from "lucide-react";

import PageHeader from "../components/PageHeader";

function TasksPage() {
  // Get the shared tasks from App.jsx
  const { tasks } = useOutletContext();

  // Separate completed and pending tasks
  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  );

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
          <div className="rounded-xl bg-teal-50 p-3">
            <ListTodo className="text-teal-700" size={22} />
          </div>

          <div>
            <p className="text-sm text-gray-500">Total Tasks</p>
            <h2 className="text-2xl font-bold text-[#172D3B]">
              {tasks.length}
            </h2>
          </div>
        </div>

        <div className="surface-card flex items-center gap-4 p-5">
          <div className="rounded-xl bg-orange-50 p-3">
            <Clock className="text-orange-600" size={22} />
          </div>

          <div>
            <p className="text-sm text-gray-500">Pending</p>
            <h2 className="text-2xl font-bold text-[#172D3B]">
              {pendingTasks.length}
            </h2>
          </div>
        </div>

        <div className="surface-card flex items-center gap-4 p-5">
          <div className="rounded-xl bg-green-50 p-3">
            <CheckCircle2 className="text-green-600" size={22} />
          </div>

          <div>
            <p className="text-sm text-gray-500">Completed</p>
            <h2 className="text-2xl font-bold text-[#172D3B]">
              {completedTasks.length}
            </h2>
          </div>
        </div>

      </div>

      {/* Task list */}
      <div className="surface-card mt-6 p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#172D3B]">
              All Study Tasks
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your current study schedule
            </p>
          </div>

          <CalendarDays className="text-teal-700" size={22} />
        </div>

        {tasks.length === 0 ? (
          <div className="py-12 text-center">
            <ListTodo
              size={40}
              className="mx-auto text-gray-300"
            />

            <h3 className="mt-4 font-semibold text-[#172D3B]">
              No tasks yet
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Your study tasks will appear here when you add them.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex flex-col justify-between gap-3 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-3">
                  {task.completed ? (
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-green-600"
                    />
                  ) : (
                    <Clock
                      size={21}
                      className="mt-1 shrink-0 text-orange-500"
                    />
                  )}

                  <div>
                    <h3
                      className={`font-semibold ${
                        task.completed
                          ? "text-gray-400 line-through"
                          : "text-[#172D3B]"
                      }`}
                    >
                      {task.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {task.category} · Due {task.dueDate}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      task.priority === "High"
                        ? "bg-red-50 text-red-600"
                        : task.priority === "Medium"
                        ? "bg-orange-50 text-orange-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {task.priority}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      task.completed
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {task.completed ? "Completed" : "Pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TasksPage;
