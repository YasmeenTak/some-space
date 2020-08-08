import React, { useState, Component } from 'react';
import FileUpload from './FileUpload';
import { Icon } from 'antd';
import axios from 'axios';
const Catagory = [
  { key: '1', value: 'Fashion' },
  { key: '2', value: 'Furniture' },
  { key: '3', value: 'Machines' },
];
function Add(props) {
  const [TitleValue, setTitleValue] = useState('');
  const [DescriptionValue, setDescriptionValue] = useState('');
  const [PriceValue, setPriceValue] = useState(0);
  const [CatagoryValue, setCatagoryValue] = useState('1');
  const [Images, setImages] = useState('');
  const [LocationValue, setLocationValue] = useState('');
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
  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const onLocationChange = (event) => {
    setLocationValue(event.currentTarget.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (
      !TitleValue ||
      !DescriptionValue ||
      !PriceValue ||
      !CatagoryValue ||
      !Images
    ) {
      return alert('fill all the fields first!');
    }
    const variables = {
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: 'Images',
      category: CatagoryValue,
      location: LocationValue,
    };
    axios
      .post('/product', variables)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios.post("/product", variables).then((response) => {
    //   console.log(variables.secure_url);
    //   if (response.data.success) {
    //     alert("Product Successfully Uploaded");
    //     console.log("Product Successfully Uploaded");
    //     props.history.push("/");
    //   } else {
    //     alert("Failed to upload Product");
    //     console.log("Failed to upload Product");
    //   }
    // });
  };
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <h2> Upload Product</h2>
      </div>
      <form onSubmit={onSubmit}>
        {/* DropZone */}
        <FileUpload />
        {/* <FileUpload refreshFunction={updateImages} /> */}
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
        <input onChange={onPriceChange} value={PriceValue} type='number' />
        <br />
        <br />
        <label>Location</label>
        <input onChange={onLocationChange} value={LocationValue} />
        <br />
        <br />
        <select
          onChange={onCatagorySelectChange}
          value={CatagoryValue}
          style={{ display: 'block' }}
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
