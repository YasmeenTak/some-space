import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
const Catagory = [
  { key: "1", value: "Fashion" },
  { key: "2", value: "Furniture" },
  { key: "3", value: "Machines" },
];
function Add() {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [CatagoryValue, setCatagoryValue] = useState("1");
  const [LocationValue, setLocationValue] = useState("");
  //const [ImgUrl, setImgUrl] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, []);
  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };
  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };
  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };
  const onCatagorySelectChange = (event) => {
    setCatagoryValue(event.currentTarget.value);
  };
  const onLocationChange = (event) => {
    setLocationValue(event.currentTarget.value);
  };
  function uploadImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "some-space");
    setLoading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/dvsayvxsy/image/upload", data)
      .then((response) => {
        console.log(response);
        const imgUrl = response.data["secure_url"];
        setImage(imgUrl);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (!TitleValue || !DescriptionValue || !PriceValue || !CatagoryValue) {
      return alert("fill all the fields first!");
    }
    //add product based on uesr token
    const token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    console.log(decoded, "get token for add product");
    function zerobug() {
      return Math.floor(10000000 + Math.random() * 90000000);
    }
    const variables = {
      productID: zerobug(),
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: image,
      category: CatagoryValue,
      location: LocationValue,
      token: token,
    };
    axios
      .post("/addProduct", variables)
      .then((response) => {
        if (response.data) {
          alert("Product Successfully Uploaded");
          console.log("Product Successfully Uploaded");
          axios.post("/addToUserSell", variables).then(() => {
            console.log(
              "Product Successfully add to user sell array we are in add components"
            );
          });
          // props.history.push("/");
        } else {
          alert("Failed to upload Product");
          console.log("Failed to upload Product");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div className="App">
        <h2> Upload Product</h2>
        {/* <p>Test: {image}</p> */}
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImage}
        />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img alt="MyImage" src={image} style={{ width: "300px" }} />
        )}
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      ></div>
      <form onSubmit={onSubmit}>
        <br />
        <br />
        <label>Title</label>
        <input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label>Description</label>
        <textarea onChange={onDescriptionChange} value={DescriptionValue} />
        <br />
        <br />
        <label>Price($)</label>
        <input onChange={onPriceChange} value={PriceValue} type="number" />
        <br />
        <br />
        <label>Location</label>
        <input onChange={onLocationChange} value={LocationValue} />
        <br />
        <br />
        <select
          onChange={onCatagorySelectChange}
          value={CatagoryValue}
          style={{ display: "block" }}
        >
          {Catagory.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}
export default Add;
