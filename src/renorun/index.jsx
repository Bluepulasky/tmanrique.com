import React from "react";

/*
no-split: imagenes: 2540x1200 safe(2540x1050px) / split: 1500x1920px (safe 1500x1334px)
*/
import livingImage from "../assets/images/living.jpg";
import kitchenImage from "../assets/images/kitchen.jpg";
import windowImage from "../assets/images/window.jpg";
import ImageComponent from "../components/image-component";
import ImageComponentSplit from "../components/image-component-split";
/*import DescriptionComponent from "./description-component";*/

export default function Home() {
  return (
    <>
      <ImageComponent
        image={livingImage}
        title="The Living Room"
        linktarget="/contact"
      />
      <ImageComponentSplit
        imageLeft={kitchenImage}
        titleLeft="Pink Kitchen"
        imageRight={windowImage}
        titleRight="Modern Living Room"
      />
    </>
  );
}

/*
      <DescriptionComponent>
        <p>
          <b>Client:</b>
          <br />
          <b>Brief</b>: We were appointed by London-based design agency Here to
          produce 3D computer generated images for their luxury rebrand of the
          Glenfiddich core range.
          <br />
          <b>Background</b>: Produced in Speyside, Glenfiddich has become one of
          the most iconic brands in the world of single malt whiskies. Here
          design agency reimagined Glenfiddich’s product imagery, while aiming
          to respect their past and define their future ambitions. Here
          modernised the brand’s bottle structure, refining its triangular
          profile and adding a clearly-defined V-shaped cut into the glass
          surface. This acts to frame the iconic stag emblem and symbolise the
          valley represented by the brand name. They also redesigned the
          labelling and secondary packaging, balancing clean and crisp modern
          lines with more traditional malt whisky design cues. The rebrand
          succeeds in representing Glenfiddich’s authentic heritage while
          highlighting its maverick spirit and forward thinking ambitions.
          <br />
          <b>Approach</b>: As part of our brief, we produced packshot renders of
          the 12- and 15-year-old malt whiskies produced by Glenfiddich. We
          created photorealistic computer generated 3D visuals of the redesigned
          bottles and secondary packaging for use on the Glenfiddich website. We
          also created a series of rendered images, complete with atmospheric
          lighting, for the PR launch of the rebrand campaign. Our 3D product
          visualisation acts as the perfect tool to illustrate Glenfiddich’s
          updated bottle and packaging by highlighting features such as the
          modernised bottle profile, V-shaped engraving and redesigned label
          <br />
          <b>Services</b>: Product Visualisation
          <br />
          <b>Software</b>: Blender v2.9 + Adobe Photoshop
          <br />
        </p>
      </DescriptionComponent>
*/
