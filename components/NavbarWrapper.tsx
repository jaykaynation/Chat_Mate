//navbarwrapper.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';

export const NavbarWrapper = () => {
  return (
    <motion.div
      {...({
        className: "w-full fixed top-0 left-0 z-40",
        initial: { y: -80, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -80, opacity: 0 },
        transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.4 }
      } as any)}
    >
      <Navbar />
    </motion.div>
  );
};
