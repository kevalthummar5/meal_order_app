import { useContext, useRef, useState } from "react";
import { Ordercontext } from "../../../Store/Foodordercontext";
import "./Fooditem.css";

const Fooditem = (props) => {
  let totalamtref = useRef(1);
  const [orderhandlermain, orderedmenu, foodmenuary, finalorderhandler] =
    useContext(Ordercontext);
  const orderhandlerfooditem = () => {
    let orderitem = {
      id: props.id,
      title: props.title,
      dec: props.dec,
      prise: parseInt(props.prise),
      amt: parseInt(totalamtref.current.value),
    };

    orderhandlermain({ type: "add", orderitem: orderitem, id: orderitem.id });
  };

  return (
    <div className="Fooditem">
      <div className="Fooditemarea">
        <h3 className="Fooditemhead">{props.title}</h3>
        <p className="Fooditemdes">{props.dec}</p>
        <h3 className="Fooditemamount">₹{props.prise}</h3>
      </div>
      <div className="Fooditemhisab">
        <label className="Fooditemsetter">item : </label>
        <input
          className="Fooditeminput"
          type="number"
          defaultValue="1"
          ref={totalamtref}
        ></input>
        <button className="Fooditemadd" onClick={orderhandlerfooditem}>
          + ADD
        </button>
      </div>
    </div>
  );
};
export default Fooditem;
