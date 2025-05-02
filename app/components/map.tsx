// app/components/MapComponent.tsx
"use client";

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { useRef, useCallback } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
    lat: -4.4311,
    lng: -41.4517,
  };

export default function MyComponent() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  if (!isLoaded) return <p className="text-white">Carregando mapa...</p>;

  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
