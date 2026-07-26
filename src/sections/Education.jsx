const educationJourney = [
  {
    year: '2022',
    label: 'Class 10',
    title: 'PM Shri School Jawahar Navodaya Vidyalaya (JNV), Gandhinagar',
    description: 'Completed Class 10 and built a strong academic foundation.',
  },
  {
    year: '2024',
    label: 'Class 12',
    title: 'PM Shri School Jawahar Navodaya Vidyalaya (JNV), Gandhinagar',
    description: 'Completed Class 12 with focus on science and problem solving.',
  },
  {
    year: 'Present',
    label: 'College',
    title: 'LJ University',
    description: 'Studying Computer Science & Engineering and building real software projects.',
  },
];

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Education</div>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle">
            A simple timeline of my school and college path.
          </p>
        </div>

        <div className="education-journey-line">
          {educationJourney.map((item) => (
            <article className="education-journey-item" key={`${item.label}-${item.year}`}>
              <div className="education-journey-year">{item.year}</div>
              <div className="education-journey-dot" />
              <div className="education-journey-card">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
