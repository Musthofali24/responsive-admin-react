import { GoDatabase } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { FaChartBar } from "react-icons/fa";
import { HiOutlineBellAlert } from "react-icons/hi2";

import { MdOutlineRadar } from "react-icons/md";
import {
  TbGps,
  TbArrowsUpDown,
  TbSettings,
  TbSpeedboat,
  TbRouteSquare,
} from "react-icons/tb";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaPause,
  FaPlay,
  FaShip,
} from "react-icons/fa6";
import { HiOutlineStatusOffline, HiOutlineStatusOnline } from "react-icons/hi";
import { IoRefresh } from "react-icons/io5";

const sizeIcon = 18;

export const links = [
  {
    href: "/",
    icon: FaChartBar,
    text: "Dashboard",
    size: sizeIcon,
  },
  {
    href: "/tracking",
    icon: MdOutlineRadar,
    text: "Tracking",
    size: sizeIcon,
  },
  {
    href: "/missions",
    icon: TbGps,
    text: "Missions",
    size: sizeIcon,
  },
  {
    href: "/vehicle",
    icon: TbSpeedboat,
    text: "Vehicle",
    size: sizeIcon,
  },
  {
    href: "/data",
    icon: GoDatabase,
    text: "Data",
    size: sizeIcon,
  },
  {
    href: "/logs",
    icon: TbArrowsUpDown,
    text: "Log",
    size: sizeIcon,
  },
  {
    href: "/alerts",
    icon: HiOutlineBellAlert,
    text: "Alerts",
    size: sizeIcon,
  },
];

export const linksbottom = [
  {
    href: "/settings",
    icon: TbSettings,
    text: "Settings",
    size: sizeIcon,
  },
  {
    href: "/auth/logout",
    icon: IoIosLogOut,
    text: "Logout",
    size: sizeIcon,
  },
];

// Data widget card
export const widgetData = [
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
export const vehicleData = [
  {
    id: 1,
    name: "Seano Alpha-1",
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
    name: "Seano Beta-2",
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
    name: "Seano Gamma-3",
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
    name: "Seano Delta-4",
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
    name: "Seano Echo-5",
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
    name: "Seano Foxtrot-6",
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
