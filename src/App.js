import React from "react";
import Craousel from "./components/Reactcarousel";
import Info from "./components/info";
import Addon from "./components/Addon";
import Install from "./components/install";
import End from "./components/End";
import Last from "./components/last";
export default function App() {
  return (
    <div>
      <Craousel />
      <Addon />
      <Info />
      <Install />
      <End />
      <Last />
    </div>
  );
}
