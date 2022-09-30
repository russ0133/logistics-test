const Addresses = [
  {
    address: "1133 Atha Drive",
    coordinates: [
      [33.53001088075479, 36.26829385757446],
      [33.50546582848033, 36.29547681726967],
    ],
    completed: false,
  },
  {
    address: "622 Brighton Circle Road",
    coordinates: [
      [33.52001088075479, 36.26829385757446],
      [33.50546582848033, 36.29547681726967],
    ],
    completed: false,
  },
  {
    address: "Long Address for Testing testing testing testing",
    coordinates: [
      [56.385985, 61.931436],
      [56.384458, 61.971697],
    ],
    completed: false,
  },
];

export function GetAddressCoordinates(index: number) {
  return Addresses[index].coordinates;
}

export function GetAllAddressDestinationsFormatted() {
  let addresses = new Array();
  Addresses.forEach((item) => {
    if (item.address.length < 22) return addresses.push(item.address);
    let formattedAddress = item.address.slice(0, 21);
    formattedAddress = formattedAddress + "...";
    addresses.push(formattedAddress);
  });

  return addresses;
}

export function GetAllAddressDestinations() {
  let addresses = new Array();
  Addresses.forEach((item) => {
    addresses.push(item.address);
  });

  return addresses;
}
