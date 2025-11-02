import React from "react";
import "../Hero.css";
import AnimatedBackground from "../components/AnimatedBackground";
import ImageSlider from "../components/ImageSlider";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden">
        
      <div className="min-h-screen  text-white flex flex-col items-center px-6">
        <AnimatedBackground />
      {/* Navbar */}
      <nav className="w-full max-w-7xl flex justify-between items-center py-6">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="SafeSite AI" className="w-8 h-8" />
          <h3 className="font-semibold text-lg ">SafeSite AI</h3>
        </div>

        <button onClick={() => navigate("/auth")} className="px-5 py-2.5 cursor-pointer rounded-full  bg-linear-to-r from-orange-500 to-fuchsia-600 text-white font-semibold shadow-[0_0_25px_rgba(255,122,0,0.4)] hover:shadow-[0_0_40px_rgba(255,122,0,0.6)] hover:scale-105 transition-all duration-300">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Where Safety Meets <br /> Intelligence!
        </h1>
        {/* Detection Preview Frame */}
        <div className="relative p-7 w-full max-w-3xl rounded-2xl border-3 border-orange-400/30 shadow-[0_0_40px_rgba(255,122,0,0.3)] overflow-hidden">
          <img
            src="/images/construction-workers.jpg"
            alt="AI detection preview"
            className=" rounded-2xl border-3 border-orange-400/30 shadow-[0_0_40px_rgba(255,122,0,0.3)] overflow-hidden"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
        </div>
      </section>
      <section className="flex flex-col items-center text-center mt-16">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight">
          SafeSiteAI (<span className="text-fuchsia-600">YOLOv8 - Ultralytics v8.3.222</span>)<br />Intelligence
        </h1>
        <p className="max-w-2xl text-gray-300 mb-10 text-lg">
          Purpose: Detects PPE compliance such as helmets and safety suits in workplace environments <br/>
Precision: 0.80<br/>

Recall: 0.86<br/>

mAP@0.5: 0.82<br/>

mAP@0.5–0.95: 0.70<br/>

Parameters: 25.8 million<br/>

Classes Detected: Helmet, No Helmet, Suit, No Suit.<br/>

<span className="font-bold">Performance Summary:</span><span className="text-green-400">Accurately identifies compliant and non-compliant workers, enabling real-time workplace safety monitoring.</span>

      </p>
      <h1 className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight">
          Preview⤵
        </h1>
      </section>
      <div>
      <ImageSlider />
      </div>
      
      <button  onClick={() => navigate("/auth")} className="mt-10 px-8 py-3 text-lg font-semibold cursor-pointer rounded-3xl bg-linear-to-r from-orange-500 to-fuchsia-600 shadow-[0_0_25px_rgba(255,122,0,0.4)] hover:shadow-[0_0_40px_rgba(255,122,0,0.6)] hover:scale-105 transition-all duration-300">
          Try SafeSite AI
        </button>
      {/* Footer */}
      <footer className="mt-16 text-gray-400 text-sm mb-6">
        © 2025 SafeSite AI — Empowering safer worksites 🦺
      </footer>
    </div>
    </section>
  );
}
