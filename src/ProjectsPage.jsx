function ProjectsPage({ projects, onBack }) {
  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">View Projects</p>
          <h1>Featured Work</h1>
          <p className="bio">Browse recent web applications and dashboard solutions I have built.</p>
          <div className="actions">
            <button type="button" className="btn primary" onClick={onBack}>Back Home</button>
          </div>
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
