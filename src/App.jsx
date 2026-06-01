import { useState } from 'react';
import {
  profile,
  impact,
  expertise,
  talks,
  workshops,
  articles,
  channels,
  projects,
  experienceTimeline
} from './content';

function SectionTitle({ eyebrow, title }) {
  return (
    <header className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </header>
  );
}

export default function App() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <div className="page-shell">
      <div className="bg-shape bg-shape-1" />
      <div className="bg-shape bg-shape-2" />

      <main className="container">
        <section className="hero card reveal-1">
          <div className="hero-grid">
            <div>
              <p className="hero-kicker">Tech Lead • Full Stack • Community Builder</p>
              <h1>{profile.name}</h1>
              <p className="hero-role">{profile.role}</p>
              <p className="hero-summary">{profile.summary}</p>
              <p className="hero-mission">{profile.mission}</p>

              <div className="hero-actions">
                <a href={profile.cta.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={profile.cta.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.cta.email}>Email</a>
                <a href={profile.cta.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="hero-photo-wrap">
              {!photoError ? (
                <img
                  className="hero-photo"
                  src={profile.photo}
                  alt="Frederico Peixoto profile"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="hero-photo hero-photo-fallback" aria-label="Profile photo placeholder">
                  <span>FPL</span>
                  <small>Add profile-fred.jpg in /public</small>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="stats-grid reveal-2">
          {impact.map((item) => (
            <article key={item.label} className="stat card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </section>

        <section className="card reveal-3">
          <SectionTitle eyebrow="Core Strengths" title="Engineering and Leadership" />
          <ul className="tag-list">
            {expertise.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="card reveal-4">
          <SectionTitle eyebrow="Resume" title="Career Timeline" />
          <div className="career-timeline">
            {experienceTimeline.map((item) => (
              <article className="career-item" key={`${item.period}-${item.company}`}>
                <p className="career-period">{item.period}</p>
                <h3>
                  {item.role} - {item.company}
                </h3>
                <ul>
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="card reveal-5">
          <SectionTitle eyebrow="Speaking" title="Talks and Presentations" />
          <div className="timeline">
            {talks.map((talk) => (
              <a className="timeline-item" key={talk.title} href={talk.url} target="_blank" rel="noreferrer">
                <span>{talk.year}</span>
                <h3>{talk.title}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="grid-two reveal-6">
          <article className="card">
            <SectionTitle eyebrow="Mentorship" title="Workshops" />
            <ul className="clean-list">
              {workshops.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <SectionTitle eyebrow="Content" title="Articles and Channels" />
            <ul className="link-list">
              {articles.map((item) => (
                <li key={item.title}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="link-list secondary-links">
              {channels.map((item) => (
                <li key={item.title}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="card reveal-6">
          <SectionTitle eyebrow="Portfolio" title="Selected Projects" />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.stack}</p>
                <div className="project-links">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Repository
                  </a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="card footer reveal-6">
          <p>{profile.location}</p>
          <p>
            Building products, mentoring people, and scaling developer communities through practical learning and real projects.
          </p>
          <a href={profile.cta.linkedin} target="_blank" rel="noreferrer">
            Book me as a Speaker or Mentor
          </a>
        </footer>
      </main>
    </div>
  );
}
