import React from "react";
import ata from "../images/offers/1.png";
import noodles from "../images/offers/2.png";
import breakfast from "../images/offers/3.png";
import oils from "../images/offers/4.png";
import drinks from "../images/offers/5.png";
import sugar from "../images/offers/6.png";
import biscuits from "../images/offers/7.png";
import fruits from "../images/offers/8.png";

import "../styles/offers.css";

function Offers() {
  const offersData = [
    {
      Image: ata,
      Title: "Atta, Flours & Sooji",
      Offer: 20,
    },
    {
      Image: noodles,
      Title: "Noodle, Pasta & Vermiceill",
      Offer: 10,
    },
    {
      Image: breakfast,
      Title: "Breakfast Cereals",
      Offer: 5,
    },
    {
      Image: oils,
      Title: "Edible Oils",
      Offer: 25,
    },
    {
      Image: drinks,
      Title: "Ennergy & Soft Drinks",
      Offer: 15,
    },
    {
      Image: sugar,
      Title: "Salt, Sugar & Jaggry",
      Offer: 30,
    },
    {
      Image: biscuits,
      Title: "Biscuits & Cookies",
      Offer: 10,
    },
    {
      Image: fruits,
      Title: "Fruita & Vegetables",
      Offer: 20,
    },
  ];

  return (
    <>
      <h2>Offers On Daily Essentials</h2>
      <wrap>
        {offersData.map((offers) => {
          return (
            <card>
              <img src={offers.Image} className="offers-image"></img>
              <tag>Up To {offers.Offer}% OFF</tag>
            </card>
          );
        })}
      </wrap>
    </>
  );
}

export default Offers;
