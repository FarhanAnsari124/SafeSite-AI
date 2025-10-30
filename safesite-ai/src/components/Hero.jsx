import React from "react";
import "../Hero.css";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
        
      <div className="min-h-screen  text-white flex flex-col items-center px-6">
        <AnimatedBackground />
      {/* Navbar */}
      <nav className="w-full max-w-7xl flex justify-between items-center py-6">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="SafeSite AI" className="w-8 h-8" />
          <h3 className="font-semibold text-lg">SafeSite AI</h3>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <li><a href="#" className="hover:text-white">Docs</a></li>
          <li><a href="#" className="hover:text-white">Demo</a></li>
          <li><a href="#" className="hover:text-white">Contact</a></li>
        </ul>

        <button className="px-5 py-2.5 rounded-full bg-linear-to-r from-orange-500 to-fuchsia-600 text-white font-semibold hover:scale-105 transition-all">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Where Safety Meets <br /> Intelligence
        </h1>
        <p className="max-w-2xl text-gray-300 mb-10 text-lg">
          Harness computer vision to ensure real-time construction site safety. Detect
          workers, PPE compliance, and potential hazards with YOLOv8, OpenCV, and
          Pascal VOC annotations.
        </p>

        {/* Detection Preview Frame */}
        <div className="relative p-7 w-full max-w-3xl rounded-2xl border-3 border-orange-400/30 shadow-[0_0_40px_rgba(255,122,0,0.3)] overflow-hidden">
          <img
            src="/images/construction-workers.jpg"
            alt="AI detection preview"
            className=" rounded-2xl border-3 border-orange-400/30 shadow-[0_0_40px_rgba(255,122,0,0.3)] overflow-hidden"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
        </div>

        <button className="mt-10 px-8 py-3 text-lg font-semibold rounded-3xl bg-linear-to-r from-orange-500 to-fuchsia-600 shadow-[0_0_25px_rgba(255,122,0,0.4)] hover:shadow-[0_0_40px_rgba(255,122,0,0.6)] hover:scale-105 transition-all duration-300">
          Try SafeSite AI
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-gray-400 text-sm mb-6">
        © 2025 SafeSite AI — Empowering safer worksites 🦺
      </footer>
    </div>
    </section>
  );
}
