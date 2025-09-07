import { useState } from "react";
import useTitle from "../hooks/useTitle";
import { widgetData, vehicleData } from "../constant";
import {
  FaBatteryEmpty,
  FaBatteryQuarter,
  FaBatteryHalf,
  FaBatteryThreeQuarters,
  FaBatteryFull,
  FaShip,
} from "react-icons/fa";

import WidgetCard from "../components/Widgets/WidgetCard";
import VehicleTable from "../components/Vehicle/VehicleTable";

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

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-black text-3xl font-bold dark:text-white">
            Vehicle Management
          </h1>
          <h2 className="text-gray-600 dark:text-gray-400">
            Manage and monitor all USV vehicles
          </h2>
        </div>
        <button className="font-semibold flex items-center gap-4 px-3 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 cursor-pointer hover:shadow-lg hover:shadow-fourth/50 bg-fourth dark:hover:bg-blue-700">
          <FaShip size={20} />
          Add Vehicle
        </button>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-4">
        {widgetData.map((item, idx) => (
          <WidgetCard key={idx} {...item} />
        ))}
      </div>

      {/* Vehicle Table */}
      <VehicleTable
        vehicleData={vehicleData}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        getBatteryIcon={getBatteryIcon}
      />
    </div>
  );
};

export default Vehicle;
