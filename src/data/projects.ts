export type Project = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "among-us-overlay",
    titleKey: "projects.items.amongUsOverlay.title",
    descriptionKey: "projects.items.amongUsOverlay.description",
    tech: ["JavaScript", "Chrome Extension", "Discord"],
    githubUrl: "https://github.com/naoya79/Among-Us-Discord-Overlay",
  },
  {
    id: "django-blogapp",
    titleKey: "projects.items.djangoBlogapp.title",
    descriptionKey: "projects.items.djangoBlogapp.description",
    tech: ["Django", "Python", "HTML", "Web Application"],
    githubUrl: "https://github.com/naoya79/Django-blogapp",
  },
  {
    id: "nlp-app",
    titleKey: "projects.items.nlpApp.title",
    descriptionKey: "projects.items.nlpApp.description",
    tech: ["JavaScript", "Web API", "Natural Language Processing"],
    githubUrl: "https://github.com/naoya79/Natural-language-processing",
  },
  {
    id: "line-bot",
    titleKey: "projects.items.lineBot.title",
    descriptionKey: "projects.items.lineBot.description",
    tech: ["HTML", "GAS", "Line Messaging API"],
  },
  {
    id: "ai-agent-projects",
    titleKey: "projects.items.aiAgentProjects.title",
    descriptionKey: "projects.items.aiAgentProjects.description",
    tech: ["AI Agent", "Cursor", "Antigravity", "Automation"],
  },
  {
    id: "incident-tool",
    titleKey: "projects.items.incidentTool.title",
    descriptionKey: "projects.items.incidentTool.description",
    tech: ["C++", "Win32 API", "ログ分析"],
  },
];


