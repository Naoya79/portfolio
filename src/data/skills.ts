export type SkillCategory = {
  id: "security" | "programming" | "tools" | "other";
  titleKey: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "security",
    titleKey: "skills.categories.security",
    items: ["Vulnerability Assessment", "Web App Security Testing", "Network Security Testing", "OWASP Top 10", "Penetration Testing"],
  },
  {
    id: "programming",
    titleKey: "skills.categories.programming",
    items: ["Python", "VBA", "Bash", "JavaScript", "Java", "C++", "PHP", "Django", "HTML"],
  },
  {
    id: "tools",
    titleKey: "skills.categories.tools",
    items: ["Burp Suite", "Fiddler", "Nessus", "InsightVM", "Metasploit", "Nmap", "Chrome Extension"],
  },
  {
    id: "other",
    titleKey: "skills.categories.other",
    items: ["Line Messaging API", "Web API Integration", "Natural Language Processing"],
  },
];


