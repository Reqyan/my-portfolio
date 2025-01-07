"use client";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center my-0 py-10 text-bold"
    >
      <div className="mt-1">
        <div className="text-6xl">
          <h1 className="" style={{ fontSize: "96px" }}>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello!")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
          <h1 className="" style={{ fontSize: "96px" }}>
            <span style={{ color: "#3B6CE9" }}>
              Reqyan Lazuardi Imanimansur
            </span>{" "}
            Here!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
