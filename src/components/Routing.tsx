import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutingMachineLayer = (props: any) => {
  const { waypoints } = props;

  const planOptions = { addWaypoints: false, draggableWaypoints: false };
  const plan = new L.Routing.Plan(waypoints, planOptions);

  const instance = L.Routing.control({
    waypoints,
    plan,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }],
      extendToWaypoints: false,
      addWaypoints: false,
      missingRouteTolerance: 0,
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });
  return instance;
};

const Routing = createControlComponent(createRoutingMachineLayer);

export default Routing;
