import React from "react";
import "./index.scss";

/*
no-split: imagenes: 2540x1200 safe(2540x1050px) / split: 1500x1920px (safe 1500x1334px)
*/
import livingImage from "../assets/images/living.webp";
import kitchenImage from "../assets/images/kitchen.webp";
import windowImage from "../assets/images/window.webp";
import mustardImage from "../assets/images/mustard.webp";
import sundialImage from "../assets/images/bottle.webp";
import whiskyImage from "../assets/images/whiskybottle.webp";
import manijaImage from "../assets/images/manija.webp";
import ImageComponent from "../components/image-component";
import ImageComponentSplit from "../components/image-component-split";
/*import DescriptionComponent from "./description-component";*/

export default function Home() {
  return (
    <>
      <div className="behind-top-nav-home"></div>
      <ImageComponent
        image={livingImage}
        title="Furniture Showcase"
        linktarget="/furniture"
      />
      <ImageComponentSplit
        imageLeft={kitchenImage}
        titleLeft="Pink Kitchen"
        linkLeft=""
        imageRight={windowImage}
        titleRight="Modern Living Room"
        linkRight=""
      />
      <ImageComponent
        image={mustardImage}
        title="Heinz Mustard"
        linktarget=""
      />
      <ImageComponentSplit
        imageLeft={sundialImage}
        linkLeft=""
        titleLeft="Sundial AI"
        imageRight={whiskyImage}
        titleRight="Whisky Bottle"
        linkRight=""
      />
      <ImageComponent
        image={manijaImage}
        title="RenoRun"
        linktarget="/renorun"
      />
    </>
  );
}
