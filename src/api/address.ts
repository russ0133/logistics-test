const address = (() => {
  const listOfAddresses = [
    {
      destination: "Danilovsky",
      coordinates: [
        [55.664414, 37.623404],
        [55.703876, 37.644851],
      ],
      completed: false,
    },
    {
      destination: "Dorogomilovo",
      coordinates: [
        [55.785074, 37.566086],
        [55.732326, 37.491752],
      ],
      completed: false,
    },
    {
      destination: "Perovo",
      coordinates: [
        [55.795856, 37.716243],
        [55.758463, 37.753027],
      ],
      completed: false,
    },
  ];

  return {
    getAddressCoordinatesByIndex(index: number) {
      return listOfAddresses[index].coordinates;
    },

    getAllAddressesDestinations() {
      let allAddresses: string[] = [];
      listOfAddresses.forEach((item) => allAddresses.push(item.destination));
      return allAddresses;
    },
  };
})();

export default address;
