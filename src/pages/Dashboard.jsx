import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Dashboard = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-5">
      <div className="col-span-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="h-[660px] bg-white border-1 border-gray-200 dark:bg-transparent dark:border-1 dark:border-gray-700 rounded-2xl"></div>
        <div className="z-0 h-[660px] col-span-2 bg-white border-1 border-gray-200 dark:bg-transparent dark:border-1 dark:border-gray-700 rounded-2xl overflow-hidden">
          <MapContainer
            center={[-6.2, 106.8]}
            zoom={10}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
          </MapContainer>
        </div>
        <div className="h-[660px] bg-white border-1 border-gray-200 dark:bg-transparent dark:border-1 dark:border-gray-700 rounded-2xl"></div>
      </div>
      <div className="col-span-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="h-56 col-span-2 bg-white border-1 border-gray-200 dark:bg-transparent dark:border-1 dark:border-gray-700 rounded-2xl"></div>
        <div className="h-56 col-span-2 bg-white border-1 border-gray-200 dark:bg-transparent dark:border-1 dark:border-gray-700 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Dashboard;
