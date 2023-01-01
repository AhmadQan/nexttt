import React from "react";
import Spline from "@splinetool/react-spline";
import ImgMediaCard from "../organisms/card";

import { motion } from "framer-motion";
import { slideIn, elementVariant, elementVariant2 } from "../utils/motion";

function CardGrid() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2.8rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        variants={slideIn("left", "tween", 0.3, 1)}
        viewport={{ once: false }}
      >
        <ImgMediaCard>
          <motion.div
            variants={elementVariant}
            initial={"hidden"}
            whileInView={"show"}
          >
            <Spline scene="https://prod.spline.design/3jYuARCzdzhKfe5S/scene.splinecode" />
          </motion.div>
        </ImgMediaCard>
      </motion.div>
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        variants={slideIn("left", "tween", 0.3, 1)}
        viewport={{ once: false }}
      >
        <ImgMediaCard>
          <motion.div
            variants={elementVariant2}
            initial={"hidden"}
            whileInView={"show"}
          >
            <Spline scene="https://prod.spline.design/35ihN49YRBk9P7WF/scene.splinecode" />
          </motion.div>
        </ImgMediaCard>
      </motion.div>
      <motion.div
        initial={"hidden"}
        whileInView={"show"}
        variants={slideIn("left", "tween", 0.3, 1)}
        viewport={{ once: false }}
      >
        <ImgMediaCard>
          <Spline scene="https://prod.spline.design/35ihN49YRBk9P7WF/scene.splinecode" />
        </ImgMediaCard>
      </motion.div>
    </div>
  );
}

export default CardGrid;
