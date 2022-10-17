
# Leaflet Routing Page

Displays a comprehensive list of addresses, mapped by coordinates on a navbar and allows the user to get driving coordinates from point A to point B using Leaflet and OpenStreetMap API.

Supposed to mimic the UI from delivery/logistics web applications. Currently running a mock back-end, all addresses are hard-coded into ['src/api/destinations.ts'](https://github.com/russ0133/logistics-test/blob/main/src/api/destinations.ts).
## API Reference
#### Array of Destinations:

    destination: string;        // Descriptive text to be displayed on nav bar
    coordinates: number[][];    // Array with two coordinates, start and final
    completed: boolean;         // If the delivery has been completed


#### -> getCoordinatesByIndex(index: number)
Returns the initial and final coordinates of the item in the selected index.

#### -> getAllDestinations()
Returns the 'destination' field of all addresses.
## Run Locally

Clone the project

```bash
  git clone https://github.com/russ0133/logistics-test.git
```

Go to the project directory

```bash
  cd logistics-test
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Client:** React, Redux, TailwindCSS, Antd, React-Spring, Leaflet

**Server:** Node, Express


## Authors

- [@russ0133](https://www.github.com/russ0133)

