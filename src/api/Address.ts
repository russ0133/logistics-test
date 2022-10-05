const Addresses = [
  {
    address: "Danilovsky",
    coordinates: [
      [55.664414, 37.623404],
      [55.703876, 37.644851],
    ],
    completed: false,
  },
  {
    address: "Dorogomilovo",
    coordinates: [
      [55.785074, 37.566086],
      [55.732326, 37.491752],
    ],
    completed: false,
  },
  {
    address: "Perovo",
    coordinates: [
      [55.795856, 37.716243],
      [55.758463, 37.753027],
    ],
    completed: false,
  },
];

export function GetAddressCoordinates(index: number) {
  return Addresses[index].coordinates;
}

export function GetAllAddressDestinations() {
  let addresses = new Array();
  Addresses.forEach((item) => {
    addresses.push(item.address);
  });

  return addresses;
}
