"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/site-config";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.38 4 15c0 2.36.65 4.56 1.78 6.45L4 29l7.73-1.73A11.9 11.9 0 0 0 16.02 27C22.64 27 28 21.62 28 15S22.64 3 16.02 3Zm0 21.7c-1.98 0-3.83-.57-5.4-1.55l-.39-.23-4.15.93.9-4.03-.25-.4A9.63 9.63 0 0 1 5.4 15c0-5.86 4.77-10.62 10.62-10.62S26.64 9.14 26.64 15 21.88 24.7 16.02 24.7Zm5.83-7.9c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.87-1.76-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.75-.99-2.39-.26-.63-.53-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.08 1.31 3.3c.16.21 2.26 3.47 5.49 4.86.77.33 1.36.53 1.83.68.77.24 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

/** Floating click-to-chat button, present on every page. */
export default function WhatsAppButton() {
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowLabel(false), 4500);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="wa-float"
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <AnimatePresence>
        {showLabel && (
          <motion.span
            className="wa-float-label"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.3 }}
          >
            Chat with us
          </motion.span>
        )}
      </AnimatePresence>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn"
        aria-label="Chat with Blue Ocean Chemicals on WhatsApp"
        onMouseEnter={() => setShowLabel(true)}
      >
        <motion.span
          className="wa-float-ring"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <WhatsAppIcon />
      </a>
    </motion.div>
  );
}
