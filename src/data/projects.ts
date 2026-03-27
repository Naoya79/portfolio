export type Project = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  images: string[];
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "among-us-overlay",
    titleKey: "projects.items.amongUsOverlay.title",
    descriptionKey: "projects.items.amongUsOverlay.description",
    tech: ["JavaScript", "Chrome Extension", "Discord"],
    images: ["/projects/among-us-overlay/app1.gif", "/projects/among-us-overlay/app2.png"],
    githubUrl: "https://github.com/naoya79/Among-Us-Discord-Overlay",
  },
  {
    id: "django-blogapp",
    titleKey: "projects.items.djangoBlogapp.title",
    descriptionKey: "projects.items.djangoBlogapp.description",
    tech: ["Django", "Python", "HTML", "Web Application"],
    images: ["/projects/django-blogapp/blog1.png", "/projects/django-blogapp/blog2.png", "/projects/django-blogapp/blog3.png", "/projects/django-blogapp/blog4.png"],
    githubUrl: "https://github.com/naoya79/Django-blogapp",
  },
  {
    id: "nlp-app",
    titleKey: "projects.items.nlpApp.title",
    descriptionKey: "projects.items.nlpApp.description",
    tech: ["JavaScript", "Web API", "Natural Language Processing"],
    images: ["/projects/nlp-app/nlp1.png", "/projects/nlp-app/nlp2.png", "/projects/nlp-app/nlp3.png"],
    githubUrl: "https://github.com/naoya79/Natural-language-processing",
  },
  {
    id: "line-bot",
    titleKey: "projects.items.lineBot.title",
    descriptionKey: "projects.items.lineBot.description",
    tech: ["HTML", "GAS", "Line Messaging API"],
    images: ["/projects/line-bot/line1.png", "/projects/line-bot/line2.png"],
  },
  {
    id: "ai-agent-projects",
    titleKey: "projects.items.aiAgentProjects.title",
    descriptionKey: "projects.items.aiAgentProjects.description",
    tech: ["AI Agent", "Cursor", "Antigravity", "Automation"],
    images: ["/projects/ai-agent-projects/app1.png", "/projects/ai-agent-projects/app2.png", "/projects/ai-agent-projects/app3.png", "/projects/ai-agent-projects/app4.png"],
  },
  {
    id: "incident-tool",
    titleKey: "projects.items.incidentTool.title",
    descriptionKey: "projects.items.incidentTool.description",
    tech: ["C++", "Win32 API", "ログ分析"],
    images: ["/projects/incident-tool/tool.png"],
  },
];


