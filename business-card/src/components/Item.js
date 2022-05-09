import React from "react";
import { StarSvg } from "./Sprite";

export const Item = ({img , name , rating , totalRating , heading, price}) => {
  
  return (
    <div className="card col-md-3 p-md-0 p-4 b-0 me-3 border-0 ">
      <div className="top-wrap position-relative">
        <img className="image mb-2" src={img} alt="" />
        <span className="position-absolute bg-white text-black px-2 py-1 text-uppercase status ">
         
          {name}
        </span>
      </div>
      <div className="bottom-wrap">
        <div className="details mb-2 title d-flex align-items-center">
          <StarSvg />
          <span>
            
            {rating}
            <span className="g-color"> {totalRating} </span>
          </span>
          <span className="g-color">USA</span>
        </div>

        <h3 className="title fw-light mb-2">{heading}</h3>

        <p className="">
         
          <span className="fw-bold title costtitle"> {price} </span>
        </p>
      </div>
    </div>
  );
};
