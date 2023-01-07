import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "../../utils/motion";

function HeaderText({ children }) {
  return (
    <motion.h2
      variants={textVariant2}
      initial={"hidden"}
      whileInView={"show"}
      className=" text-4xl text-secondry font-bold font-Saira pt-16 pb-12"
    >
      {children}
    </motion.h2>
  );
}

export default HeaderText;
