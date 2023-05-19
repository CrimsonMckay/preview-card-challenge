import Card from "./components/Card";
import Sedans from "./images/icon-sedans.svg";
import Luxury from "./images/icon-luxury.svg";
import SUV from "./images/icon-suvs.svg";
import Button from "./components/Button";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/2 h-126 flex">
        <Card yellow>
          <div>
            <img src={Sedans} alt="sedans" />
          </div>
          <h1>SEDANS</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel
            economy.Ideal for cruising in the city or an your next road trip
          </p>
          <Button />
        </Card>
        <Card blue>
          <div>
            <img src={SUV} alt="sedans" />
          </div>
          <h1>SUVS</h1>
          <p>
            Take an SUV for its spacious interior,power, and versatility.Perfect
            for your next family vacation and off-road adventures.
          </p>

          <Button />
        </Card>
        <Card teal>
          <div>
            <img src={Luxury} alt="sedans" />
          </div>
          <h1>LUXURY</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <Button />
        </Card>
      </div>
    </div>
  );
}

export default App;
