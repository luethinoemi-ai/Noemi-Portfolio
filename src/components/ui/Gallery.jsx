import CircularCarousel from "../../effects/CircularCarousel";
import { useLang } from "../../i18n/context";

export default function Gallery({ items, aspectRatio = 1 }) {
  const { lang, loc } = useLang();
  const resolved = items.map((item) => ({
    src: item.src,
    alt: loc(item.title),
    title: loc(item.title),
    subtitle: loc(item.subtitle),
  }));

  return (
    <div className="gallery">
      <CircularCarousel
        key={lang}
        items={resolved}
        preset="cylinder"
        intro="rise"
        cardWidth={220}
        aspectRatio={aspectRatio}
        speed={10}
        fadeColor="var(--bg)"
        cornerRadius={10}
        captions
      />
    </div>
  );
}
