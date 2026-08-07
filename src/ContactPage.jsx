function ContactPage({ profile, onBack }) {
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
          <p className="eyebrow">Contact Me</p>
          <h1>Let&apos;s get in touch</h1>
          <p className="bio">Ready to collaborate? Use the details below to connect.</p>
        </div>
      </header>

      <main>
        <section className="card">
          <h3>Contact Information</h3>
          <ul className="info-list">
            <li><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><strong>Mobile:</strong> {profile.mobile}</li>
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
