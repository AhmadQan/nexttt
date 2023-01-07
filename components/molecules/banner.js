import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col gap-6 p-5 shadow-2xl">
      <h2 className="text-primary text-3xl font-Saira font-bold">
        Send Mshan Allah
      </h2>
      <p className="text-primary text-xl font-Saira font-light">
        Send el services eli 7ket 3nhom mshan allah ya zlmeh{" "}
      </p>
      <button className="w-36 h-12 shadow-md bg-accent rounded-lg text-lg font-bold font-Saira text-primary">
        Send Now
      </button>
      <img
        className="rounded-xl shadow-md"
        src="https://www.shutterstock.com/image-photo/indoor-personal-cardio-training-gym-260nw-1822207589.jpg"
      />
    </div>
  );
}
