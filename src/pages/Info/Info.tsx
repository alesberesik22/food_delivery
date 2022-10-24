import React from "react";
import "./Info.scss";
import delivery from "../../assets/images/delivery.png";
import bg from "../../assets/images/bg.png";
import { favoriteItems } from "./favorites";

const Info = () => {
  return (
    <div className="main">
      <section className="info_container">
        <div className="info_container_left">
          <p className="heading">
            Delivery in whole Country <img src={delivery} alt="delivery" />
          </p>
          <h1>The Fastest Delivery in the</h1>
          <h1 style={{ color: "orangered" }}>Country</h1>
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            veniam molestias, facilis error ratione accusamus voluptatum! Ullam,
            quam non! Tempora ipsum veritatis dolore, eveniet velit ea maxime
            nihil dolorem ducimus.
          </p>
          <button className="order_now">Order Now</button>
        </div>
        <div className="info_container_right">
          <div className="info_container_image">
            <img src={bg} alt="background" />
          </div>
          <div className="info_container_items">
            {favoriteItems.map((item, index) => (
              <div className="info_container_item" key={index}>
                <img src={item.img} alt={item.name} />
                <div className="info_container_item_name">
                  <h4>{item.name}</h4>
                </div>
                <div className="info_container_item_description">
                  <h5>{item.description}</h5>
                </div>
                <div className="info_container_item_price">
                  <span>
                    $ <h6>{item.price}</h6>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
