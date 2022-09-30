import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { GetAddressCoordinates } from "../api/Points";
import RoutingMachine from "./RoutingMachine";

interface Props {
  points: number | undefined;
  setPoints: React.Dispatch<React.SetStateAction<number | undefined>>;
}
const MapWidget: React.FC<Props> = ({ points, setPoints }) => {
  const rMachine = useRef(null);

  useEffect(() => {
    if (rMachine.current) {
      console.log(rMachine.current);
      //@ts-ignore
      rMachine.current.setWaypoints(GetAddressCoordinates(points));
      console.log("Set coordinate");
    }
  }, [points, rMachine]);

  return (
    <MapContainer doubleClickZoom={false} id="mapId" zoom={14} center={[33.5024, 36.2988]}>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      <RoutingMachine ref={rMachine} waypoints={points} />
    </MapContainer>
  );
};

export default MapWidget;
