import React, { useState } from "react";
import { MdFastfood } from "react-icons/md";
import "./CreateItem.scss";
import { categories } from "./categories";
import Loader from "../../components/Loader";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [imageAsset, setImageAsset] = useState(null);
  return (
    <div className="create_item">
      <div className="create_item_container">
        <div className="create_item_container_input">
          <MdFastfood style={{ color: "grey" }} className="input_icon" />
          <input
            required
            type={"text"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add title"
            className="create_item_input"
          />
        </div>
        <div className="create_item_container_select">
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value={"Other"}>Select Category</option>
            {categories.map((category, index) => (
              <option value={category.urlParamName} key={index}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="create_item_container_add_image">
          {loading ? <Loader /> : <>{!imageAsset}</>}
        </div>
      </div>
    </div>
  );
};

export default CreateItem;