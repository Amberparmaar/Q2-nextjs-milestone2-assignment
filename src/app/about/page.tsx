import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="text-blue-300">
      <h1 className="text-red-500 font-serif text-center text-3xl">About Me</h1>
      <div className="object-cover object-center rounded"><img
        className="w-50 h-50 rounded-full relative"
        src="/aboutme.jpg"
        alt="image"
      /></div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi culpa ut,
        tempora cumque unde delectus mollitia optio, quam nesciunt similique
        officia, at quod id itaque in. Nostrum veritatis, quod alias non
        blanditiis voluptatum, aperiam incidunt cupiditate porro nisi dolore,
        explicabo itaque eligendi ducimus. Necessitatibus suscipit laborum unde
        quam saepe id, amet libero a aliquam porro ea nemo culpa tempore odit,
        beatae eum expedita distinction
      </p>
    </div>
  );
}
