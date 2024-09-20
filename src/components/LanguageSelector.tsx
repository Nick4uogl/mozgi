import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const LanguageSelector: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const languages = ["UA", "RU"];
  return (
    <div
      className="relative z-30 flex cursor-pointer items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full lg:h-[38px] lg:w-[38px]">
        <div className="absolute left-0 top-0 h-full w-full rounded-full border border-solid border-black opacity-[0.12]"></div>
        <p className="font-bodyGrotesque text-sm lg:text-[15px]">👅</p>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute left-full top-[2px] flex items-center pl-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ type: "just" }}
          >
            {languages.map((lang, index) => (
              <motion.div
                key={lang}
                className="cursor-pointer px-2 py-1 text-sm font-semibold text-dark-primary"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{
                  delay: index * 0.1,
                  type: "just",
                }}
              >
                {lang}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
