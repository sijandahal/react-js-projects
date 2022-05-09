import { Item } from "./Item";
import menimage from "./images/men.png";
import bike from "./images/bike.png";
import weddingImage from "./images/wedding.png";

import React from "react";

export default function Card() {
  return (
    <>
      <div className="main-wrapper row g-0 mt-4">
        <Item
          img={menimage}
          heading="Life lessons with Katie Zaferes"
          name="SOLD OUT"
          rating="5.0"
          totalRating="(30)"
          price="From $136 / person"
        />
        <Item
          img={weddingImage}
          heading="Learn wedding photography"
          name="ONLINE"
          rating="5.0"
          totalRating="(6)"
          price="From $125 / person"
        />
        <Item
          img={bike}
          heading="Group Mountain Biking"
          name="ONLINE"
          rating="5.0"
          totalRating="(6)"
          price="From $50 / person"
        />
      </div>
    </>
  );
}
