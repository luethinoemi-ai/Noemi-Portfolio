import { useEffect, useId, useRef, useState } from "react";
import "./Reveal.css";

export default function Reveal({ children, text, image, alt = "" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const lastType = useRef("mouse");
  const id = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <span
      ref={ref}
      className="reveal"
      onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(false)}
    >
      <button
        type="button"
        className="reveal-word"
        aria-expanded={open}
        aria-describedby={id}
        onPointerDown={(e) => {
          lastType.current = e.pointerType;
        }}
        onClick={() =>
          setOpen((o) => (lastType.current === "mouse" ? true : !o))
        }
      >
        {children}
      </button>
      <span
        id={id}
        role="tooltip"
        className={`reveal-pop ${open ? "is-open" : ""}`}
      >
        {image && <img src={image} alt={alt} loading="lazy" />}
        {text && <span className="reveal-text">{text}</span>}
      </span>
    </span>
  );
}
