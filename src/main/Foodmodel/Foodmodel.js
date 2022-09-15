import "./Foodmodel.css";
import Foodmodelitem from "./Foodmodelitem/Foodmodelitem";
import { useState, useContext } from "react";
import { Foodordercontext, Ordercontext } from "../../Store/Foodordercontext";
const Foodmodel = () => {
  const [ismodelshow, modelshowhandler, modelnotshowhandler] =
    useContext(Foodordercontext);
  const [orderhandlermain, orderedmenu, foodmenuary, finalorderhandler] =
    useContext(Ordercontext);
  const totalprise = orderedmenu.reduce((total, data) => {
    total = total + data.amt * data.prise;
    return total;
  }, 0);

  return ismodelshow ? (
    <div>
      <div
        className="backdrop"
        onClick={() => {
          modelnotshowhandler();
        }}
      ></div>
      <div className="Foodmodel">
        <div className="Foodmodelitemarea">
          {orderedmenu.map((data) => {
            return (
              <Foodmodelitem
                key={data.id}
                dec={data.dec}
                id={data.id}
                amt={data.amt}
                prise={data.prise}
                title={data.title}
              ></Foodmodelitem>
            );
          })}
        </div>
        {orderedmenu.length == 0 ? (
          <div className="Foodmodeltotal">
            <h3>your cart is empty</h3>
          </div>
        ) : (
          <div className="Foodmodeltotal">
            <h3>total amount</h3>
            <h3>₹ {totalprise}</h3>
          </div>
        )}

        <div className="Foodmodelbtnarea">
          <button
            className="Foodmodelbtn btncl"
            onClick={() => {
              modelnotshowhandler();
            }}
          >
            close
          </button>
          {orderedmenu.length == 0 ? null : (
            <button
              className="Foodmodelbtn btnodr"
              onClick={() => {
                finalorderhandler(totalprise);
                modelnotshowhandler();
              }}
            >
              order
            </button>
          )}
        </div>
      </div>
    </div>
  ) : null;
};
export default Foodmodel;
