import React from "react";
import { motion } from "framer-motion";
interface PageTransitionProps {
  children: React.ReactNode;
  disableTransition?: boolean;
}
const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  disableTransition,
}) => {
  return (
    <>
      {!disableTransition && (
        <motion.div
          className="fixed inset-0 z-50 bg-dark-primary"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{
            scaleX: [0, 1, 1, 0],
            originX: [0, 0, 1, 1],
          }}
          transition={{
            times: [0, 0.5, 0.5, 1],
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      )}
      {children}
    </>
  );
};

export default PageTransition;
