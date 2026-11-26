import { useEffect, useState } from "react";

export default function Typewriter({ phrases, speed = 55, pause = 1700 }) {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [text, setText] = useState(reduce ? phrases[0] : "");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return undefined;
    const full = phrases[index];
    let delay = deleting ? speed / 2 : speed;
    if (!deleting && text === full) delay = pause;
    else if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % phrases.length);
      } else {
        setText(
          deleting
            ? full.slice(0, text.length - 1)
            : full.slice(0, text.length + 1),
        );
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, speed, pause, reduce]);

  return (
    <p className="tagline">
      <span aria-hidden="true">{text}</span>
      <span className="caret" aria-hidden="true" />
      <span className="sr-only">{phrases.join(" ")}</span>
    </p>
  );
}
