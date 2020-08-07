import React, { useState, Component } from "react";
import FileUpload from "./FileUpload";
import { Icon } from "antd";

const Continents = [
  { key: "1", value: "Fashion" },
  { key: "2", value: "Furniture" },
  { key: "3", value: "Machines" },
];

function Add(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PriceValue, setPriceValue] = useState(0);
  const [ContinentValue, setContinentValue] = useState("1");
  const [Images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };

  const onContinentsSelectChange = (event) => {
    setContinentValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !TitleValue ||
      !DescriptionValue ||
      !PriceValue ||
      !ContinentValue ||
      !Images
    ) {
      return alert("fill all the fields first!");
    }

    const variables = {
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: Images,
      continents: ContinentValue,
    };
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <h2> Upload Product</h2>
      </div>

      <form onSubmit={onSubmit}>
        {/* DropZone */}
        <FileUpload refreshFunction={updateImages} />
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
        <select
          onChange={onContinentsSelectChange}
          value={ContinentValue}
          style={{ display: "block" }}
        >
          {Continents.map((item) => (
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
