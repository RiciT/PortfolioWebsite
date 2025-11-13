import React from "react";
import { motion, type Variants } from "framer-motion";

/**
 * Full portfolio App.tsx for Tamas Balint Farago (RiCiT)
 * Requires: Tailwind CSS + Framer Motion
 */

/* ---------- Data (pulled from your CV) ---------- */

const CONTACT = {
  name: "Tamas Balint Farago",
  location: "Amsterdam",
  email: "tamas.balint.farago@gmail.com",
  linkedin: "https://www.linkedin.com/in/tamas-farago-077535291/",
  github: "https://www.github.com/RiCiT",
  playstore: "https://play.google.com/store/apps/details?id=com.alphacademy.alphasolve",
};

type TimelineItem = {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  type?: string;
  description?: string[];
  links?: { label: string; href: string }[];
};

/* Timeline entries — grouped by section later */
const WORK: TimelineItem[] = [
  {
    id: "alpha",
    title: "AlphaSolve",
    subtitle: "Developer / Prompt Engineer — Remote",
    date: "2025 – present",
    description: [
      "AI startup developing a wrapper application for solving mathematical questions",
      "Technologies: Python, Kotlin, Google Gemini API, Supabase",
    ],
    links: [{ label: "AlphaSolve (Play Store)", href: CONTACT.playstore }],
  },
  {
    id: "radion",
    title: "Radion Amsterdam",
    subtitle: "Club Runner — Amsterdam",
    date: "2023 – 2025",
    description: [
      "Industrial-chic bar & cafe in a cultural event space",
      "Demonstrated teamwork, time management, and a strong work ethic",
    ],
  },
  {
    id: "besk",
    title: "BESK Group",
    subtitle: "Student Developer — Budapest / Germany",
    date: "2021",
    description: [
      "Software development and documentation of Scrumpanion application",
      "Technologies: TypeScript, Java, JavaDoc, Jira, Scrum",
    ],
    links: [
      { label: "Scrumpanion (softonic)", href: "https://scrumpanion-scrum-planning-po.en.softonic.com/android" },
    ],
  },
  {
    id: "colonnade",
    title: "Colonnade Insurance S.A.",
    subtitle: "Student Consultant — Budapest",
    date: "2020",
    description: [
      "Unified Policy Document Formatting and verification",
      "Tools: Microsoft Word",
    ],
  },
];

const EDUCATION: TimelineItem[] = [
  {
    id: "vu-math",
    title: "Vrije Universiteit Amsterdam",
    subtitle: "BSc Mathematics",
    date: "2024 – (2027)",
    description: ["Currently pursuing a degree in Mathematics in Amsterdam"],
  },
  {
    id: "vu-ai",
    title: "Vrije Universiteit Amsterdam",
    subtitle: "BSc Artificial Intelligence (discontinued)",
    date: "2023 – 2024",
    description: ["Discontinued to pursue a more aligned academic focus (switched to Mathematics)"],
  },
  {
    id: "berzsenyi",
    title: "Berzsenyi Dániel Gimnázium",
    subtitle: "Advanced Physics and Computer Science class — Budapest",
    date: "2019 – 2023",
    description: ["High school specialization in physics and computer science"],
  },
];

const VOLUNTEERING: TimelineItem[] = [
  {
    id: "lakasbazis",
    title: "Hungarian Youth Association — 'Lakásbázis' project",
    date: "2024 – 2025",
    description: ["Project developer"],
  },
  {
    id: "freshmen",
    title: "Team Lead / Alumni Organizer — Freshmen Camp",
    date: "2020 – 2025",
    description: ["Coordinated alumni and volunteers at orientation events"],
  },
  {
    id: "butkemp",
    title: "Lead Organizer — Bútkemp (youth summer camp)",
    date: "2023",
    description: ["Lead organizer for a secondary school youth summer camp"],
  },
  {
    id: "wro",
    title: "World Robotic Olympiad — organizer & team guide",
    date: "2019",
    description: ["National final organizer & team guide (Tatabánya)"],
  },
  {
    id: "tutoring",
    title: "Teaching & Tutoring",
    date: "2019 – 2023",
    description: ["Programming, physics, mathematics — pro bono"],
  },
];

const ACHIEVEMENTS: TimelineItem[] = [
  {
    id: "ld58",
    title: "Ludum Dare Game Jam",
    date: "2025",
    description: ["180th in LD58 (2025). Participated in LD45, LD50, LD54, LD56 since 2019"],
    links: [{ label: "LD58 entry", href: "https://ldjam.com/events/ludum-dare/58/blood-and-bounty" }],
  },
  {
    id: "oktv-cs",
    title: "Hungarian National Science Competition (OKTV)",
    subtitle: "Computer Science — national finals qualification",
    date: "2022",
  },
  {
    id: "tdk",
    title: "University Science Conference (TDK)",
    subtitle: "ELTE Institute of Physics",
    date: "(year)",
    description: [
      "Modelling and Simulation of Particle Physics in Alpha-Stirling Motors (team of two)",
      "Consultants: Ákos Horváth PhD (ELTE); Zoltán Csernovszky PhD (BDG)",
    ],
  },
  {
    id: "oktv-math",
    title: "OKTV — Mathematics",
    date: "(year)",
    description: ["National finals qualification"],
  },
  {
    id: "young-scientist",
    title: "Young Scientist Competition (Ifjús Tudósok)",
    date: "(year)",
    description: ["Hungarian National Finals — Computer Science — 9th place (individual)"],
  },
  {
    id: "fll",
    title: "FIRST LEGO League & competitions",
    date: "2019 & earlier",
    description: [
      "1st Place Robot Design and Programming (local)",
      "Champion Finalist / Silver at World Festival (USA)",
      "Best Programming Award at Central European Finals",
    ],
  },
  {
    id: "kp",
    title: "Vigyázz, Kész, Pénz! (K&H Bank competition)",
    date: "2018",
    description: ["National Final — 1st place; Budapest Final — 3rd place"],
  },
];

const SKILLS = {
  programming: [
    "C#", "Python", "C++", "Processing", "Julia", "JavaScript", "TypeScript", "Java", "LaTeX", "Dart", "Visual Basic"
  ],
  software: [
    "Unity", "VS Code", "CLion", ".NET", "Anaconda", "Spyder", "WolframAlpha", "Mathematica", "MS Excel", "Jupyter", "Trello", "Jira"
  ],
  databases: ["MySQL", "MS Access"],
  frameworks: ["React + Vite", "Express", "Node.js", "MATLAB", "Flutter", "Arduino"],
  versionControl: ["GitHub"],
  languages: ["English (fluent, IELTS 8.0)", "Hungarian (mother tongue)", "German (basic)", "Italian (basic)"],
};

const PROJECTS: TimelineItem[] = [
  {
    id: "cobble",
    title: "Cobble (Turing-complete language & compiler)",
    date: "—",
    description: [
      "Compiler in C++ and web editor in React + Vite + TypeScript + Node/Express",
    ],
    links: [
      { label: "Compiler", href: "https://github.com/RiCiT/Cobble_Compiler" },
      { label: "Web editor", href: "https://github.com/RiCiT/Cobble_WebEditor" },
    ],
  },
  {
    id: "stirling",
    title: "Stirling (C# simulator)",
    date: "—",
    description: ["Simulates Stirling engine particle physics and data analysis"],
    links: [{ label: "Stirling repo", href: "https://github.com/RiCiT/Stirling" }],
  },
  {
    id: "pis",
    title: "Project Intelligent System",
    date: "—",
    description: ["Python app to find best strategies for Schnapsen using prewritten bots and AI"],
    links: [{ label: "Project Intelligent Systems", href: "https://github.com/RiCiT/Project-Intelligent-Systems" }],
  },
];

/* ---------- Animation variants ---------- */

const containerVariant: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariantLeft: Variants = {
  hidden: { opacity: 0, x: -40, scale: 0.98 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemVariantRight: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.98 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const dotGrow: Variants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

/* ---------- UI helpers ---------- */

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-neutral-700 hover:decoration-blue-400"
    >
      {children}
    </a>
  );
}

/* ---------- Timeline item component ---------- */

function TimelineCard({ item, side }: { item: TimelineItem; side: "left" | "right" }) {
  const variant = side === "left" ? itemVariantLeft : itemVariantRight;
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variant}
      className={`relative w-full md:w-5/12 p-4 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 rounded-2xl border border-neutral-800 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          {item.subtitle && <p className="text-sm text-neutral-400">{item.subtitle}</p>}
          <p className="text-sm text-neutral-500 mt-1">{item.date}</p>
          {item.description && (
            <ul className="list-disc list-inside mt-3 text-sm text-neutral-300 space-y-1">
              {item.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
          {item.links && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.links.map((l, i) => (
                <ExternalLink key={i} href={l.href}>
                  <span className="text-xs px-3 py-1 rounded-full bg-neutral-800/60 border border-neutral-700">{l.label}</span>
                </ExternalLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ---------- Section renderer: alternating left/right ---------- */

function SectionBlock({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <motion.div variants={containerVariant} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="relative">
          {/* center vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-neutral-800 to-neutral-700" />

          <div className="space-y-8">
            {items.map((item, idx) => {
              const side = idx % 2 === 0 ? "left" : "right";
              return (
                <div key={item.id} className={`flex flex-col md:flex-row items-center md:justify-between`}>
                  {/* left column */}
                  <div className={`md:w-5/12 ${side === "right" ? "md:order-2 md:pl-6" : "md:pr-6"}`}>
                    {side === "left" && <TimelineCard item={item} side="left" />}
                  </div>

                  {/* center dot + connector */}
                  <div className="w-full md:w-2/12 flex justify-center relative">
                    <motion.div
                      variants={dotGrow}
                      className="bg-gradient-to-br from-blue-500 to-violet-500 rounded-full w-5 h-5 ring-8 ring-neutral-900 relative z-10"
                    />
                    {/* connector line (grows vertically) */}
                    {idx < items.length - 1 && (
                      <motion.span
                        initial={{ height: 0 }}
                        whileInView={{ height: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute top-6 left-1/2 w-[2px] bg-neutral-800"
                      />
                    )}
                  </div>

                  {/* right column */}
                  <div className={`md:w-5/12 ${side === "left" ? "md:pl-6" : "md:pr-6"}`}>
                    {side === "right" && <TimelineCard item={item} side="right" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Main App ---------- */

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{CONTACT.name}</h1>
          <p className="text-sm text-neutral-400 mt-1">{CONTACT.location} — Software & AI developer • Musician</p>

          <div className="mt-3 flex flex-wrap gap-3">
            <a href={`mailto:${CONTACT.email}`} className="text-xs px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700">{CONTACT.email}</a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700">GitHub</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700">LinkedIn</a>
            <a href={CONTACT.playstore} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700">AlphaSolve (Play)</a>
          </div>
        </div>

        <nav className="ml-auto flex gap-3">
          <a href="#work" className="text-sm text-neutral-300 hover:text-white">Work</a>
          <a href="#education" className="text-sm text-neutral-300 hover:text-white">Education</a>
          <a href="#projects" className="text-sm text-neutral-300 hover:text-white">Projects</a>
          <a href="#achievements" className="text-sm text-neutral-300 hover:text-white">Achievements</a>
          <a href="#volunteering" className="text-sm text-neutral-300 hover:text-white">Volunteering</a>
          <a href="#skills" className="text-sm text-neutral-300 hover:text-white">Skills</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* Work */}
        <div id="work" className="mb-12">
          <SectionBlock title="Work Experience" items={WORK} />
        </div>

        {/* Education */}
        <div id="education" className="mb-12">
          <SectionBlock title="Education" items={EDUCATION} />
        </div>

        {/* Projects */}
        <div id="projects" className="mb-12">
          <SectionBlock title="Projects & Portfolio" items={PROJECTS} />
        </div>

        {/* Achievements */}
        <div id="achievements" className="mb-12">
          <SectionBlock title="Scientific Achievements & Competitions" items={ACHIEVEMENTS} />
        </div>

        {/* Volunteering */}
        <div id="volunteering" className="mb-12">
          <SectionBlock title="Volunteering & Community" items={VOLUNTEERING} />
        </div>

        {/* Skills */}
        <section id="skills" className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-neutral-900/50 rounded-2xl border border-neutral-800">
              <h3 className="font-semibold mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.programming.map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700">{s}</span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-neutral-900/50 rounded-2xl border border-neutral-800">
              <h3 className="font-semibold mb-3">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[...SKILLS.software, ...SKILLS.frameworks].map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700">{s}</span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-neutral-900/50 rounded-2xl border border-neutral-800">
              <h3 className="font-semibold mb-3">Databases & Version Control</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.databases.map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700">{s}</span>
                ))}
                {SKILLS.versionControl.map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700">{s}</span>
                ))}
              </div>
              <h4 className="mt-4 font-semibold">Languages</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {SKILLS.languages.map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-sm text-neutral-500 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto">
            <p>Made with care • © {new Date().getFullYear()} {CONTACT.name} — <a href={CONTACT.github} className="underline">GitHub</a></p>
            <p className="mt-2">Notes: this page is generated from CV contents; links and repos are included where available.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}