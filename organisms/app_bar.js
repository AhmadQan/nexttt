import * as React from "react";
import { motion } from "framer-motion";

export default function HomeAppBar() {
  return (
    <motion.nav
      initial="hidden"
      whileInView={"show"}
      variants={{
        hidden: {
          opacity: 0,
          y: -50,
          transition: {
            type: "tween",
          },
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: "tween",
          },
        },
      }}
    >
      <div
        style={{
          padding: "1.8rem",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Saira",
            fontWeight: 600,
            fontSize: "1.2rem",
            color: "white",
          }}
        >
          TT
        </h1>
        <svg
          style={{ color: "#fff", width: "2rem" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>{" "}
    </motion.nav>
  );
}
