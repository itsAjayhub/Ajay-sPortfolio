function ContactPage({ profile, onBack }) {
  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">Contact Me</p>
          <h1>Let&apos;s get in touch</h1>
          <p className="bio">Ready to collaborate? Use the details below to connect.</p>
          <div className="actions">
            <button type="button" className="btn primary" onClick={onBack}>Back Home</button>
          </div>
        </div>
      </header>

      <main>
        <section className="card">
          <h3>Contact Information</h3>
          <ul className="info-list">
            <li><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><strong>GitHub:</strong> <a href={profile.github} target="_blank" rel="noreferrer">{profile.github}</a></li>
            <li><strong>LinkedIn:</strong> <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedin}</a></li>
            <li><strong>Location:</strong> {profile.location}</li>
          </ul>
        </section>

        <section className="card">
          <h3>Message Prompt</h3>
          <p>Send me a message anytime about new opportunities, project ideas, or collaboration.</p>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
