/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import Missions from "../components/missions/Missions";
import Profile from "../components/profile/Profile";
import Rockets from "../components/rockets/Rockets";

const routes = [
  {
    path: "/",
    name: "Rockets",
    element: <Rockets />,
  },
  {
    path: "/missions",
    name: "Missions",
    element: <Missions />,
  },
  {
    path: "/profile",
    name: "Profile",
    element: <Profile />,
  },
];
export default routes;
