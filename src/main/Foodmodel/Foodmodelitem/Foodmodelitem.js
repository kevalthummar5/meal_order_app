import { useContext } from "react";
import { Ordercontext } from "../../../Store/Foodordercontext";
import "./Foodmodelitem.css";

const Foodmodelitem = (props) => {
  const [orderhandlermain, orderedmenu, foodmenuary, finalorderhandler] =
    useContext(Ordercontext);
  const orderhandlerplusitem = () => {
    let updateplusitem = {
      id: props.id,
      title: props.title,
      dec: props.dec,
      prise: props.prise,
      amt: 1,
    };

    orderhandlermain({
      type: "add",
      orderitem: updateplusitem,
      id: updateplusitem.id,
    });
  };
  const orderhandlerminusitem = () => {
    let updateminusitem = {
      id: props.id,
      title: props.title,
      dec: props.dec,
      prise: props.prise,
      amt: 1,
    };

    orderhandlermain({
      type: "remove",
      orderitem: updateminusitem,
      id: updateminusitem.id,
    });
  };
  return (
    <div className="Foodmodelitem">
      <div className="Foodmodelitemarea">
        <h3 className="Foodmodelitemhead">{props.title}</h3>

        <h3 className="Foodmodelitemamount">₹ {props.prise}</h3>
        <span className="Foodmodelitemnumber">x {props.amt}</span>
      </div>
      <div className="Foodmodelitemhisab">
        <button className="Foodmodelitemset" onClick={orderhandlerplusitem}>
          +{" "}
        </button>

        <button className="Foodmodelitemset" onClick={orderhandlerminusitem}>
          -
        </button>
      </div>
    </div>
  );
};
export default Foodmodelitem;
