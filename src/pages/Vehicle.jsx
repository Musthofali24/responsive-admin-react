import React, { useState } from "react";
import useTitle from "../hooks/useTitle";
import {
  FaShip,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaPause,
  FaLocationDot,
  FaPlay,
} from "react-icons/fa6";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { HiOutlineStatusOffline } from "react-icons/hi";
import { TbRouteSquare } from "react-icons/tb";
import { IoRefresh } from "react-icons/io5";
import {
  FaBatteryEmpty,
  FaBatteryQuarter,
  FaBatteryHalf,
  FaBatteryThreeQuarters,
  FaBatteryFull,
} from "react-icons/fa";

const Vehicle = () => {
  useTitle("Vehicle");
  const [page, setPage] = useState(1);
  const pageSize = 4;

  function getBatteryIcon(percent) {
    if (percent >= 80) return <FaBatteryFull />;
    if (percent >= 60) return <FaBatteryThreeQuarters />;
    if (percent >= 40) return <FaBatteryHalf />;
    if (percent >= 20) return <FaBatteryQuarter />;
    return <FaBatteryEmpty />;
  }

  // Data widget card
  const widgetData = [
    {
      title: "Total Vehicle",
      value: 10,
      icon: <FaShip size={60} className="text-blue-500" />,
      trendIcon: <FaArrowTrendUp className="text-green-500" />,
      trendText: "1 up from yesterday",
    },
    {
      title: "On Mission",
      value: 5,
      icon: <TbRouteSquare size={60} className="text-slate-500" />,
      trendIcon: <FaArrowTrendDown className="text-red-500" />,
      trendText: "1 up from yesterday",
    },
    {
      title: "Online",
      value: 7,
      icon: <HiOutlineStatusOnline size={60} className="text-green-500" />,
      trendIcon: <FaArrowTrendUp className="text-green-500" />,
      trendText: "1 up from yesterday",
    },
    {
      title: "Offline",
      value: 3,
      icon: <HiOutlineStatusOffline size={60} className="text-red-500" />,
      trendIcon: <FaArrowTrendUp className="text-green-500" />,
      trendText: "1 up from yesterday",
    },
  ];

  // Dummy data device
  const deviceData = [
    {
      id: 1,
      name: "Sean0 Alpha-1",
      code: "SEAUSV-001",
      type: "V1 Devs",
      role: "Coastal Patrol",
      status: "Deployed",
      position: "-6.2088, 106.8456",
      battery: "85%",
      batteryColor: "#27ae60",
      signal: "92%",
      temperature: "28°C",
      lastSeen: "2 min ago",
      actions: [
        {
          label: "Pause",
          icon: (
            <span>
              <FaPause />
            </span>
          ),
        },
        {
          label: "Start",
          icon: (
            <span>
              <FaPlay />
            </span>
          ),
        },
        {
          label: "Restart",
          icon: (
            <span>
              <IoRefresh />
            </span>
          ),
        },
      ],
    },
    {
      id: 2,
      name: "Sean0 Beta-2",
      code: "SEAUSV-002",
      type: "V2 Devs",
      role: "Harbor Patrol",
      status: "Online",
      position: "-6.2100, 106.8500",
      battery: "67%",
      batteryColor: "#27ae60",
      signal: "78%",
      temperature: "26°C",
      lastSeen: "5 min ago",
      actions: [
        {
          label: "Pause",
          icon: (
            <span>
              <FaPause />
            </span>
          ),
        },
        {
          label: "Restart",
          icon: (
            <span>
              <IoRefresh />
            </span>
          ),
        },
      ],
    },
    {
      id: 3,
      name: "Sean0 Gamma-3",
      code: "SEAUSV-003",
      type: "V1 Devs",
      role: "Survey",
      status: "Maintenance",
      position: "-6.2150, 106.8550",
      battery: "45%",
      batteryColor: "#f1c40f",
      signal: "55%",
      temperature: "31°C",
      lastSeen: "1 hour ago",
      actions: [
        {
          label: "Start",
          icon: (
            <span>
              <FaPlay />
            </span>
          ),
        },
      ],
    },
    {
      id: 4,
      name: "Sean0 Delta-4",
      code: "SEAUSV-004",
      type: "V2 Devs",
      role: "Rescue",
      status: "Offline",
      position: "-6.2200, 106.8600",
      battery: "12%",
      batteryColor: "#e74c3c",
      signal: "0%",
      temperature: "24°C",
      lastSeen: "1 day ago",
      actions: [
        {
          label: "Restart",
          icon: (
            <span>
              <IoRefresh />
            </span>
          ),
        },
      ],
    },
    {
      id: 5,
      name: "Sean0 Echo-5",
      code: "SEAUSV-005",
      type: "V1 Devs",
      role: "Coastal Patrol",
      status: "Online",
      position: "-6.2250, 106.8650",
      battery: "32%",
      batteryColor: "#f39c12",
      signal: "60%",
      temperature: "29°C",
      lastSeen: "10 min ago",
      actions: [
        {
          label: "Pause",
          icon: (
            <span>
              <FaPause />
            </span>
          ),
        },
        {
          label: "Start",
          icon: (
            <span>
              <FaPlay />
            </span>
          ),
        },
      ],
    },
    {
      id: 6,
      name: "Sean0 Foxtrot-6",
      code: "SEAUSV-006",
      type: "V2 Devs",
      role: "Survey",
      status: "Deployed",
      position: "-6.2300, 106.8700",
      battery: "78%",
      batteryColor: "#27ae60",
      signal: "88%",
      temperature: "27°C",
      lastSeen: "3 min ago",
      actions: [
        {
          label: "Pause",
          icon: (
            <span>
              <FaPause />
            </span>
          ),
        },
        {
          label: "Restart",
          icon: (
            <span>
              <IoRefresh />
            </span>
          ),
        },
      ],
    },
  ];

  return (
    <div className="">
      {/* Header Vehicle */}
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-black text-3xl font-bold dark:text-white">
            Vehicle Management
          </h1>
          <h2>Manage and monitor all USV devices</h2>
        </div>

        <button className="font-semibold flex items-center gap-4 px-3 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 cursor-pointer hover:shadow-lg hover:shadow-fourth/50 bg-fourth dark:hover:bg-blue-700">
          <FaShip size={20} />
          Add Vehicle
        </button>
      </div>
      {/* End Header Vehicle */}

      {/* Widget Vehicle */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-4">
        {widgetData.map((item, idx) => (
          <div
            key={idx}
            className="border-gray-200 dark:bg-secondary py-5 px-6 rounded-3xl flex items-center justify-between bg-white hover:scale-105 transition-all"
          >
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="font-bold text-lg dark:text-white text-black">
                    {item.title}
                  </h1>
                  <h2 className="text-black dark:text-white font-bold text-5xl">
                    {item.value}
                  </h2>
                </div>
                {item.icon}
              </div>
              <div className="flex items-center gap-2 mt-4">
                {item.trendIcon}
                <h1 className="text-base">{item.trendText}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* End Widget Vehicle */}

      {/* Device Overview Table */}
      <div className=" px-4 py-4 mb-4 mx-4 rounded-3xl bg-secondary">
        <div className="bg-dark rounded-2xl p-6 shadow-md">
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
            <FaShip /> Device Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-700 text-gray-300">
                  <th className="py-3 px-2">Device</th>
                  <th className="py-3 px-0 max-w-xs whitespace-nowrap">
                    Status
                  </th>
                  <th className="py-3 px-2">Position</th>
                  <th className="py-3 px-2">Battery</th>
                  <th className="py-3 px-2">Signal</th>
                  <th className="py-3 px-2">Temperature</th>
                  <th className="py-3 px-2">Last Seen</th>
                  <th className="py-3 px-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {deviceData
                  .slice((page - 1) * pageSize, page * pageSize)
                  .map((dev) => (
                    <tr
                      key={dev.id}
                      className="border-b border-gray-800 hover:bg-gray-900 transition"
                    >
                      <td className="py-3 px-0 max-w-xs whitespace-nowrap">
                        <div className="flex items-center justify-start gap-5">
                          <div>
                            <FaShip size={25} className="text-blue-400" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold text-white flex items-center gap-2">
                              {dev.name}
                            </span>
                            <span className="text-xs text-gray-400">
                              {dev.code} - {dev.type}
                            </span>
                            <span className="text-xs text-blue-300 underline cursor-pointer">
                              {dev.role}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        {dev.status === "Deployed" && (
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 w-fit">
                            <span className="w-2 h-2 rounded-full bg-blue-300"></span>{" "}
                            Deployed
                          </span>
                        )}
                        {dev.status === "Online" && (
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 w-fit">
                            <span className="w-2 h-2 rounded-full bg-green-300"></span>{" "}
                            Online
                          </span>
                        )}
                        {dev.status === "Maintenance" && (
                          <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 w-fit">
                            <span className="w-2 h-2 rounded-full bg-yellow-200"></span>{" "}
                            Maintenance
                          </span>
                        )}
                        {dev.status === "Offline" && (
                          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 w-fit">
                            <span className="w-2 h-2 rounded-full bg-gray-400"></span>{" "}
                            Offline
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-2 text-gray-200">
                        <span className="flex items-center gap-1">
                          <FaLocationDot /> {dev.position}
                        </span>
                      </td>
                      <td
                        className="py-3 px-2 font-bold"
                        style={{ color: dev.batteryColor }}
                      >
                        <span className="flex items-center gap-3">
                          {getBatteryIcon(parseInt(dev.battery))}
                          {dev.battery}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-gray-200">{dev.signal}</td>
                      <td className="py-3 px-2 text-gray-200">
                        {dev.temperature}
                      </td>
                      <td className="py-3 px-2 text-gray-400">
                        {dev.lastSeen}
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex gap-2">
                          {dev.actions.map((act, i) => (
                            <button
                              key={i}
                              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg"
                              title={act.label}
                            >
                              {act.icon}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex justify-end items-center mt-8 gap-2">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-40"
            >
              Prev
            </button>
            <span className="text-gray-300">
              Page {page} of {Math.ceil(deviceData.length / pageSize)}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === Math.ceil(deviceData.length / pageSize)}
              className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* End Device Overview Table */}
    </div>
  );
};

export default Vehicle;
