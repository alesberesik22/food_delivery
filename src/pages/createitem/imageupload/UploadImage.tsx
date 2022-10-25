import React from "react";
import { MdCloudUpload } from "react-icons/md";
import "./UploadImage.scss";

import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../../config/firebase";

const UploadImage = (props: any) => {
  const uploadimage = (e: any) => {
    props.setLoading(true);
    const imagefile = e.target.files[0];
    const storageref = ref(storage, `Images/${Date.now()} - ${imagefile.name}`);
    const uploadImage = uploadBytesResumable(storageref, imagefile);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
          props.setImage(downloadURL);
          props.setLoading(false);
        });
      }
    );
  };
  return (
    <>
      <label className="upload_image">
        <MdCloudUpload className="upload_svg" />
        <p className="upload_text">Click here to upload image</p>
        <input
          type={"file"}
          className="upload_input"
          accept="image/*"
          onChange={uploadimage}
        />
      </label>
    </>
  );
};

export default UploadImage;
