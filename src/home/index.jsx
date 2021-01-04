import React from "react";
import "./index.scss";

/*
no-split: imagenes: 2540x1200 safe(2540x1050px) / split: 1500x1920px (safe 1500x1334px)
*/
import livingImage from "../assets/images/living.jpg";
import kitchenImage from "../assets/images/kitchen.jpg";
import windowImage from "../assets/images/window.jpg";
import mustardImage from "../assets/images/mustard.jpg";
import sundialImage from "../assets/images/bottle.jpg";
import whiskyImage from "../assets/images/whiskybottle.jpg";
import manijaImage from "../assets/images/manija.jpg";
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
