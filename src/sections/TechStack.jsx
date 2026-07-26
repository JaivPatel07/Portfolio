import {
  SiReact, SiNextdotjs, SiPython, SiDjango, SiNodedotjs, SiTypescript,
  SiJavascript, SiFastapi, SiPostgresql, SiMongodb, SiDocker, SiGit,
  SiGithub, SiTailwindcss, SiFirebase, SiRedis, SiLinux, SiVercel, SiFigma,
  SiTensorflow,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { techStack } from '../data';

export default function TechStack() {
  const icons = {
    SiReact, SiNextdotjs, SiPython, SiDjango, SiNodedotjs, SiTypescript,
    SiJavascript, SiFastapi, SiPostgresql, SiMongodb, SiDocker, SiGit,
    SiGithub, SiTailwindcss, SiFirebase, SiRedis, SiLinux, SiVercel, SiFigma,
    FaAws, SiTensorflow,
  };

  return (
    <section
      className="section"
      id="techstack"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Tech Stack</div>
          <h2 className="section-title">
            Technologies I Use to Build Modern Applications
          </h2>
          <p className="section-subtitle">
            My preferred tools for building scalable, responsive, and
            production-ready applications.
          </p>
        </div>

        <div className="tech-stack-grid compact">
          {techStack.map(({ name, icon, color }) => {
            const IconComponent = icons[icon];
            return (
              <div className="tech-item" key={name}>
                {IconComponent && <IconComponent className="tech-icon" style={{ color }} />}
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
