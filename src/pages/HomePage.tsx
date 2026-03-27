import { Container } from "../components/Container";
import { ButtonLink } from "../components/ButtonLink";
import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { ProjectCarousel } from "../components/ProjectCarousel";
import { useI18n } from "../i18n/I18nProvider";
import { useDocumentTitle } from "../i18n/useDocumentTitle";
import { profile } from "../data/profile";
import { experienceItems } from "../data/experience";
import { skillCategories } from "../data/skills";
import { projects } from "../data/projects";

export function HomePage() {
  const { t } = useI18n();
  useDocumentTitle("meta.titles.home");

  return (
    <Container>
      <section className="hero" id="top">
        <div className="hero__copy">
          <p className="hero__kicker">{t("home.kicker")}</p>
          <h1 className="hero__title">{t("home.title")}</h1>
          <p className="hero__subtitle">{t("home.subtitle")}</p>
          <p className="hero__summary">{t("home.summary")}</p>

          <div className="hero__cta">
            <ButtonLink href={profile.githubUrl} target="_blank" rel="noreferrer" variant="primary">
              {t("home.cta.github")}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <header className="pageHeader">
          <h2 className="pageTitle">{t("about.title")}</h2>
          <p className="pageLead">{t("about.lead")}</p>
        </header>

        <div className="stack">
          <Card>
            <h3 className="cardTitle">{t("about.sections.background.title")}</h3>
            <p className="cardText">{t("about.sections.background.p1")}</p>
          </Card>

          <Card>
            <h3 className="cardTitle">{t("about.sections.strengths.title")}</h3>
            <ul className="list">
              <li>{t("about.sections.strengths.items.0")}</li>
              <li>{t("about.sections.strengths.items.1")}</li>
              <li>{t("about.sections.strengths.items.2")}</li>
            </ul>
          </Card>

          <Card>
            <h3 className="cardTitle">{t("about.sections.philosophy.title")}</h3>
            <p className="cardText">{t("about.sections.philosophy.p1")}</p>
          </Card>
        </div>
      </section>

      <section id="experience" className="section">
        <header className="pageHeader">
          <h2 className="pageTitle">{t("experience.title")}</h2>
          <p className="pageLead">{t("experience.lead")}</p>
        </header>

        <div className="timeline" role="list">
          {experienceItems.map((item) => (
            <Card key={item.id}>
              <p className="meta">{t(item.periodKey)}</p>
              <h3 className="cardTitle">{t(item.titleKey)}</h3>
              <ul className="list">
                {item.bulletsKeys.map((k) => (
                  <li key={k}>{t(k)}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <header className="pageHeader">
          <h2 className="pageTitle">{t("skills.title")}</h2>
        </header>

        <div className="grid grid--2">
          {skillCategories.map((cat) => (
            <Card key={cat.id}>
              <h3 className="cardTitle">{t(cat.titleKey)}</h3>
              <div className="tags">
                {cat.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <header className="pageHeader">
          <h2 className="pageTitle">{t("projects.title")}</h2>
        </header>

        <div className="grid grid--3">
          {projects.map((p) => (
            <Card key={p.id}>
              <h3 className="cardTitle">{t(p.titleKey)}</h3>
              <ProjectCarousel images={p.images} title={t(p.titleKey)} />
              <p className="cardText">{t(p.descriptionKey)}</p>
              <div className="tags">
                {p.tech.map((x) => (
                  <Tag key={x}>{x}</Tag>
                ))}
              </div>
              {p.githubUrl && (
                <div className="cardActions">
                  <ButtonLink href={p.githubUrl} target="_blank" rel="noreferrer" variant="ghost">
                    {t("projects.viewOnGitHub")}
                  </ButtonLink>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}


