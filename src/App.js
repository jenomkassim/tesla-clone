import React from 'react';
import './App.css';
import Section from './components/Section'
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
      <Section
          title = "Model S"
          description = "Order Online for Touchless Delivery"
          leftBtn = "Custom Order"
          rightBtn = "Existing Inventory"
          bgImage = "model-s.jpg"
      />

        <Section
            title = "Model Y"
            description = "Order Online for Touchless Delivery"
            leftBtn = "Custom Order"
            rightBtn = "Existing Inventory"
            bgImage = "model-y.jpg"
        />

        <Section
            title = "Model 3"
            description = "Order Online for Touchless Delivery"
            leftBtn = "Custom Order"
            rightBtn = "Existing Inventory"
            bgImage = "model-3.jpg"
        />

        <Section
            title = "Model X"
            description = "Order Online for Touchless Delivery"
            leftBtn = "Custom Order"
            rightBtn = "Existing Inventory"
            bgImage = "model-x.jpg"
        />

        <Section
            title = "Solar Panels"
            description = "Lowest Cost Solar Panels in America"
            leftBtn = "Order Now"
            rightBtn = "Learn More"
            bgImage = "solar-panel.jpg"
        />

        <Section
            title = "Solar Roof"
            description = "Produce Clean Energy From Your Roof"
            leftBtn = "Order Now"
            rightBtn = "Learn More"
            bgImage = "solar-roof.jpg"
        />

        <Section
            title = "Accessories"
            description = ""
            leftBtn = "Shop Now"
            bgImage = "accessories.jpg"
        />
    </div>
  );
}

export default App;
