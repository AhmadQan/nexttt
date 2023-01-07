import * as React from "react";

export default function ImgMediaCard({ children }) {
  return (
    <div
      style={{
        width: "60%",
        height: "auto",
        borderRadius: "1.8rem",
        background:
          "linear-gradient(132.32deg, #23AE78 3.51%, rgba(184, 255, 1, 0) 101.96%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.2rem",
        boxShadow: "0px 18.8004px 33.8407px rgba(0, 0, 0, 0.45) ",
      }}
    >
      <h1 className="font-bold text-lg font-Saira">personal workout plan</h1>
      <div style={{ height: "100%" }}>{children}</div>

      <div
        style={{
          background: "rgba(245, 245, 245, 0.2)",
          width: "85%",
          borderRadius: "2.2rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "4.8rem",
        }}
      >
        <div className="flex first-line:gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            style={{
              width: "2rem",
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>

          <p>stronger</p>
        </div>
        <div className="flex first-line:gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{
              width: "2rem",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>

          <p>stronger</p>
        </div>
      </div>
    </div>
  );
}
