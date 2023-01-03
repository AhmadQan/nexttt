import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "../../utils/motion";

function HeaderText({ children }) {
  return (
    <motion.h2
      variants={textVariant2}
      initial={"hidden"}
      whileInView={"show"}
      className=" text-4xl text-white font-bold font-Saira pt-16 pb-7"
    >
      {children}
    </motion.h2>
  );
}

export default HeaderText;
