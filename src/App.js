import React from 'react';
import './App.css';
import Section from './components/Section'

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
