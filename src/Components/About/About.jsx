import React from "react";
import { MainSlider } from "./Slider/Slider"
import {Bonuses} from "./Bonuses/Bonuses";
import {Popular} from "./Popular/Popular";

export const About = () => {
     return <div>
         <MainSlider />
         <Bonuses />
         <Popular />
     </div>
}
