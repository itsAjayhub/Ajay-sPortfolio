function ProjectsPage({ projects, onBack }) {
  return (
    <div className="page">
      <header className="hero hero-top">
        <button type="button" className="icon-btn" onClick={onBack} title="Home">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5z" />
          </svg>
        </button>
        <div>
          <p className="eyebrow">View Projects</p>
          <h1>Featured Work</h1>
          <p className="bio">Browse recent web applications and dashboard solutions I have built.</p>
        </div>
      </header>

      <main>
        <section className="card project-page-card">
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectsPage;
