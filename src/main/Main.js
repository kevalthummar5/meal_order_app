import { useState } from "react";
import Foodmenu from "./Foodmenu/Foodmenu";
import Foodmodel from "./Foodmodel/Foodmodel";
import "./Main.css";
import Shopdescription from "./Shopdescription/Shopdescription";

const Main = () => {
  return (
    <div className="Main">
      <Foodmodel></Foodmodel>
      <Shopdescription></Shopdescription>
      <Foodmenu></Foodmenu>
    </div>
  );
};

export default Main;
