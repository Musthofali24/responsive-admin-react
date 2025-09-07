import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const ViewMap = ({ darkMode }) => {
  const [landData, setLandData] = useState(null);

  useEffect(() => {
    fetch("/indonesia_land.json") // taruh file di folder /public
      .then((res) => res.json())
      .then((data) => setLandData(data));
  }, []);

  return (
    <MapContainer
      scrollWheelZoom={true}
      center={[-6.2, 106.8]}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
      worldCopyJump={false}
      maxBounds={[
        [-85, -180], // batas kiri bawah
        [85, 180], // batas kanan atas
      ]}
      maxBoundsViscosity={1.0}
      minZoom={2}
    >
      <TileLayer
        url={
          darkMode
            ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        }
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
        noWrap={true}
      />

      {/* Tambahin geofence daratan */}
      {landData && (
        <GeoJSON
          data={landData}
          style={{
            color: "red",
            weight: 5,
            fillColor: "red",
            fillOpacity: 0.3,
          }}
        />
      )}
    </MapContainer>
  );
};

export default ViewMap;
