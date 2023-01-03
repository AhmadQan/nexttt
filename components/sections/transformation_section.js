import React from "react";
import Blurdiv from "../atoms/blurdiv";
import HeaderText from "../molecules/header_text";

import TransItem from "../organisms/trans_item";

function TransformationSection() {
  return (
    <section>
      <div
        style={{
          position: "absolute",
          width: "80vw",
          height: "40rem",
          right: "0",
          top: "0",

          background: "#C689F9",
          opacity: "0.3",
          filter: "blur(200px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "691px",
          left: "0",
          bottom: "0",

          background: "#085f63",
          opacity: "0.3",
          filter: "blur(200px)",
        }}
      />
      <Blurdiv />
      <HeaderText>Our Transformation</HeaderText>
      <TransItem />
      <TransItem />
      <TransItem />
    </section>
  );
}

export default TransformationSection;
