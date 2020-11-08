import React, {useState} from "react"; //start by finding a react wrapper for the JS stuff on mapbox
import ReactMapGL from "react-map-gl";
function App() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 600,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3,
  });
  return (
    <ReactMapGL
    mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
    </ReactMapGL>
  );
}

export default App;
