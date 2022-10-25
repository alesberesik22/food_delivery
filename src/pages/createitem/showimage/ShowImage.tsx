import React from "react";
import "./ShowImage.scss";
import { MdDelete } from "react-icons/md";
import { storage } from "../../../config/firebase";
import { ref, deleteObject } from "firebase/storage";

const ShowImage = (props: any) => {
  const deleteimage = () => {
    props.setLoading(true);
    const deleteImage = ref(storage, props.image);
    deleteObject(deleteImage).then(() => {
      props.setImage(null);
      props.setLoading(false);
    });
  };
  return (
    <div className="show_image">
      <img src={props.image} alt="uploaded_image" />
      <div className="remove_image" onClick={deleteimage}>
        <MdDelete />
      </div>
    </div>
  );
};

export default ShowImage;
