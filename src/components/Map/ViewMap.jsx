import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ViewMap = ({ darkMode }) => {
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
      maxBoundsViscosity={1.0} // biar mentok di pinggir
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
    </MapContainer>
  );
};

export default ViewMap;
