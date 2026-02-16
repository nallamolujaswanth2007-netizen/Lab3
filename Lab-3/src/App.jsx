import React from "react";
import ProductContainer from "./containers/ProductContainer";
import "./styles.css";



const App = () => {
  return (
    <div className="app-wrapper">
      <h1 className="title">Wellness Store</h1>
      <ProductContainer />
    </div>
  );
};


export default App;
