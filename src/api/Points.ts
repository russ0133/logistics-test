const Addresses = [
  {
    destination: "1133 Atha Drive",
    address: [
      [33.53001088075479, 36.26829385757446],
      [33.50546582848033, 36.29547681726967],
    ],
  },
  {
    destination: "622 Brighton Circle Road",
    address: [
      [33.52001088075479, 36.26829385757446],
      [33.50546582848033, 36.29547681726967],
    ],
  },
];

export function GetAddressCoordinates(index: number) {
  return Addresses[index].address;
}
