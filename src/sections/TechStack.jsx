import {
  SiReact, SiNextdotjs, SiPython, SiDjango, SiNodedotjs, SiTypescript,
  SiJavascript, SiFastapi, SiPostgresql, SiMongodb, SiDocker, SiGit,
  SiGithub, SiTailwindcss, SiFirebase, SiRedis, SiLinux, SiVercel,
  SiFigma, SiFlask, SiExpress,
  SiGraphql, SiMysql, SiSqlite, SiBootstrap,
} from 'react-icons/si';
import { FaAws, FaRobot } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const techItems = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: 'var(--text-primary)' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Django', Icon: SiDjango, color: '#44B78B' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: 'var(--text-primary)' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
  { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
  { name: 'Vercel', Icon: SiVercel, color: 'var(--text-primary)' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'OpenAI', Icon: FaRobot, color: '#412991' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'VS Code', Icon: VscVscode, color: '#007ACC' },
  { name: 'Flask', Icon: SiFlask, color: 'var(--text-primary)' },
  { name: 'Express', Icon: SiExpress, color: 'var(--text-primary)' },
  { name: 'GraphQL', Icon: SiGraphql, color: '#E10098' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'SQLite', Icon: SiSqlite, color: '#003B57' },
  { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
];

export default function TechStack() {
  return (
    <section className="section" id="techstack" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🧰 Tech Stack</div>
          <h2 className="section-title">Tools I Work With</h2>
          <p className="section-subtitle">
            A snapshot of the technologies powering my projects day-to-day.
          </p>
        </div>

        <div className="tech-stack-grid">
          {techItems.map(({ name, Icon, color }) => (
            <div className="tech-item" key={name}>
              <Icon className="tech-icon" style={{ color }} />
              <span className="tech-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
