import React from "react";
import { MainSlider } from "./Slider/Slider.jsx"
import {Bonuses} from "./Bonuses/Bonuses.jsx";
import {Popular} from "./Popular/Popular.jsx";

export const About = () => {
     return <div>
         <MainSlider />
         <Bonuses />
         <Popular />
     </div>
}
