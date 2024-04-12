import React from "react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Map, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;

const MapBox = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const currentMarker = useRef(null);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [zoom, setZoom] = useState(16);

  const defaultDestination = {
    lat: 10.769648,
    lng: 106.6992094,
  };
  const successLocation = (position) => {
    console.log("position is", position);
    const coordinates = position.coords;
    setLng(coordinates.longitude);
    setLat(coordinates.latitude);
  };
  const errorLocation = () => {
    console.log("error coordinates");
    setLat(10.82302);
    setLng(106.62965);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });
  }, []);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [defaultDestination.lng, defaultDestination.lat],
      zoom: zoom,
    });
    map.current.addControl(new mapboxgl.NavigationControl());
    map.current.addControl(new mapboxgl.FullscreenControl());
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
    map.current.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
    if (!marker.current) {
      marker.current = new mapboxgl.Marker({ color: "red" })
        .setLngLat([defaultDestination.lng, defaultDestination.lat])
        .addTo(map.current);
    } else {
      marker.current.setLngLat([
        defaultDestination.lng,
        defaultDestination.lat,
      ]);
    }

    if (!currentMarker.current) {
      currentMarker.current = new mapboxgl.Marker({ color: "blue" })
        .setLngLat([lng, lat])
        .addTo(map.current);
    } else {
      currentMarker.current.setLngLat([lng, lat]);
    }

    map.current.on("load", () => {
      map.current.flyTo({
        center: [defaultDestination.lng, defaultDestination.lat],
        zoom: zoom,
      });
    });
  }, []);
  useEffect(() => {
    if (currentMarker.current) {
      currentMarker.current.setLngLat([lng, lat]);
    }
  }, [lng, lat]);

  return (
    <div>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: "80vh", width: "100vw" }}
      />
      <div style={{ marginTop: "1%" }}>
        <Link to="/" className="btn btn-success btn-sm">
          Home Page
        </Link>
        &nbsp;&nbsp;
        <Link to="/product-gallery" className="btn btn-success btn-sm">
          View Gallery
        </Link>
      </div>
    </div>
  );
};

export default MapBox;
