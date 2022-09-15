import { useContext, useEffect, useState } from "react";
import { Foodordercontext, Ordercontext } from "../../Store/Foodordercontext";
import "./Orderitem.css";
import { FaShoppingCart } from "react-icons/fa";
const Orderitem = () => {
  const [ismodelshow, modelshowhandler, modelnotshowhandler] =
    useContext(Foodordercontext);
  const [orderhandlermain, orderedmenu, foodmenuary, finalorderhandler] =
    useContext(Ordercontext);
  const [bounce, setbounce] = useState({ height: "60px", width: "240px" });

  let totalamt = orderedmenu.reduce((total, data) => {
    total = total + data.amt;
    return total;
  }, 0);

  useEffect(() => {
    setbounce({ scale: "1.3" });
    setTimeout(() => {
      console.log("time run");
      setbounce({ scale: "1" });
    }, 100);
  }, [totalamt]);

  return (
    <div
      className="Orderitem"
      onClick={() => {
        modelshowhandler();
      }}
      style={bounce}
    >
      <span className="Orderitemicon">
        <FaShoppingCart></FaShoppingCart>
      </span>
      <span className="Orderitemdes">Cart Item</span>
      <div className="Orderitemnumber">
        <h3>{totalamt}</h3>
      </div>
    </div>
  );
};
export default Orderitem;
