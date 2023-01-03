import React from "react";
import Spline from "@splinetool/react-spline";
import ImgMediaCard from "./card";

import { motion } from "framer-motion";
import { slideIn, elementVariant, elementVariant2 } from "../../utils/motion";

import HeaderText from "../molecules/header_text";

function CardGrid() {
  return (
    <section
      style={{
        display: "flex",
        gap: "2.8rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <HeaderText>Our services</HeaderText>
      <ImgMediaCard>
        <Spline scene="https://prod.spline.design/3jYuARCzdzhKfe5S/scene.splinecode" />
      </ImgMediaCard>

      <ImgMediaCard>
        <Spline scene="https://prod.spline.design/35ihN49YRBk9P7WF/scene.splinecode" />
      </ImgMediaCard>

      <ImgMediaCard>
        <Spline scene="https://prod.spline.design/35ihN49YRBk9P7WF/scene.splinecode" />
      </ImgMediaCard>
    </section>
  );
}

export default CardGrid;
