import "./App.css";
import Header from "./Header/header";
import Main from "./main/Main";
import Footer from "./footer/footer";
import { Foodordercontext, Ordercontext } from "./Store/Foodordercontext";
import { useState, useReducer } from "react";

const App = () => {
  const ordereducer = (orderedmenu, action) => {
    let addedid = orderedmenu.map((data) => {
      return data.id;
    });

    switch (action.type) {
      case "add":
        if (orderedmenu.length != 0 && addedid.includes(action.orderitem.id)) {
          let updatedmenu = orderedmenu.map((data) => {
            if (data.id === action.id) {
              let amnt = data.amt + action.orderitem.amt;
              data.amt = amnt;

              return data;
            } else {
              return data;
            }
          });
          return (orderedmenu = [...updatedmenu]);
        } else {
          return (orderedmenu = [...orderedmenu, action.orderitem]);
        }
      case "remove":
        let minusedmenu = orderedmenu.map((data) => {
          if (data.id === action.id) {
            let amnt = data.amt - 1;
            data.amt = amnt;

            return data;
          } else {
            return data;
          }
        });
        return (orderedmenu = [...minusedmenu]);
      case "order":
        return (orderedmenu = []);
      default:
        return orderedmenu;
    }
  };

  console.log("app render");
  const [ismodelshow, setismodelshow] = useState(false);
  // const [orderedmenu, setorderedmenu] = useState([]);
  const [orderedmenu, orderdispatch] = useReducer(ordereducer, []);
  const filteredmenu = orderedmenu.filter((data) => {
    return data.amt > 0;
  });

  const finalorderhandler = (totalprise) => {
    let finalorder = { totalamount: totalprise, items: filteredmenu };

    console.log("ordering");
    console.log(finalorder);
    orderdispatch({ type: "order" });
  };

  const foodmenuary = [
    {
      id: "1",
      title: "batatapuri",
      dec: "fill ur mouth with crazyness",
      prise: "50",
    },
    {
      id: "2",
      title: "dalvada",
      dec: "taste it wid green chuteny",
      prise: "60",
    },
    {
      id: "3",
      title: "menduvada",
      dec: "south india's popular item",
      prise: "53",
    },
    {
      id: "4",
      title: "bhajiya",
      dec: "remember it while raining",
      prise: "45",
    },
  ];

  const orderhandlermain = (data) => {
    // console.log(data);
    orderdispatch(data);
  };

  const modelshowhandler = () => {
    setismodelshow(true);
  };
  const modelnotshowhandler = () => {
    setismodelshow(false);
  };
  return (
    <Foodordercontext.Provider
      value={[ismodelshow, modelshowhandler, modelnotshowhandler]}
    >
      <Ordercontext.Provider
        value={[orderhandlermain, filteredmenu, foodmenuary, finalorderhandler]}
      >
        <div className="App">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </div>
      </Ordercontext.Provider>
    </Foodordercontext.Provider>
  );
};

export default App;
