
import {
  ListTodo,
  Plus,
  Search,
  Filter,
} from "lucide-react";

import PageHeader from "../components/PageHeader";

function TasksPage() {
  return (
    <div>

      <PageHeader
        eyebrow="Stay organised"
        title="My Tasks"
        description="Plan your activities and keep track of your learning."
      />

      <section className="surface-card p-5 md:p-6">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">

          <div>
            <h2 className="text-lg font-bold text-ink">
              Your study plans
            </h2>

            <p className="text-sm text-muted mt-1">
              Manage your daily learning activities.
            </p>
          </div>

          <button className="primary-button">
            <Plus size={18} />
            Add new task
          </button>

        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">

          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="text"
              placeholder="Search your tasks..."
              className="w-full border border-border rounded-xl pl-10 pr-4 py-3 outline-none focus:border-teal"
            />
          </div>

          <button className="flex items-center justify-center gap-2 border border-border rounded-xl px-4 py-3 text-sm text-ink hover:bg-ivory">
            <Filter size={18} />
            Filters
          </button>

        </div>

        <div className="text-center py-12 bg-ivory rounded-xl">

          <div className="w-14 h-14 bg-teal-light text-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ListTodo size={27} />
          </div>

          <h3 className="font-bold text-ink mb-2">
            Your tasks will appear here
          </h3>

          <p className="text-sm text-muted max-w-sm mx-auto">
            Start organising your studies by adding
            your first task.
          </p>

        </div>

      </section>

    </div>
  );
}

export default TasksPage;