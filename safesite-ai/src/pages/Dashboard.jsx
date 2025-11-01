import React, { useState } from "react";
import ConfusionMatrixCard from "../components/ConfusionMatrixCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

const accuracyData = [
  { time: "9AM", acc: 0.84 },
  { time: "10AM", acc: 0.86 },
  { time: "11AM", acc: 0.87 },
  { time: "12PM", acc: 0.89 },
  { time: "1PM", acc: 0.91 },
  { time: "2PM", acc: 0.89 },
];

const detectionData = [
  { name: "Worker", count: 120 },
  { name: "Hard Hat", count: 98 },
  { name: "Safety Vest", count: 83 },
  { name: "No Helmet", count: 17 },
];

const Dashboard = () => {
  const [video, setVideo] = useState(null);
  const [videoURL, setVideoURL] = useState("");

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideo(file);
      setVideoURL(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid video file.");
    }
  };

  return (
    <section className="min-h-screen w-full text-white bg-[radial-gradient(at_center_bottom,_#4b2e02,_#290A51)] px-8 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/5 rounded-xl p-5 text-center border border-white/10">
            <h2 className="text-4xl font-bold text-orange-400">89%</h2>
            <p className="text-sm text-gray-300 mt-1">Detection Accuracy</p>
          </div>
          <div className="bg-white/5 rounded-xl p-5 text-center border border-white/10">
            <h2 className="text-4xl font-bold text-pink-400">254</h2>
            <p className="text-sm text-gray-300 mt-1">Total Detections</p>
          </div>
          <div className="bg-white/5 rounded-xl p-5 text-center border border-white/10">
            <h2 className="text-4xl font-bold text-cyan-400">12</h2>
            <p className="text-sm text-gray-300 mt-1">Safety Alerts</p>
          </div>
          <div className="bg-white/5 rounded-xl p-5 text-center border border-white/10">
            <h2 className="text-4xl font-bold text-green-400">93%</h2>
            <p className="text-sm text-gray-300 mt-1">Avg Confidence</p>
          </div>
        </div>

        {/* 🎥 Video Upload Section */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold mb-4">Upload Site Video</h3>

          <label
            htmlFor="video-upload"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-400/40 rounded-lg cursor-pointer hover:border-orange-400 transition"
          >
            {video ? (
              <p className="text-sm text-gray-200">
                {video.name} <span className="text-orange-400">(Uploaded)</span>
              </p>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 mb-2 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0l3 3m-3-3l-3 3M17 8v12m0 0l-3-3m3 3l3-3"
                  />
                </svg>
                <p className="text-sm text-gray-300">
                  Click or drag a video here to upload
                </p>
              </>
            )}
          </label>
          <input
            id="video-upload"
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="hidden"
          />

          {/* Video Preview */}
          {videoURL && (
            <div className="mt-5 rounded-lg overflow-hidden border border-white/10">
              <video
                src={videoURL}
                controls
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Accuracy Trend Chart */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-3">
              Accuracy Trend (Today)
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={accuracyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.6)" />
                <YAxis
                  domain={[0.8, 1]}
                  tickFormatter={(v) => `${(v * 100).toFixed(0)}%`}
                  stroke="rgba(255,255,255,0.6)"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f1f1f",
                    borderRadius: "8px",
                    border: "none",
                  }}
                  labelStyle={{ color: "#fff" }}
                  formatter={(v) => `${(v * 100).toFixed(1)}%`}
                />
                <Line
                  type="monotone"
                  dataKey="acc"
                  stroke="#f97316"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#fff" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Detection Category Chart */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-3">
              Detections by Category
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={detectionData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f1f1f",
                    border: "none",
                  }}
                  labelStyle={{ color: "#fff" }}
                />
                <Bar dataKey="count" fill="url(#barGradient)" radius={6} />
                <defs>
                  <linearGradient id="barGradient" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ConfusionMatrixCard Section */}
        <div className="mt-10">
          <ConfusionMatrixCard />
        </div>

        {/* Recent Activity */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex justify-between">
              <span>Detected “Worker” without hard hat</span>
              <span className="text-orange-400">2 mins ago</span>
            </li>
            <li className="flex justify-between">
              <span>Model retrained with new dataset</span>
              <span className="text-pink-400">1 hr ago</span>
            </li>
            <li className="flex justify-between">
              <span>Confidence threshold increased to 0.75</span>
              <span className="text-cyan-400">3 hrs ago</span>
            </li>
            <li className="flex justify-between">
              <span>New detection session started</span>
              <span className="text-green-400">5 hrs ago</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
