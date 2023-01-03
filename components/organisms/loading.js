import React from "react";

import Spline from "@splinetool/react-spline";

function Loading() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Welcome ...</h1>
      <div
        style={{
          height: "20rem",
          width: "20rem",
        }}
      >
        <Spline
          className="threeDanim"
          scene="https://prod.spline.design/3jYuARCzdzhKfe5S/scene.splinecode"
        />
      </div>
    </div>
  );
}

export default Loading;
