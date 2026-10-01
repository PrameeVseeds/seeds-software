"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const softX = useSpring(x, { stiffness: 90, damping: 22, mass: 0.55 });
  const softY = useSpring(y, { stiffness: 90, damping: 22, mass: 0.55 });
  const trailX = useSpring(x, { stiffness: 210, damping: 26, mass: 0.3 });
  const trailY = useSpring(y, { stiffness: 210, damping: 26, mass: 0.3 });

  useEffect(() => {
    if (reduceMotion) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target;
      const overControl =
        target instanceof Element &&
        target.closest("a,button,[role='button'],input,textarea,select,summary") !== null;
      setVisible(!overControl);
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;
  const cursorStyle = { opacity: visible ? 1 : 0 };
  return (
    <>
      <motion.div className="cursor-glow" style={{ x: softX, y: softY, ...cursorStyle }} aria-hidden="true" />
      <motion.div className="cursor-trail" style={{ x: trailX, y: trailY, ...cursorStyle }} aria-hidden="true" />
      <motion.div className="cursor-dot" style={{ x, y, ...cursorStyle }} aria-hidden="true" />
    </>
  );
}