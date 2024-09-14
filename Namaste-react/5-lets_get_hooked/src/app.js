import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
/**
 * header component
 *   - logo
 *   - nav icons
 *   - cart
 * body component
 *   -search
 *   -restaurant component
 *      -restaurant card
 *         -img
 *         -name,stars rating, cusine,delivery time
 * footer component
 *   -social links
 *   -contact us
 */










const Applayout = () => (
  <div className="app">
    <Header/>{/* header */}
    <HeroSection/>{/* body */}
    {/* footer */}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);


