import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const containerStyle = {
    width: "100%",
    height: "300px",
  };
  
  const center = {
    lat: 43.42022403905036, 
    lng: 24.613532652980502, 
  };
  
  export default function Map() {
    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  }