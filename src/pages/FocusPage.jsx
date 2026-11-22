
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  Coffee,
} from "lucide-react";

import PageHeader from "../components/PageHeader";

function FocusPage() {
  return (
    <div>

      <PageHeader
        eyebrow="Time to concentrate"
        title="Focus Session"
        description="Give your attention to one thing at a time."
      />

      <section className="surface-card max-w-2xl mx-auto p-6 md:p-10 text-center">

        <div className="flex items-center justify-center gap-2 text-teal mb-8">
          <Clock size={20} />
          <span className="text-sm font-semibold">
            YOUR FOCUS SPACE
          </span>
        </div>

        <div className="inline-flex bg-ivory rounded-xl p-1 mb-8">
          <button className="bg-teal text-white rounded-lg px-6 py-2 text-sm font-semibold">
            Study
          </button>

          <button className="text-muted rounded-lg px-6 py-2 text-sm font-semibold">
            Break
          </button>
        </div>

        <div className="mb-8">
          <p className="text-6xl md:text-8xl font-bold text-ink tracking-tight">
            25:00
          </p>

          <p className="text-muted mt-3 text-sm">
            Time to focus on your goals.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">

          <button className="primary-button px-8">
            <Play size={19} />
            Start
          </button>

          <button className="border border-border rounded-xl p-3 text-muted hover:bg-ivory">
            <Pause size={19} />
          </button>

          <button className="border border-border rounded-xl p-3 text-muted hover:bg-ivory">
            <RotateCcw size={19} />
          </button>

        </div>

        <div className="flex items-center justify-center gap-2 text-muted text-sm">
          <Coffee size={17} />
          <span>Take a short break after your study session.</span>
        </div>

      </section>

    </div>
  );
}

export default FocusPage;
