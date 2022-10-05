import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { GetAddressCoordinates } from "../api/Address";
import { selectedRoute } from "../redux/slices/routeSlice";
import Routing from "./Routing";

interface Props {}
const MapWidget: React.FC<Props> = ({}) => {
  const route = useSelector(selectedRoute);
  const routingRef = useRef(null);

  useEffect(() => {
    if (routingRef.current) {
      //@ts-ignore
      routingRef.current.setWaypoints(GetAddressCoordinates(route));
      console.log("Set coordinate");
    }
  }, [route, routingRef]);

  return (
    <MapContainer doubleClickZoom={false} id="mapId" zoom={14} center={[55.780603, 37.562123]}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      {route != undefined && <Routing ref={routingRef} waypoints={route} />}
    </MapContainer>
  );
};

export default MapWidget;
