
function PageHeader({ title, description, eyebrow }) {
  return (
    <header className="mb-8">

      <p className="text-teal text-xs font-bold uppercase tracking-widest mb-2">
        {eyebrow}
      </p>

      <h1 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
        {title}
      </h1>

      <p className="text-muted mt-2 text-sm md:text-base">
        {description}
      </p>

    </header>
  );
}

export default PageHeader;