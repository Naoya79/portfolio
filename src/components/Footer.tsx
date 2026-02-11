import { Container } from "./Container";
import { useI18n } from "../i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <p className="footer__text">{t("footer.note")}</p>
          <p className="footer__textSmall">
            © {new Date().getFullYear()} {t("brand.name")}
          </p>
        </div>
      </Container>
    </footer>
  );
}


