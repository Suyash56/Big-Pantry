import React from "react";
import "../styles/cards.css";
import { Card, Button } from "react-bootstrap";
import carrot from "../images/carrot.jpg";
import broccoli from "../images/broccoli.jpg";
import tomato from "../images/tomato.jpg";
import potato from "../images/potato.jpg";
import onion from "../images/onion.jpg";
import lemon from "../images/lemon.jpg";
import { FaShoppingCart } from "react-icons/fa";

function Cards() {
  const data = [
    {
      Image: carrot,
      Title: "Carrot",
      OriginalPrice: 50,
      OfferedPrice: 30,
      SavedPrice: 20,
    },
    {
      Image: broccoli,
      Title: "Broccoli",
      OriginalPrice: 100,
      OfferedPrice: 70,
      SavedPrice: 30,
    },
    {
      Image: tomato,
      Title: "Tomato",
      OriginalPrice: 40,
      OfferedPrice: 35,
      SavedPrice: 5,
    },
    {
      Image: potato,
      Title: "Potato",
      OriginalPrice: 50,
      OfferedPrice: 40,
      SavedPrice: 10,
    },
    // {
    //     Image:onion,
    //     Title:"Onion",
    //     OriginalPrice:45,
    //     OfferedPrice:40,
    //     SavedPrice:5
    // },
    {
      Image: lemon,
      Title: "Lemon",
      OriginalPrice: 15,
      OfferedPrice: 12,
      SavedPrice: 3,
    },
  ];

  return (
    <>
      <h2>My Smart Pantry</h2>
      <div className="cards">
        {data.map((data) => {
          return (
            <Card style={{ width: "14rem" }}>
              <Card.Img variant="top" src={data.Image} className="image" />
              <Card.Body>
                <Card.Title className="text-center">{data.Title}</Card.Title>
                <Card.Text className="text-center">
                  M.R.P <del>{"₹" + data.OriginalPrice}</del>
                  <br></br>
                  <b>{"₹" + data.OfferedPrice}</b>
                  <br></br>
                  <b>
                    <p className="save">{"Save ₹" + data.SavedPrice}</p>
                  </b>
                </Card.Text>

                <Button variant="primary" className="button">
                  <div className="inner-text">
                    Add To Cart
                    <div className="addtocart-logo">
                      <FaShoppingCart />
                    </div>
                  </div>
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
