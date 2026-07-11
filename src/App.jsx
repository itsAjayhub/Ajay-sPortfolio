const profile = {
  name: 'Ajay Kumar',
  title: 'Full-Stack Developer',
  location: 'India',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  bio: 'I build modern web applications with a focus on clean design, strong user experience, and reliable performance.',
};

const skills = ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'];

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A responsive admin dashboard for monitoring sales, orders, and customer activity.',
  },
  {
    title: 'Task Planner App',
    description: 'A lightweight productivity app for managing daily goals and project deadlines.',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio site designed to showcase projects, experience, and contact details.',
  },
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">Hello, I am</p>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="bio">{profile.bio}</p>
          <div className="actions">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href={`mailto:${profile.email}`} className="btn secondary">Contact Me</a>
          </div>
        </div>
      </header>

      <main>
        <section className="card">
          <h3>About Me</h3>
          <p>
            I am a passionate developer who enjoys creating practical, user-friendly web experiences.
            I love turning ideas into polished products and continuously learning new technologies.
          </p>
          <ul className="info-list">
            <li><strong>Location:</strong> {profile.location}</li>
            <li><strong>Email:</strong> {profile.email}</li>
          </ul>
        </section>

        <section className="card">
          <h3>Skills</h3>
          <div className="chip-list">
            {skills.map((skill) => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="card">
          <h3>Featured Projects</h3>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card">
          <h3>Let’s Connect</h3>
          <p>Feel free to reach out for collaborations, opportunities, or just to say hello.</p>
          <div className="actions">
            <a href={profile.github} className="btn secondary" target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} className="btn secondary" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
