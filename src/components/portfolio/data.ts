export const PROFILE = {
  name: "DHEERAJ VISHWAKARMA",
  callsign: "STELLAR009",
  role: "Unity Game Developer",
  intro:
    "Unity Game Developer specializing in performance optimization, technical art, and rendering pipelines (URP/HDRP). Shipped 3 Unity projects — Unity Junior Programmer certified. Seeking an entry-level Unity developer role.",
  status: "SEEKING ENTRY-LEVEL UNITY DEVELOPER ROLES",
  location: "Mumbai, India",
  focus: "Unity · URP · Shaders",
  openTo: "Entry-level Game Dev roles",
  email: "dheeraj32vi@gmail.com",
  phone: "+91 91378 90170",
  phoneHref: "+919137890170",
  github: "https://github.com/stellar009",
  githubHandle: "@stellar009",
  linkedin: "https://www.linkedin.com/in/dheeraj-vishwakarma-4a5b76351/",
  linkedinHandle: "Dheeraj Vishwakarma",
  itch: "https://stellar009.itch.io/",
  itchHandle: "stellar009.itch.io",
};

export const RESUME = {
  url: "/resume/Dheeraj_Vishwakarma_Resume_GameDeveloper.pdf",
  filename: "Dheeraj_Vishwakarma_Resume_GameDeveloper.pdf",
  label: "Game Developer Resume — PDF",
};

export const STATS = [
  { value: "3", label: "SHIPPED UNITY PROJECTS" },
  { value: "URP", label: "UNITY 6 RENDER FOCUS" },
  { value: "11D", label: "GAME-JAM SPRINT" },
];

export const ABOUT = {
  paragraphs: [
    "Unity Game Developer specializing in performance optimization, technical art, and rendering pipelines (URP/HDRP). Shipped 3 Unity projects including a 3D puzzle game with major stability gains from VRAM optimization, material-system rebuilds, and dynamic quality scaling, alongside titles spanning 2D platformer and WebGL.",
    "Unity Junior Programmer certified. Seeking an entry-level Unity developer role.",
  ],
  quickFacts: [
    { label: "CERTIFICATION", value: "Unity Junior Programmer — Certified · Oct 2026" },
    { label: "EDUCATION", value: "BSc Information Technology — CGPA 8.40 / 10" },
    { label: "ENGINE", value: "Unity 6 (URP / HDRP)" },
    { label: "LANGUAGE", value: "C# (Unity Scripting API)" },
    { label: "3D TOOLING", value: "Blender · Shader Graph" },
    { label: "VERSION CONTROL", value: "Git / GitHub" },
  ],
};

export const SKILLS = [
  {
    code: "SYS-01",
    title: "Game Engines & Rendering",
    description:
      "Unity 6 (URP & HDRP), Unity Shader Graph, Material & PBR workflows.",
    tags: ["Unity 6 URP", "HDRP", "Shader Graph", "PBR"],
  },
  {
    code: "SYS-02",
    title: "Programming",
    description: "C#, OOP & SOLID principles, and design patterns.",
    tags: ["C#", "OOP / SOLID", "Design Patterns"],
  },
  {
    code: "SYS-03",
    title: "Unity Systems",
    description:
      "ScriptableObjects, async/await, 2D/3D physics, Profiler & Frame Debugger, WebGL for desktop and mobile browsers.",
    tags: ["ScriptableObjects", "async/await", "Physics", "Profiler", "WebGL"],
  },
  {
    code: "SYS-04",
    title: "Tools",
    description: "Blender 3D, Git/GitHub for version control, and Visual Studio.",
    tags: ["Blender 3D", "Git / GitHub", "Visual Studio"],
  },
  {
    code: "SYS-05",
    title: "Engineering Practices",
    description:
      "Performance profiling & optimization, build optimization, version control workflows, playtesting & QA.",
    tags: ["Profiling", "Build Optimization", "VCS", "Playtesting / QA"],
  },
];

export interface Project {
  id: string;
  code: string;
  name: string;
  type: string;
  period: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: { label: string; url: string }[];
  accent: "cyan" | "red" | "amber";
}

export const PROJECTS: Project[] = [
  {
    id: "horizon-rise",
    code: "PRJ-001",
    name: "Horizon Rise",
    type: "3D · Puzzle · Unity URP",
    period: "Oct 2025 – Feb 2026",
    role: "Game Developer / Designer",
    description:
      "A 3D sci-fi puzzle game built in Unity (URP), focused on performance optimization and player experience.",
    highlights: [
      "Engineered a dynamic graphics optimization system that scales quality settings (frame-rate cap and texture quality) based on device VRAM at launch, ensuring smooth gameplay across multiple hardware configurations.",
      "Diagnosed VRAM exhaustion crashes across 10 device configurations and eliminated them by rebuilding the material library and enabling GPU instancing, cutting VRAM consumption from 512 MB to 216 MB (a 58% reduction) and delivering stable gameplay on low-end hardware.",
      "Developed core gameplay loop featuring a 10-minute timed mission to \"Deactivate the Core.\"",
    ],
    stack: ["Unity (URP)", "C#", "Git"],
    links: [
      { label: "DOWNLOAD", url: "https://stellar009.itch.io/horizon-rise" },
      { label: "SOURCE", url: "https://github.com/stellar009/Horizon-Rise" },
    ],
    accent: "cyan",
  },
  {
    id: "recollection",
    code: "PRJ-002",
    name: "ReCollection",
    type: "2D · Puzzle-Platformer · Game Jam",
    period: "25 Sep – 05 Oct 2026",
    role: "Game Developer · Tantra Fiesta Game Jam, IIIT Nagpur",
    description:
      "A 2D puzzle-platformer built with a two-person team in 11 days for the \"Plot Twist\" theme, where gravity and player controls invert independently, forcing players to re-solve the same spaces under opposing rules.",
    highlights: [
      "Designed two independent flip mechanics (gravity inversion and control inversion) that combine into distinct puzzle states, with levels reused across normal and inverted passes to double content depth.",
      "Built custom Shader Graph effects, including an emissive glow/bloom visual language and a reality-inversion reveal effect, within a 2D URP pipeline.",
      "Diagnosed and resolved physics-based bugs (collider tunneling, high fall-velocity instability) and optimized rendering with SRP Batcher and async scene loading.",
    ],
    stack: ["Unity (URP 2D)", "C#", "Shader Graph", "Git"],
    links: [
      { label: "DOWNLOAD", url: "https://stellar009.itch.io/recollection" },
      { label: "SOURCE", url: "https://github.com/stellar009/ReCollection" },
    ],
    accent: "red",
  },
  {
    id: "xecute",
    code: "PRJ-003",
    name: "XeCute",
    type: "2D · Card Game · WebGL",
    period: "06 Nov – 14 Nov 2026",
    role: "Game Developer · Official 2026 Unity Game Jam",
    description:
      "Browser-based 2D card game (Unity/C#, WebGL) shipped for the Official 2026 Unity Game Jam; play-tested and verified on desktop and Android mobile browsers.",
    highlights: [
      "Designed an event-driven architecture using a static event bus to fully decouple UI from core game logic, centered on a state-machine round manager.",
      "Architected gameplay fully data-tunable via ScriptableObject configuration, with a TextMeshPro UI, color-coded game-state feedback, and a complete audio pass (CC0 assets).",
    ],
    stack: ["Unity 6.6 (2D URP)", "C#", "ScriptableObjects", "WebGL", "Git"],
    links: [
      { label: "PLAY LIVE", url: "https://stellar009.itch.io/xecute" },
      { label: "SOURCE", url: "https://github.com/stellar009/XeCute" },
    ],
    accent: "amber",
  },
];

export interface Credential {
  code: string;
  category: string;
  title: string;
  org: string;
  detail: string;
  link?: { label: string; url: string };
}

export const CREDENTIALS: Credential[] = [
  {
    code: "EDU-01",
    category: "Education",
    title: "Bachelor of Science in Information Technology",
    org: "Vikas College of Arts, Science & Commerce, Mumbai, India",
    detail: "2023 – 2026 · CGPA 8.40 / 10",
  },
  {
    code: "CRT-01",
    category: "Certification",
    title: "Unity Junior Programmer",
    org: "Unity Technologies",
    detail: "Issued 13 Oct 2026",
    link: {
      label: "VERIFY CREDENTIAL",
      url: "https://www.credly.com/go/2IOM2UCN",
    },
  },
  {
    code: "JAM-01",
    category: "Game Jam",
    title: "Tantra Fiesta · IIIT Nagpur",
    org: "ReCollection — 2D puzzle-platformer",
    detail: "25 Sep – 05 Oct 2026 · \"Plot Twist\" theme",
  },
  {
    code: "JAM-02",
    category: "Game Jam",
    title: "Official 2026 Unity Game Jam",
    org: "XeCute — browser-based 2D card game",
    detail: "06 – 14 Nov 2026 · WebGL",
  },
];

export const NAV_ITEMS = [
  { id: "about", num: "01", label: "ABOUT" },
  { id: "skills", num: "02", label: "SKILLS" },
  { id: "projects", num: "03", label: "PROJECTS" },
  { id: "credentials", num: "04", label: "CREDENTIALS" },
  { id: "contact", num: "05", label: "CONTACT" },
];

export const MARQUEE_ITEMS = [
  "UNITY 6",
  "URP / HDRP",
  "C#",
  "SHADER GRAPH",
  "PBR WORKFLOWS",
  "PERFORMANCE PROFILING",
  "BLENDER 3D",
  "SRP BATCHER",
  "SCRIPTABLEOBJECTS",
  "GIT / GITHUB",
  "TEXTMESHPRO",
  "ADVANCED LIGHTING",
];
