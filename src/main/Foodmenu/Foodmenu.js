import { useContext, useState } from "react";
import { Ordercontext } from "../../Store/Foodordercontext";
import Fooditem from "./Fooditem/Fooditem";
import "./Foodmenu.css";

const Foodmenu = () => {
  // const [orderedmenu,setorderedmenu]=useState([])
  const [orderhandlermain, orderedmenu, foodmenuary, finalorderhandler] =
    useContext(Ordercontext);
  return (
    <div className="Foodmenu">
      {foodmenuary.map((food) => {
        return (
          <Fooditem
            key={food.id}
            id={food.id}
            title={food.title}
            dec={food.dec}
            prise={food.prise}
          ></Fooditem>
        );
      })}
    </div>
  );
};
export default Foodmenu;
