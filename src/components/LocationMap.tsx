// src/components/LocationMap.tsx
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

// SRM University-AP coordinates
const SRM_AP_COORDS: [number, number] = [16.462347, 80.506733];
export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mapInstanceRef.current) return; // prevent double init

    // Dynamically import leaflet (avoids SSR issues)
    import("leaflet").then((L) => {
      if (!mapRef.current) return;

      // Fix default marker icon broken in bundlers
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      // Initialize map
      const map = L.map(mapRef.current, {
        center: SRM_AP_COORDS,
        zoom: 15,
        zoomControl: true,
        scrollWheelZoom: false, // better UX on websites
      });

      // OpenStreetMap tile layer (free, no API key)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom popup marker
      const marker = L.marker(SRM_AP_COORDS).addTo(map);
      marker
        .bindPopup(
          `
          <div style="font-family: sans-serif; min-width: 180px;">
            <strong style="font-size: 14px;">🎓 SRM University-AP</strong><br/>
            <span style="font-size: 12px; color: #555;">
              Neerukonda, Mangalagiri Mandal,<br/>
              Guntur District, AP 522502
            </span><br/><br/>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=16.4807,80.4651"
              target="_blank"
              rel="noopener noreferrer"
              style="
                display: inline-block;
                background: #e63946;
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                text-decoration: none;
                font-size: 12px;
                font-weight: 600;
              "
            >
              📍 Get Directions
            </a>
          </div>
        `
        )
        .openPopup();

      mapInstanceRef.current = map;
    });

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
      }}
    >
      {/* Map container */}
      <div ref={mapRef} style={{ width: "100%", height: "220px" }} />

      {/* "Open in Maps" button overlay */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=16.4807,80.4651"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          zIndex: 1000,
          background: "#ef2913",
          color: "white",
          padding: "6px 12px",
          borderRadius: "6px",
          fontSize: "11px",
          fontWeight: "700",
          textDecoration: "none",
          letterSpacing: "0.5px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        ↗ OPEN IN MAPS
      </a>
    </div>
  );
}