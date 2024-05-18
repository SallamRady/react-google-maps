import {
  GoogleMap,
  InfoWindow,
  Marker,
  Polygon,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";

// * Define some helper variables
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = { lat: 37.7749, lng: -122.4194 };

const polygonPaths = [
  { lat: 37.7749, lng: -122.4194 },
  { lat: 37.7749, lng: -122.4312 },
  { lat: 37.7688, lng: -122.4312 },
  { lat: 37.7688, lng: -122.4194 },
  { lat: 37.7749, lng: -122.4194 },
];

export default function GooogleMap() {
  // TODO::declare and define component state and variables
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "",
    googleMapsApiKey: "",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={polygonPaths[0]}
      zoom={10}
      //   onLoad={onLoad}
      //   onUnmount={onUnmount}
    >
      {/* Drow a polygon */}
      <Polygon
        paths={polygonPaths}
        options={{
          strokeColor: "#0084ff",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#00f7ff",
          fillOpacity: 0.35,
        }}
      />
      <InfoWindow position={center}>
        <div>
          <h3>polygon Name</h3>
        </div>
      </InfoWindow>
    </GoogleMap>
  ) : (
    <>Gooogle Mapppppp</>
  );
}
