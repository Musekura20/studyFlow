
import { BookOpen, Clock, CheckCircle2, Sparkles } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen bg-ivory flex items-center justify-center p-6">

      <section className="surface-card w-full max-w-3xl p-8 md:p-12 text-center">

        <div className="w-16 h-16 bg-teal-light text-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
          <BookOpen size={32} />
        </div>

        <p className="text-teal font-semibold tracking-widest text-sm uppercase mb-3">
          Your personal study space
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
          Welcome to StudyFlow
        </h1>

        <p className="text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Organise your learning, manage your study tasks,
          and make every study session count.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">

          <div className="bg-ivory rounded-xl p-5">
            <CheckCircle2 className="text-teal mb-3" size={25} />
            <h2 className="font-semibold text-ink mb-1">
              Stay organised
            </h2>
            <p className="text-sm text-muted">
              Keep all your study tasks in one place.
            </p>
          </div>

          <div className="bg-ivory rounded-xl p-5">
            <Clock className="text-teal mb-3" size={25} />
            <h2 className="font-semibold text-ink mb-1">
              Stay focused
            </h2>
            <p className="text-sm text-muted">
              Make your study time more productive.
            </p>
          </div>

          <div className="bg-ivory rounded-xl p-5">
            <Sparkles className="text-gold mb-3" size={25} />
            <h2 className="font-semibold text-ink mb-1">
              Make progress
            </h2>
            <p className="text-sm text-muted">
              Track your achievements as you learn.
            </p>
          </div>

        </div>

        <p className="text-xs text-muted mt-10">
          StudyFlow · Plan better. Focus deeper. Achieve more.
        </p>

      </section>

    </main>
  );
}

export default App;