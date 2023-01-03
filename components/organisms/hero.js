import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, textVariant } from "../../utils/motion";
function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ amount: 0.25, once: false }}
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial={"hidden"}
        whileInView={"show"}
        style={{
          height: "100%",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Lr6LIcaWxNM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
