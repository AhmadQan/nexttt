import React from "react";

import Image from "next/image";

import HeaderText from "../molecules/header_text";
import Banner from "../molecules/banner";
// import SVBG from "/assets/SVBG.png";

export default function ServicesSection() {
  return (
    <div>
      <Image
        width={"100"}
        height={"100"}
        alt="me"
        src={"/assets/static/imgs/SVBG.png"}
        className="w-full h-full absolute "
      ></Image>
      <section>
        <HeaderText>Our services</HeaderText>
        <div className="flex flex-col items-center gap-9">
          <div className="bg-secondryRgba w-full  h-auto rounded-lg backdrop-blur-md">
            <Banner />
          </div>
          <div className="bg-secondryRgba w-full  h-auto rounded-lg backdrop-blur-md">
            <Banner />
          </div>
        </div>
      </section>
    </div>
  );
}
