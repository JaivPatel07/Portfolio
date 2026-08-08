import { FiAward, FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';
import { education } from '../data/index';

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Education</div>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle">
            Pursuing a degree in Computer Science &amp; Engineering.
          </p>
        </div>

        <div className="education-card">
          <div className="education-header">
            <div className="education-logo">{education.logo}</div>
            <div>
              <div className="education-degree">{education.degree} — {education.major}</div>
              <div className="education-school">{education.school}</div>
            </div>
          </div>

          <div className="education-meta">
            <div className="education-meta-item">
              <FiCalendar /> {education.duration}
            </div>
            <div className="education-meta-item">
              <FiMapPin /> {education.location}
            </div>
            <div className="education-meta-item">
              <FiAward /> CGPA: {education.cgpa}
            </div>
          </div>

          <div className="education-courses">
            {education.courses.map((course) => (
              <span className="tag" key={course}>{course}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
