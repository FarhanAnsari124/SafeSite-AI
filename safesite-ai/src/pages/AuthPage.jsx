import React, { useState } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import API from "../api";
import landing from "./LandingPage";

const AuthPage = () => {
  const Back = () => {
    window.location.href = "/";
  };
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMsg("");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      if (isLogin) {
        const formData = new URLSearchParams();
        formData.append("username", form.email);
        formData.append("password", form.password);

        const res = await API.post("/auth/login", formData, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        localStorage.setItem("token", res.data.access_token);
        setMsg("Login successful 🎉 Redirecting...");
        setTimeout(() => (window.location.href = "/dashboard"), 1000);
      } else {
        if (form.password !== form.confirmPassword) {
          setMsg("Passwords do not match ❌");
          setLoading(false);
          return;
        }

        await API.post("/auth/register", {
          username: form.name, // ✅ backend expects this field
          email: form.email,
          password: form.password,
        });

        setMsg("Registered successfully ✅ You can now log in!");
        setTimeout(() => setIsLogin(true), 1200);
      }
    } catch (err) {
      console.log("Error:", err.response?.data);
      const errorMsg =
        err.response?.data?.message ||
        err.response?.data?.detail?.[0]?.msg || // ✅ handle FastAPI validation messages
        JSON.stringify(err.response?.data) ||
        err.message;
      setMsg(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen `bg-[radial-gradient(at_center_bottom,_#4b2e02,_#290A51)]` overflow-hidden">
      {/* animated background */}
      <AnimatedBackground />
      <div className="absolute left-10 top-10 ">
            <button
              onClick={Back}
              className="px-4 py-2 rounded-xl bg-linear-to-r from-orange-400 to-pink-500 text-white font-semibold hover:opacity-90 transition"
            >
            ⬅
            </button>
      </div>

      {/* auth card */}
      <div
        className={`relative z-10 w-96 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-700 ${
          isLogin ? "bg-white/10" : "bg-white/15"
        }`}
      >
        <h2 className="text-xl font-bold text-center text-white mb-6">
          {isLogin ? "You’re back — Awesome!👋" : "Join SafeSite AI⤵"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 cursor-pointer rounded-lg bg-linear-to-r from-orange-400 to-pink-500 text-white font-semibold hover:opacity-90 transition"
          >
            {loading
              ? isLogin
                ? "Logging in..."
                : "Signing up..."
              : isLogin
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        {/* message */}
        {msg && (
          <p className="text-center text-sm text-orange-300 mt-3">{msg}</p>
        )}

        {/* toggle section */}
        <p className="text-center text-gray-200 text-sm mt-4">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleMode}
            type="button"
            className="text-orange-300 cursor-pointer hover:underline focus:outline-none"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default AuthPage;
