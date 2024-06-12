"use server";
import React from "react";
import { Link } from "react-scroll/modules";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center my-10 py-16 text-bold"
    >
      <div className="mt-20">
        <div className="text-6xl">
          <h1 className="" style={{ fontSize: "96px" }}>
            Hello!
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
