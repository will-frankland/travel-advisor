import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlaceData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coordinates: {  latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  },[])


  useEffect((bounds) => {
    console.log("coords&bnds->", coordinates, bounds)
    getPlaceData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data);
        setPlaces(data);
      })
  }, [coordinates, bounds])

  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;