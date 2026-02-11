export type ExperienceItem = {
  id: string;
  periodKey: string;
  titleKey: string;
  bulletsKeys: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    id: "va-specialist",
    periodKey: "experience.items.va.period",
    titleKey: "experience.items.va.title",
    bulletsKeys: [
      "experience.items.va.bullets.0",
      "experience.items.va.bullets.1",
      "experience.items.va.bullets.2",
      "experience.items.va.bullets.3",
      "experience.items.va.bullets.4",
    ],
  },
  {
    id: "automation",
    periodKey: "experience.items.automation.period",
    titleKey: "experience.items.automation.title",
    bulletsKeys: [
      "experience.items.automation.bullets.0",
      "experience.items.automation.bullets.1",
      "experience.items.automation.bullets.2",
    ],
  },
  {
    id: "education",
    periodKey: "experience.items.education.period",
    titleKey: "experience.items.education.title",
    bulletsKeys: [
      "experience.items.education.bullets.0",
      "experience.items.education.bullets.1",
    ],
  },
];


