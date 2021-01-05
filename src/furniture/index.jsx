import React from "react";
import "./index.scss";

/*
no-split: imagenes: 2540x1200 safe(2540x1050px) / split: 1500x1920px (safe 1500x1334px)
*/
import furniture1Image from "../assets/images/furniture/furniture-1.webp";
import aislanteImage from "../assets/images/renorun/reno-aislante.webp";
import alambreImage from "../assets/images/renorun/reno-alambre.webp";
import galvanizadoImage from "../assets/images/renorun/reno-galvanizado.webp";
import ImageSingleComponent from "../components/image-single-component";
import DescriptionComponent from "../components/description-component";

export default function RenoRun() {
  return (
    <>
      <div className="behind-top-nav"></div>
      <ImageSingleComponent image={furniture1Image} />
      <DescriptionComponent>
        <p>
          <b>Client:</b> Renorun
          <br />
          <b>Brief</b>: Produced 3D computer generated images for their website.
          <br />
          <b>Background</b>: Renorun is an ecommerce website that sells building
          materials by delivery.
          <br />
          <b>Approach</b>: Layout, 3D render, etc
          <br />
          <b>Services</b>: Product Visualisation
          <br />
          <b>Software</b>: Blender v2.9 + Adobe Photoshop
          <br />
        </p>
      </DescriptionComponent>
      <ImageSingleComponent image={alambreImage} />
      <ImageSingleComponent image={aislanteImage} />
      <ImageSingleComponent image={galvanizadoImage} />
    </>
  );
}
