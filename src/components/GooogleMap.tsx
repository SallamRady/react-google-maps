import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

// * Define some helper variables
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 30.0444,
  lng: 31.2357,
};
const giza = { lat: 30.0131, lng: 31.2089 };
const elShikhZaid = {
  lat: 30.64649,
  lng: 31.900129,
};

export default function GooogleMap() {
  // TODO::declare and define component state and variables
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "AIzaSyCLMkS3uH2eW8Fn7a36lKama2jJW9KFFhc",
    googleMapsApiKey: "AIzaSyCLMkS3uH2eW8Fn7a36lKama2jJW9KFFhc",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      //   onLoad={onLoad}
      //   onUnmount={onUnmount}
    >
      {/* Add Markers */}
      <Marker position={center} />
      <Marker position={giza} />
      <Marker position={elShikhZaid} />
    </GoogleMap>
  ) : (
    <>Gooogle Mapppppp</>
  );
}
