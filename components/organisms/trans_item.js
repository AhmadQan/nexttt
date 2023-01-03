import React, { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

function TransItem() {
  const [isExtanded, setisExtanded] = useState(false);

  const variants = {
    open: { width: "100%" },
    closed: { width: "60%" },
  };

  const handleExpend = (e) => {
    e.preventDefault();
    setisExtanded(!isExtanded);
  };

  return (
    <motion.div
      variants={fadeIn("right", "tween", 0.55, 1)}
      initial={"hidden"}
      whileInView={"show"}
      className="flex flex-col pb-11"
    >
      <h2 className="text-white text-2xl font-semibold pb-4">Client Name</h2>
      <div className="flex justify-between gap-5">
        <motion.button
          animate={isExtanded ? "open" : "closed"}
          variants={variants}
          onClick={(e) => {
            handleExpend(e);
          }}
          className="flex relative "
          style={{ height: "20rem" }}
        >
          <img
            className={`object-cover ${
              isExtanded ? "object-right-top" : "object-left-top"
            } overflow-hidden rounded-xl`}
            style={{ width: "100%", height: "20rem" }}
            src="https://media.istockphoto.com/id/521702439/photo/i-earned-this-body.jpg?s=612x612&w=is&k=20&c=ihZSDGD9vBVquWis3VgopH26yqYEKyD_KRXKMtuAx04="
          />

          <div
            className="rounded-r-xl flex justify-center items-center absolute top-0 right-0 z-10 "
            style={{
              width: "4rem",
              height: "20rem",
              background: "rgba(0, 0, 0, 0.6)",
            }}
          >
            {isExtanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            )}
          </div>
        </motion.button>

        {!isExtanded && (
          <div className="w-1/2 flex flex-col justify-between">
            {/* <button
            className="text-2xl  text-white font-Saira font-normal text-left "
            onClick={handleExpend}
          >
            Client name
          </button> */}
            <p className="text-white text-lg font-normal">
              TiTi weight loss program
            </p>
            <p className="text-white text-lg font-normal">6 month training</p>
            <p className="text-white text-lg font-normal">21 years</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default TransItem;
