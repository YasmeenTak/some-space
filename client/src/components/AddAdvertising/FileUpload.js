import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";

function FileUpload(props) {
  const [Images, setImages] = useState([]);

  const onDrop = (files) => {
    //The FormData object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.
    let formData = new FormData();
    //When you make a POST request, you have to encode the data that forms the body of the request in some way.
    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
    };
    formData.append("file", files[0]);
    // //save the Image we chose inside the Node Server
    // Axios.post("/api/product/uploadImage", formData, config).then(
    //   (response) => {
    //     if (response.data.success) {
    //       setImages([...Images, response.data.image]);
    //       props.refreshFunction([...Images, response.data.image]);
    //     } else {
    //       alert("Failed to save the Image in Server");
    //     }
    //   }
    // );
  };

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "300px",
              height: "240px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            {/* {console.log("getRootProps", { ...getRootProps() })}
            {console.log("getInputProps", { ...getInputProps() })} */}

            <input {...getInputProps()} />
            <p>add image</p>
            {/* <Icon type="plus" style={{ fontSize: "3rem" }} /> */}
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: "flex",
          //   width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:3000/${image}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
