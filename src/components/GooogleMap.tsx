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
const center = {
  lat: 30.0444,
  lng: 31.2357,
};
const giza = { lat: 30.0131, lng: 31.2089 };
const elShikhZaid = {
  lat: 30.64649,
  lng: 31.900129,
};
const polygonPaths = [center, giza, elShikhZaid];

export default function GooogleMap() {
  // TODO::declare and define component state and variables
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "AIzaSyCLMkS3uH2eW8Fn7a36lKama2jJW9KFFhc",
    googleMapsApiKey: "AIzaSyCLMkS3uH2eW8Fn7a36lKama2jJW9KFFhc",
  });
  // * Handle click on map
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const { latLng } = event;
    const lat = latLng?.lat();
    const lng = latLng?.lng();
    console.log("Map clicked:", lat, lng);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      //   onLoad={onLoad}
      //   onUnmount={onUnmount}
    //   onClick={handleMapClick}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} />
      <Marker position={giza} />
      {/* custom maker */}
      {/* polygon */}
      <Polygon
        paths={polygonPaths}
        options={{
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
        }}
      />
      {/* To Show information on mab like title */}
      <InfoWindow position={center}>
        <div>
          <h3>Cairo City</h3>
        </div>
      </InfoWindow>
    </GoogleMap>
  ) : (
    <>Gooogle Mapppppp</>
  );
}
