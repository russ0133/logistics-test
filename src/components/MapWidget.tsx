import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { useTransition, animated } from "react-spring";
import AddressData from "../api/destinations";
import { selectedRoute } from "../redux/slices/routeSlice";
import Routing from "./Routing";

interface Props {}
const MapWidget: React.FC<Props> = () => {
  const [mounted, setMounted] = useState(false);
  const transition = useTransition(mounted, {
    from: { opacity: 0, y: 1000 },
    enter: { opacity: 1, y: 0 },
    leave: {},
    config: {},
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const route = useSelector(selectedRoute);
  const routingRef = useRef<any>(null);

  useEffect(() => {
    if (routingRef.current) {
      routingRef.current.setWaypoints(AddressData.getCoordinatesByIndex(route));
      console.log("Set coordinate");
    }
  }, [route, routingRef]);

  return transition((style, item) =>
    item ? (
      <animated.div style={style} className="md:col-span-5 col-span-5 z-10 p-12 h-[100vh]  ">
        <MapContainer doubleClickZoom={false} id="mapId" zoom={14} center={[55.780603, 37.562123]}>
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png?api_key=5b69e2ad-17be-41e9-91aa-57aaade52255"
            attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
          />
          {route !== undefined && <Routing ref={routingRef} waypoints={route} />}
        </MapContainer>
      </animated.div>
    ) : (
      ""
    )
  );
};

export default MapWidget;
