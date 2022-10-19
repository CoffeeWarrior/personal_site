import background from "../images/SpaceDrawings/TextBackground/background.png";
import stars from "../images/SpaceDrawings/TextBackground/stars.png";
import flowers1 from "../images/SpaceDrawings/TextBackground/flowers-g1.png";
import flowers2 from "../images/SpaceDrawings/TextBackground/flowers-g2.png";
import flowers3 from "../images/SpaceDrawings/TextBackground/flowers-g3.png";
import flowers4 from "../images/SpaceDrawings/TextBackground/flowers-g4.png";
import flowers5 from "../images/SpaceDrawings/TextBackground/flowers-g5.png";
import React from "react";

export const TextBackground = () => {
  return (
    <div className="TextBackground">
      <img alt="" className="background" src={background}></img>
      <img alt="" className="stars" src={stars}></img>
      <img alt="" className="flowers-1" src={flowers1}></img>
      <img alt="" className="flowers-2" src={flowers2}></img>
      <img alt="" className="flowers-3" src={flowers3}></img>
      <img alt="" className="flowers-4" src={flowers4}></img>
      <img alt="" className="flowers-5" src={flowers5}></img>
    </div>
  );
};
