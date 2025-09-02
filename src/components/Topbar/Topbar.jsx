import React, { useEffect, useState } from "react";
import {
  FaBatteryEmpty,
  FaBatteryQuarter,
  FaBatteryHalf,
  FaBatteryThreeQuarters,
  FaBatteryFull,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Topbar = ({ isSidebarOpen }) => {
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(1);
  const [selectedDataType, setSelectedDataType] = useState("current");
  const usvStatus = "online";

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (navigator.getBattery) {
      navigator.getBattery().then((battery) => {
        setBatteryLevel(battery.level);
        battery.addEventListener("levelchange", () =>
          setBatteryLevel(battery.level)
        );
      });
    }
  }, []);

  const renderBatteryIcon = () => {
    if (batteryLevel <= 0.1)
      return <FaBatteryEmpty size={30} className="text-red-500" />;
    if (batteryLevel <= 0.3)
      return <FaBatteryQuarter size={30} className="text-orange-500" />;
    if (batteryLevel <= 0.6)
      return <FaBatteryHalf size={30} className="text-yellow-500" />;
    if (batteryLevel <= 0.9)
      return <FaBatteryThreeQuarters size={30} className="text-green-400" />;
    return <FaBatteryFull size={30} className="text-green-500" />;
  };

  return (
    <div
      className={`fixed z-30 top-14 right-0 bg-white
                  h-15 sm:h-15 py-2 px-4 border-b border-gray-200
                  dark:bg-black dark:border-gray-700
                  flex flex-col sm:flex-row space-y-1 md:space-y-0 sm:items-center sm:justify-between
                  ${isSidebarOpen ? "md:left-64 left-16" : "left-16"}`}
    >
      <div className="flex items-center gap-4 dark:text-white text-sm">
        <div className="flex items-center gap-2">
          <span
            className={`relative flex items-center gap-2 px-2.5 py-1.5 text-sm font-semibold rounded-full ${
              usvStatus === "online"
                ? "bg-green-100 text-green-600"
                : usvStatus === "offline"
                ? "bg-gray-200 text-gray-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {/* Bullet with pulse */}
            <span className="relative flex w-3 h-3">
              <span
                className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                  usvStatus === "online"
                    ? "bg-green-400"
                    : usvStatus === "offline"
                    ? "bg-gray-400"
                    : "bg-red-400"
                }`}
              ></span>
              <span
                className={`relative inline-flex rounded-full w-3 h-3 ${
                  usvStatus === "online"
                    ? "bg-green-500"
                    : usvStatus === "offline"
                    ? "bg-gray-500"
                    : "bg-red-500"
                }`}
              ></span>
            </span>

            {/* 🔹 Teks status */}
            {usvStatus}
          </span>
        </div>
        <div className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white">
          <select
            className="bg-gray-100 dark:bg-gray-800 dark:text-white"
            value={selectedDataType}
            onChange={(e) => setSelectedDataType(e.target.value)}
          >
            <option value="USV 009">USV 009</option>
            <option value="USV 010">USV 010</option>
            <option value="USV 011">USV 011</option>
            <option value="USV 012">USV 012</option>
          </select>
        </div>
        {/* <div className="text-sm dark:text-white">
          Selected: <b>{selectedDataType}</b>
        </div> */}
      </div>

      {/* Indikator */}
      <div className="flex items-center gap-4 dark:text-white text-sm">
        {/* Tanggal & Waktu */}
        <div className="dark:text-white text-sm font-medium">
          {time.toLocaleTimeString("id-ID")} •{" "}
          {time.toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="flex items-center gap-2">
          {renderBatteryIcon()}
          <span>{Math.round(batteryLevel * 100)}%</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-400" />
          <span>Jakarta, Indonesia</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
