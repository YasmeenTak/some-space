import React, { useState } from 'react';
const Category = [
  { key: '1', value: 'Fashion' },
  { key: '2', value: 'Furniture' },
  { key: '3', value: 'Machines' },
];
function Add(props) {
  const [TitleValue, setTitleValue] = useState('');
  const [DiscriptionValue, setDiscriptionValue] = useState('');
  const [PriceValue, setPriceValue] = useState(0);
  const [CategoryValue, setCategoryValue] = useState('1');
  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };
  const onDiscriptionChange = (event) => {
    setDiscriptionValue(event.currentTarget.value);
  };
  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };
  const onCategorySelectChange = (event) => {
    setCategoryValue(event.currentTarget.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!TitleValue || !DiscriptionValue || !PriceValue || !CategoryValue) {
      return alert('fill all the fields first!');
    }
    const variables = {
      title: TitleValue,
      discription: DiscriptionValue,
      price: PriceValue,
      category: CategoryValue,
    };
  };
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2> Upload Product</h2>
      </div>
      <form onSubmit={onSubmit}>
        <br />
        <br />
        <label>Title</label>
        <input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label>Discription</label>
        <textarea onChange={onDiscriptionChange} value={DiscriptionValue} />
        <br />
        <br />
        <label>Price($)</label>
        <input onChange={onPriceChange} value={PriceValue} type='number' />
        <br />
        <br />
        <select
          onChange={onCategorySelectChange}
          value={CategoryValue}
          style={{ display: 'block' }}
        >
          {Category.map((item) => (
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
