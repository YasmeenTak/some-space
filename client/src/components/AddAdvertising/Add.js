import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Catagory = [
  { key: '1', value: 'Fashion' },
  { key: '2', value: 'Furniture' },
  { key: '3', value: 'Machines' },
];
const Quality = [
  { key: '1', value: 'Exellent' },
  { key: '2', value: 'very good' },
  { key: '3', value: 'good' },
];
function Add() {
  const [TitleValue, setTitleValue] = useState('');
  const [DescriptionValue, setDescriptionValue] = useState('');
  const [PriceValue, setPriceValue] = useState(0);
  const [CatagoryValue, setCatagoryValue] = useState('1');
  const [QualityValue, setQualityValue] = useState('1');
  const [LocationValue, setLocationValue] = useState('');
  //const [ImgUrl, setImgUrl] = useState("");
  const [image, setImage] = useState('');
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

  const onQualitySelectChange = (event) => {
    setQualityValue(event.currentTarget.value);
  };

  const onLocationChange = (event) => {
    setLocationValue(event.currentTarget.value);
  };

  function uploadImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'some-space');
    setLoading(true);
    axios
      .post('https://api.cloudinary.com/v1_1/dvsayvxsy/image/upload', data)
      .then((response) => {
        console.log(response);
        const imgUrl = response.data['secure_url'];
        setImage(imgUrl);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !TitleValue ||
      !DescriptionValue ||
      !PriceValue ||
      !CatagoryValue ||
      !QualityValue
    ) {
      return alert('fill all the fields first!');
    }

    const variables = {
      title: TitleValue,
      description: DescriptionValue,
      price: PriceValue,
      images: image,
      category: CatagoryValue,
      quality: QualityValue,
      location: LocationValue,
    };

    // axios
    //   .post("/addProduct", variables)
    //   console
    //     .log(variables)
    //     .then((response) => {
    //       alert("Product Successfully Uploaded");
    //       console.log("Product Successfully Uploaded");

    //       //if CatagoryValue == 1 go to machine
    //       //if CatagoryValue == 2
    //     })
    //     .catch((err) => {
    //       alert("Failed to upload Product");
    //       console.log("Failed to upload Product");
    //       console.log(err);
    //     });
    axios.post('/addProduct', variables).then((response) => {
      if (response.data) {
        alert('Product Successfully Uploaded');
        console.log('Product Successfully Uploaded');
        // props.history.push("/");
      } else {
        alert('Failed to upload Product');
        console.log('Failed to upload Product');
      }
    });
  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div className='App'>
        <h2> Upload Product</h2>
        {/* <p>Test: {image}</p> */}
        <input
          type='file'
          name='file'
          placeholder='Upload an image'
          onChange={uploadImage}
        />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img alt='MyImage' src={image} style={{ width: '300px' }} />
        )}
      </div>
      <div
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
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
        <input onChange={onPriceChange} value={PriceValue} type='number' />
        <br />
        <br />
        <label>Location</label>
        <input onChange={onLocationChange} value={LocationValue} />
        <br />
        <br />

        <select
          onChange={onQualitySelectChange}
          value={QualityValue}
          style={{ display: 'block' }}
        >
          {Quality.map((item) => (
            <option key={item.key} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
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
