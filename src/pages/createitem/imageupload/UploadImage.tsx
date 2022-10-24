import React from "react";
import { MdCloudUpload } from "react-icons/md";
import "./UploadImage.scss";

const UploadImage = (props: any) => {
  return (
    <>
      <label className="upload_image">
        <MdCloudUpload className="upload_svg" />
        <p className="upload_text">Click here to upload image</p>
        <input type={"file"} className="upload_input" accept="image/*" />
      </label>
    </>
  );
};

export default UploadImage;
