import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Mylist() {
  return (
    <div className="relative bg-slate-950">
      <NavBar />
      <Hero />
      <div className="relative pt-[17rem]  md:pt-[42rem] xl:pt-[50rem]">
        <Footer />
      </div>
    </div>
  );
}
