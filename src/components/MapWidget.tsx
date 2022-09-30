import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { GetAddressCoordinates } from "../api/Address";
import { selectedRoute } from "../redux/slices/routeSlice";
import RoutingMachine from "./RoutingMachine";

interface Props {}
const MapWidget: React.FC<Props> = ({}) => {
  const count = useSelector(selectedRoute);
  const rMachine = useRef(null);

  useEffect(() => {
    if (rMachine.current) {
      console.log(rMachine.current);
      //@ts-ignore
      rMachine.current.setWaypoints(GetAddressCoordinates(count));
      console.log("Set coordinate");
    }
  }, [count, rMachine]);

  return (
    <MapContainer doubleClickZoom={false} id="mapId" zoom={14} center={[33.5024, 36.2988]}>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      <RoutingMachine ref={rMachine} waypoints={count} />
    </MapContainer>
  );
};

export default MapWidget;
