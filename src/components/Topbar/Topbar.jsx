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
    if (batteryLevel <= 0.1) return <FaBatteryEmpty className="text-red-500" />;
    if (batteryLevel <= 0.3)
      return <FaBatteryQuarter className="text-orange-500" />;
    if (batteryLevel <= 0.6)
      return <FaBatteryHalf className="text-yellow-500" />;
    if (batteryLevel <= 0.9)
      return <FaBatteryThreeQuarters className="text-green-400" />;
    return <FaBatteryFull className="text-green-500" />;
  };

  return (
    <div
      className={`fixed z-30 top-14 right-0 bg-white
                  h-15 sm:h-10 py-2 px-4 border-b border-gray-200
                  dark:bg-black dark:border-gray-700
                  flex flex-col sm:flex-row space-y-1 md:space-y-0 sm:items-center sm:justify-between
                  ${isSidebarOpen ? "md:left-64 left-16" : "left-16"}`}
    >
      {/* Tanggal & Waktu */}
      <div className="dark:text-white text-sm font-medium">
        {time.toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        • {time.toLocaleTimeString("id-ID")}
      </div>

      {/* Indikator */}
      <div className="flex items-center gap-4 dark:text-white text-sm">
        <div className="flex items-center gap-2">
          {renderBatteryIcon()}
          <span>{Math.round(batteryLevel * 100)}%</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-400" />
          <span>Jakarta</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
