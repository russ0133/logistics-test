import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutingMachineLayer = (props: any) => {
  const { waypoints } = props;
  const instance = L.Routing.control({
    waypoints,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
      extendToWaypoints: false,
      missingRouteTolerance: 0,
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;
