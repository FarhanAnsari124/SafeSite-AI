import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./index.css";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background flare layer */}
      <div className="back"></div>

      {/* Actual page content */}
      <div className="relative z-10">
        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
}
