import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home";
import { Checkout } from "../../pages/checkout";
import { Success } from "../../pages/success";
import { DefaultLayout } from "../layouts/defaultLayout/index";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
