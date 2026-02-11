import { Container } from "./Container";
import { LanguageToggle } from "./LanguageToggle";
import { useI18n } from "../i18n/I18nProvider";

const navItems = [
  { href: "#top", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#experience", key: "nav.experience" },
  { href: "#skills", key: "nav.skills" },
  { href: "#projects", key: "nav.projects" }
] as const;

export function Header() {
  const { t } = useI18n();
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <div className="header__brand">
            <a className="brand" href="#top">
              {t("brand.name")}
            </a>
            <span className="brand__role">{t("brand.roleShort")}</span>
          </div>

          <nav className="nav" aria-label={t("nav.ariaLabel")}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav__link">
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <LanguageToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}


