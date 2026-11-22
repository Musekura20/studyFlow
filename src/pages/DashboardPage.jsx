
import {
  CheckCircle2,
  Clock,
  ListTodo,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

function DashboardPage() {
  return (
    <div>

      <PageHeader
        eyebrow="Your workspace"
        title="Welcome to StudyFlow"
        description="A fresh day to learn, grow and make progress."
      />

      {/* Summary cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">

        <div className="surface-card p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 bg-teal-light text-teal rounded-xl flex items-center justify-center">
              <ListTodo size={23} />
            </div>
            <span className="text-xs text-muted">Your plans</span>
          </div>

          <p className="text-3xl font-bold text-ink">06</p>
          <p className="text-sm text-muted mt-1">Total study tasks</p>
        </div>

        <div className="surface-card p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 bg-teal-light text-teal rounded-xl flex items-center justify-center">
              <CheckCircle2 size={23} />
            </div>
            <span className="text-xs text-muted">Well done!</span>
          </div>

          <p className="text-3xl font-bold text-ink">02</p>
          <p className="text-sm text-muted mt-1">Completed tasks</p>
        </div>

        <div className="surface-card p-6 sm:col-span-2 xl:col-span-1">
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
              <Clock size={23} />
            </div>
            <span className="text-xs text-muted">Keep going</span>
          </div>

          <p className="text-3xl font-bold text-ink">04</p>
          <p className="text-sm text-muted mt-1">Pending tasks</p>
        </div>

      </section>

      {/* Welcome card */}
      <section className="surface-card p-6 md:p-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

          <div>
            <p className="text-teal font-semibold text-sm mb-2">
              YOUR NEXT STEP
            </p>

            <h2 className="text-2xl font-bold text-ink mb-2">
              Make today count.
            </h2>

            <p className="text-muted text-sm max-w-lg">
              Organise your study activities and focus on
              what matters most. Every completed task
              brings you closer to your goals.
            </p>
          </div>

          <Link
            to="/tasks"
            className="primary-button shrink-0"
          >
            View my tasks
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* Progress card */}
      <section className="surface-card p-6">
        <div className="flex items-center gap-3 mb-5">
          <TrendingUp className="text-teal" size={23} />

          <div>
            <h2 className="font-bold text-ink">
              Your study journey
            </h2>

            <p className="text-xs text-muted">
              A little progress every day.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted">
            Weekly progress
          </span>

          <span className="text-sm font-bold text-teal">
            33%
          </span>
        </div>

        <div className="w-full h-3 bg-teal-light rounded-full overflow-hidden">
          <div className="w-1/3 h-full bg-teal rounded-full" />
        </div>
      </section>

    </div>
  );
}

export default DashboardPage;