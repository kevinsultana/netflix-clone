import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FavoriteList from "../components/FavoriteList";

export default function Mylist() {
  return (
    <div className="relative bg-slate-950">
      <NavBar />
      {/* <Hero /> */}
      <div className="relative pt-[6rem]">
        <FavoriteList />
        <Footer />
      </div>
    </div>
  );
}
