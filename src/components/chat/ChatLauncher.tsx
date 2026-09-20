"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:scale-110 transition-transform duration-300"
      aria-hidden="true"
    >
      <path d="M20 11.5a8 8 0 0 1-11.8 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5z" />
      <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c.5 1 1.2 1.7 2.2 2.2l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.5.1-1.3-.3-2.4-1-3.4-2s-1.7-2.1-2-3.4c-.2-.5-.1-1.1.1-1.5z" />
    </svg>
  );
}

export function ChatLauncher() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay showing launcher to create a premium subtle entrance animation after page mount
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40"
        >
          <a
            href={siteConfig.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-hover text-accent-foreground h-12 md:h-14 px-4 md:px-6 shadow-xl border border-accent/20 transition-all duration-300 rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
            aria-label="Chat with us"
          >
            <WhatsAppIcon size={16} />

            {/* Desktop Label */}
            <span className="hidden md:inline text-xs font-semibold uppercase tracking-wider font-sans select-none">
              Chat with us
            </span>

            {/* Mobile Tooltip/Label */}
            <span className="md:hidden sr-only">Chat with us</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
