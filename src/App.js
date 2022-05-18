import "./App.css";
import PriceCard from "./Components/PriceCard/PriceCard";
import ToggleSwitch from "./Components/PriceCard/ToggleSwitch/ToggleSwitch";

function App() {
  return (
    <div className="App">
      <h1>Our Pricing</h1>
      <div className="price-plan">
        <span>Annually</span>
        <ToggleSwitch className="toggler" />
        <span>Monthly</span>
      </div>
      <br />

      <div className="price-card-container">
        <PriceCard
          offer="Basic"
          price="$19.99"
          storage="500 GB Storage"
          users="2 Users Allowed"
        />
        <PriceCard
          offer="Professional"
          price="$24.99"
          storage="1 TB Storage"
          users="5 Users Allowed"
        />
        <PriceCard
          offer="Master"
          price="39.99"
          storage="2 TB Storage"
          users="10 Users Allowed"
        />
      </div>
      <div class="attribution">
        Coded by <a href="#">Isak Antunevik</a>.
      </div>
    </div>
  );
}

export default App;
