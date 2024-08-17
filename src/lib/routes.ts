export const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
    type: "collapse",
    subRoutes: [],
  },
  {
    id: 2,
    name: "About Us",
    type: "collapse",
    path: "/about-us",
    subRoutes: [],
  },
  {
    id: 3,
    name: "Services",
    type: "collapse",
    path: "/services",
    subRoutes: [
      {
        id: 1,
        name: "Pressure Washing",
        type: "collapse",
        path: "/services/pressure-washing",
      },
      {
        id: 2,
        name: "Window Cleaning",
        type: "collapse",
        path: "/services/window-cleaning",
      },
      {
        id: 3,
        name: "Commercial",
        type: "collapse",
        path: "/services/commercial-cleaning",
      },
      {
        id: 4,
        name: "Restaurant Cleaning",
        type: "collapse",
        path: "/services/restaurant-cleaning",
      },
      {
        id: 5,
        name: "Residential Cleaning",
        type: "collapse",
        path: "/services/residential-cleaning",
      },
    ],
  },
  {
    id: 4,
    name: "Clients",
    type: "collapse",
    path: "/clients",
    subRoutes: [],
  },
  {
    id: 5,
    name: "Contact Us",
    type: "collapse",
    path: "/contact-us",
    subRoutes: [],
  },
];
