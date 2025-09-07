import React from "react";
import { FaShip, FaLocationDot } from "react-icons/fa6";

const VehicleTable = ({
  vehicleData,
  page,
  setPage,
  pageSize,
  getBatteryIcon,
}) => {
  return (
    <div className="px-4 py-4 mb-4 mx-4 rounded-3xl bg-white dark:bg-secondary shadow-md">
      <div className="bg-white dark:bg-secondary rounded-2xl p-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-black dark:text-white mb-4">
          <FaShip /> Vehicle Overview
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                <th className="py-3 px-2">Vehicle</th>
                <th className="py-3 px-0 max-w-xs whitespace-nowrap">Status</th>
                <th className="py-3 px-2">Position</th>
                <th className="py-3 px-2">Battery</th>
                <th className="py-3 px-2">Signal</th>
                <th className="py-3 px-2">Temperature</th>
                <th className="py-3 px-2">Last Seen</th>
                <th className="py-3 px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicleData
                .slice((page - 1) * pageSize, page * pageSize)
                .map((veh) => (
                  <tr
                    key={veh.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    {/* Info */}
                    <td className="py-3 px-0 max-w-xs whitespace-nowrap">
                      <div className="flex items-center justify-start gap-5">
                        <FaShip
                          size={25}
                          className="text-blue-500 dark:text-blue-400"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-black dark:text-white">
                            {veh.name}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {veh.code} - {veh.type}
                          </span>
                          <span className="text-xs text-blue-600 dark:text-blue-300 underline cursor-pointer">
                            {veh.role}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-3 px-2">
                      {veh.status === "Deployed" && (
                        <span className="bg-blue-100 dark:bg-blue-600 text-blue-700 dark:text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 w-fit">
                          <span className="w-2 h-2 rounded-full bg-blue-400"></span>{" "}
                          Deployed
                        </span>
                      )}
                      {veh.status === "Online" && (
                        <span className="bg-green-100 dark:bg-green-600 text-green-700 dark:text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 w-fit">
                          <span className="w-2 h-2 rounded-full bg-green-400"></span>{" "}
                          Online
                        </span>
                      )}
                      {veh.status === "Maintenance" && (
                        <span className="bg-yellow-100 dark:bg-yellow-500 text-yellow-700 dark:text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 w-fit">
                          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>{" "}
                          Maintenance
                        </span>
                      )}
                      {veh.status === "Offline" && (
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 w-fit">
                          <span className="w-2 h-2 rounded-full bg-gray-400"></span>{" "}
                          Offline
                        </span>
                      )}
                    </td>

                    {/* Position */}
                    <td className="py-3 px-2 text-gray-700 dark:text-gray-200">
                      <span className="flex items-center gap-1">
                        <FaLocationDot /> {veh.position}
                      </span>
                    </td>

                    {/* Battery */}
                    <td
                      className="py-3 px-2 font-bold"
                      style={{ color: veh.batteryColor }}
                    >
                      <span className="flex items-center gap-3">
                        {getBatteryIcon(parseInt(veh.battery))}
                        {veh.battery}
                      </span>
                    </td>

                    {/* Signal */}
                    <td className="py-3 px-2 text-gray-700 dark:text-gray-200 font-semibold">
                      {veh.signal}
                    </td>

                    {/* Temp */}
                    <td className="py-3 px-2 text-gray-700 dark:text-gray-200 font-semibold">
                      {veh.temperature}
                    </td>

                    {/* Last Seen */}
                    <td className="py-3 px-2 text-gray-500 dark:text-gray-400 font-semibold">
                      {veh.lastSeen}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-2">
                      <div className="flex gap-2">
                        {veh.actions.map((act, i) => (
                          <button
                            key={i}
                            className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-black dark:text-white p-2 rounded-lg"
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
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white disabled:opacity-40"
          >
            Prev
          </button>
          <span className="text-gray-700 dark:text-gray-300">
            Page {page} of {Math.ceil(vehicleData.length / pageSize)}
          </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === Math.ceil(vehicleData.length / pageSize)}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleTable;
