import CircularCarousel from "../../effects/CircularCarousel";

export default function Gallery({ items, aspectRatio = 1 }) {
  return (
    <div className="gallery">
      <CircularCarousel
        items={items}
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
