"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Button } from "@/src/components/ui";

const groupVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function CustomSoftwareCta() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="custom">
      <div className="container custom-layout">
        <motion.div
          className="custom-copy"
          variants={groupVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span className="eyebrow eyebrow-light" variants={itemVariants}>MADE FOR YOUR BUSINESS</motion.span>
          <motion.h2 variants={itemVariants}>Have a unique<br />software idea?</motion.h2>
          <motion.p variants={itemVariants}>
            Tell us about your business requirements and we’ll help turn your idea into a practical software solution.
          </motion.p>
          <motion.div className="custom-actions" variants={itemVariants}>
            <Button href="/request-quote">Start your project</Button>
            <Link className="button button-outline" href="/request-quote">Request a quote</Link>
          </motion.div>
        </motion.div>
        <div className="custom-art" aria-hidden="true">
          <span className="custom-art-glow"/>
          <span className="custom-art-orbit orbit-wide"/>
          <span className="custom-art-orbit orbit-tall"/>
          <span className="custom-art-orbit orbit-small"/>
          <span className="custom-art-core">✳</span>
          <span className="custom-art-node node-a"/>
          <span className="custom-art-node node-b"/>
          <span className="custom-art-node node-c"/>
          <span className="custom-art-spark spark-a"/>
          <span className="custom-art-spark spark-b"/>
        </div>
      </div>
    </section>
  );
}