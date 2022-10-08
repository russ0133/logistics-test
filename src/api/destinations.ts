const destinations = (() => {
  const addresses = [
    {
      destination: "Danilovsky Region",
      coordinates: [
        [55.664414, 37.623404],
        [55.703876, 37.644851],
      ],
      completed: false,
    },
    {
      destination: "Dorogomilovo Region",
      coordinates: [
        [55.785074, 37.566086],
        [55.732326, 37.491752],
      ],
      completed: false,
    },
    {
      destination: "Perovo Region",
      coordinates: [
        [55.795856, 37.716243],
        [55.758463, 37.753027],
      ],
      completed: false,
    },
  ];

  return {
    getCoordinatesByIndex(index: number) {
      return addresses[index].coordinates;
    },

    getAllDestinations() {
      let allAddresses: string[] = [];
      addresses.forEach((item) => allAddresses.push(item.destination));
      return allAddresses;
    },
  };
})();

export default destinations;
