import React, { useState } from "react";
import placeholderimg from "../../../assets/images/placeholder.png";
import { useTranslation } from "react-i18next";

const ImageUpload = ({ label }) => {
  const [preview, setPreview] = useState(placeholderimg);

  const handleImageChange = (event) => {
    const reader = new FileReader();
    reader.onload = function () {
      setPreview(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  const {t} = useTranslation();

  return (
    <>
      <div className="image-upload-label" style={{ marginBottom: "10px" }}>
        {label}
      </div>
      <div
        className="image-upload-container"
        style={{
          border: "1px solid #A6652C",
          padding: "15px",
          borderRadius: "10px",
          margin: "0 10px 10px 10px",
          height: "auto",
          width: "250px",
          textAlign: "center",
        }}
      >
        <div className="image-preview-container">
          <img
            id={`image-preview-${label}`}
            src={preview}
            alt={label}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />
          <div className="image-upload-overlay">
            <label
              htmlFor={`image-upload-input-${label}`}
              className="change-button"
              style={{
                backgroundColor: "#A6652C",
                color: "white",
                padding: "8px",
                borderRadius: "5px",
                cursor: "pointer",
                display: "block",
                margin: "10px auto 0",
              }}
            >
              {t("upload")}
            </label>
            <input
              id={`image-upload-input-${label}`}
              type="file"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
