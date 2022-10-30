import React, { useEffect, useState } from "react";
import { MdFastfood } from "react-icons/md";
import { UserValue } from "../../context/StateProvider";
import "./Menu.scss";
import Menucontainer from "./Menucontainer";

const Menu = () => {
  const [{ foodItems }] = UserValue();
  const [activeFilter, setActiveFilter] = useState("All");
  const [items, setItems] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const handleCategoryClicked = (category: string) => {
    setActiveFilter(category);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (category === "All") {
        setItems(foodItems);
      } else {
        console.log("som v else");
        setItems(
          foodItems.filter((itemCategory: any) => {
            return String(itemCategory.category) === category.toLowerCase();
          })
        );
        const filtered = items.filter((item: any) => {
          return String(item.category) === category.toLowerCase();
        });
        console.log("filter", filtered);
      }
    }, 500);
  };
  useEffect(() => {
    setItems(foodItems);
  }, [foodItems]);
  return (
    <section className="menu">
      <div className="menu_header">
        <div className="menu_header_text">
          <p>Our Fresh & Healthy Fruits</p>
        </div>
      </div>
      <div className="menu_categories">
        {["Fruits", "Chicken", "Icecream", "Fish", "Curry", "All"].map(
          (category, index) => (
            <div
              className={`menu_categories_item ${
                activeFilter === category ? "menu_categories_item_active" : ""
              }`}
              key={index}
              onClick={() => handleCategoryClicked(category)}
            >
              <div className="menu_categories_item_img">
                <MdFastfood />
              </div>
              {category}
            </div>
          )
        )}
      </div>
      <Menucontainer data={items} animation={animateCard} />
    </section>
  );
};

export default Menu;
