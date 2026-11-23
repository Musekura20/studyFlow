
import {
  CheckCircle2,
  Clock,
  Pencil,
  Trash2,
} from "lucide-react";

function TaskCard({ task, onToggle, onEdit, onDelete }) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center">
      <div className="flex items-start gap-3">
        {task.completed ? (
          <CheckCircle2
            size={22}
            className="mt-1 shrink-0 text-green-600"
          />
        ) : (
          <Clock
            size={22}
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
            {task.category} · Due {task.dueDate || "Not set"}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                task.priority === "High"
                  ? "bg-red-50 text-red-600"
                  : task.priority === "Medium"
                  ? "bg-orange-50 text-orange-600"
                  : "bg-green-50 text-green-600"
              }`}
            >
              {task.priority} Priority
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
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onToggle(task.id)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          type="button"
          onClick={() => onEdit(task)}
          aria-label={`Edit ${task.title}`}
          className="rounded-lg border border-gray-200 p-2 text-teal-700 hover:bg-teal-50"
        >
          <Pencil size={17} />
        </button>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
          className="rounded-lg border border-gray-200 p-2 text-red-600 hover:bg-red-50"
        >
          <Trash2 size={17} />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;