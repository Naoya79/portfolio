import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

type ProjectCarouselProps = {
  images: string[];
  title: string;
};

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const total = images.length;
  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setIndex((prev) => (prev + 1) % total);
  const currentImage = images[index];
  const resolvedImageSrc =
    currentImage.startsWith("http://") ||
    currentImage.startsWith("https://") ||
    currentImage.startsWith("data:")
      ? currentImage
      : `${import.meta.env.BASE_URL}${currentImage.replace(/^\/+/, "")}`;

  return (
    <div className="projectCarousel" aria-label={t("projects.carousel.regionLabel")}>
      <img
        className="projectCarousel__image"
        src={resolvedImageSrc}
        alt={`${title} ${t("projects.carousel.imageLabel")} ${index + 1}/${total}`}
        loading="lazy"
      />
      <div className="projectCarousel__actions">
        <button type="button" className="projectCarousel__btn" onClick={goPrev} aria-label={t("projects.carousel.prev")}>
          {t("projects.carousel.prev")}
        </button>
        <p className="projectCarousel__counter" aria-live="polite">
          {index + 1} / {total}
        </p>
        <button type="button" className="projectCarousel__btn" onClick={goNext} aria-label={t("projects.carousel.next")}>
          {t("projects.carousel.next")}
        </button>
      </div>
    </div>
  );
}
