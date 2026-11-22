
import { Link } from "react-router-dom";
import { Compass, ArrowLeft } from "lucide-react";

function NotFoundPage() {
  return (
    <main className="min-h-screen bg-ivory flex items-center justify-center p-6">

      <section className="surface-card max-w-lg w-full p-10 text-center">

        <div className="w-16 h-16 rounded-2xl bg-teal-light text-teal flex items-center justify-center mx-auto mb-6">
          <Compass size={32} />
        </div>

        <p className="text-teal font-bold tracking-widest text-sm mb-3">
          ERROR 404
        </p>

        <h1 className="text-4xl font-bold text-ink mb-3">
          Page not found
        </h1>

        <p className="text-muted text-sm leading-relaxed mb-8">
          Sorry, we couldn't find the page you're looking for.
          It may have moved or the address may be incorrect.
        </p>

        <Link to="/" className="primary-button">
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

      </section>

    </main>
  );
}

export default NotFoundPage;
