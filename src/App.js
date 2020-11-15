import React, {useEffect, useState, Component} from "react"; //start by finding a react wrapper for the JS stuff on mapbox
import ReactMapGL, {Popup} from "react-map-gl";
import axios from 'axios';
//import data from "./data.geojson";
function App() {
  const url = 'https://api.covid19api.com/summary';
  //const [popup, setPopup] = useState(true);

  /*axios.get("./data.geojson")
    .then(response => {
      response.data.Countries.map(place=> ({
        country: '${place.Country}',
        cases: '${place.TotalConfirmed}',
        deaths: '${place.TotalDeaths}'
      }))
    });*/
  
  const [viewport, setViewport] = useState({
    width: 1300,
    height: 900,
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
      <Popup
        longitude={-122.43}
        latitude={37.75}
        closeButton={false}
        closeOnClick={false}>
        Popup Test
      </Popup>
    </ReactMapGL>
  );
}

export default App;
