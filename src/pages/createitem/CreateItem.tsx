import React, { useState } from "react";
import { MdFastfood, MdFoodBank } from "react-icons/md";
import "./CreateItem.scss";
import { categories } from "./categories";
import Loader from "../../components/Loader";
import { UserValue } from "../../context/StateProvider";
import UploadImage from "./imageupload/UploadImage";
import ShowImage from "./showimage/ShowImage";
import Message from "../../components/Message";
import { UserAuth } from "../../Authcontext/Authcontext";
import { actionType } from "../../context/Reducer";

const CreateItem = () => {
  const [{ foodItems }, dispatch] = UserValue();
  const { saveItem, getAllItems } = UserAuth();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const saveDetails = (e: any) => {
    setLoading(true);
    // const imageFile = e.target.files[0];
    console.log(imageAsset);
    try {
      if (!title || !calories || !category || !price || !imageAsset) {
        console.log("fields can not be empty");
        setLoading(false);
      } else {
        console.log("som tu");
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          calories: calories,
          qty: 1,
          price: price,
        };
        saveItem(data).then();
        clearData();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    fetchData();
  };
  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCategory("");
    setCalories("");
    setPrice("");
  };
  const fetchData = async () => {
    await getAllItems().then((data: any) => {
      console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  return (
    <div className="create_item">
      <Message />
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
          {loading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <UploadImage setImage={setImageAsset} setLoading={setLoading} />
              ) : (
                <ShowImage
                  setImage={setImageAsset}
                  image={imageAsset}
                  setLoading={setLoading}
                />
              )}
            </>
          )}
        </div>
        <div className="create_item_container_info">
          <div className="create_item_container_info_calories">
            <MdFastfood className="calories_img" />
            <input
              type={"text"}
              required
              placeholder="Calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </div>
          <div className="create_item_container_info_calories">
            <MdFastfood className="calories_img" />
            <input
              type={"text"}
              required
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="create_item_container_info_button">
          <button onClick={saveDetails}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
