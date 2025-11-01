import React, { useState } from "react";
import AnimatedBackground from "../components/AnimatedBackground";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <section className="relative flex items-center justify-center min-h-screen `bg-[radial-gradient(at_center_bottom,_#4b2e02,_#290A51)]` overflow-hidden">
      {/* animated background */}
      <AnimatedBackground />

      {/* auth card */}
      <div
        className={`relative z-10 w-96 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-700 ${
          isLogin ? "bg-white/10" : "bg-white/15"
        }`}
      >
        <h2 className="text-xl font-bold text-center text-white mb-6">
          {isLogin ? "You’re back — Awesome!👋" : "Join SafeSite AI⤵"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-linear-to-r from-orange-400 to-pink-500 text-white font-semibold hover:opacity-90 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* toggle section */}
        <p className="text-center text-gray-200 text-sm mt-4">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleMode}
            className="text-orange-300 hover:underline focus:outline-none"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default AuthPage;
