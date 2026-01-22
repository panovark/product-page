import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import styles from "./Header.module.scss";
import type { NavLink } from "@/types";

interface MobileMenuProps {
  links: NavLink[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className={styles.burger} aria-label="Open menu">
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.nav
                className={styles.mobileMenu}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Dialog.Title className={styles.menuTitle}>
                  Navigation
                </Dialog.Title>
                <Dialog.Description className={styles.srOnly}>
                  Main navigation menu
                </Dialog.Description>

                <div className={styles.menuLinks}>
                  {links.map((link) => (
                    <Dialog.Close asChild key={link.href}>
                      <a href={link.href} className={styles.menuLink}>
                        {link.label}
                      </a>
                    </Dialog.Close>
                  ))}
                </div>

                <Dialog.Close asChild>
                  <button
                    className={styles.closeButton}
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </Dialog.Close>
              </motion.nav>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
