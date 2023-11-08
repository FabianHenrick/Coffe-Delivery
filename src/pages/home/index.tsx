import CoffeBanner from "../../assets/coffe-banner.svg";

import { Banner } from "./components/banner";
import { CoffeMenu } from "./components/coffemenu";

export function Home() {
  return (
    <div>
      <Banner />
      <CoffeMenu />;
    </div>
  );
}
