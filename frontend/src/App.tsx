import { useQuery } from "@tanstack/react-query";
import React from "react";
import DashBoard from "./Components/DashBoard/DashBoard";
import { useAppSelector } from "./Components/Global/ReduxState/Store";
import HomeRoutes from "./Components/Routes/HomeRoutes";
import { GetOneUser } from "./Components/Api/Api";

function App() {
  // import img from "../Assets/person.png";

  const user = useAppSelector((state) => state.currentUser);

  console.log(user);

  const fetchUser = useQuery({
    queryKey: ["user"],
    queryFn: () => GetOneUser(user?._id),
  });

  console.log(fetchUser);

  return <div>{user?.name ? <DashBoard /> : <HomeRoutes />}</div>;
}

export default App;
