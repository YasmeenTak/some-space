import React from 'react';

function UserCard(props) {
  const renderItems = () =>
    props.products &&
    props.products.map((product) => (
      <tr key={product._id}>
        <td>
          <img style={{ width: '70px' }} alt='product' src={product.images} />
        </td>
        <td>{product.category} EA</td>
        <td>$ {product.price} </td>
        <td>
          {' '}
          ola
          <button onClick={() => props.removeItem(product._id)}>
            Remove{' '}
          </button>{' '}
        </td>
      </tr>
    ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Title</th>
            <th>Product Category</th>
            <th>Product Price</th>
            <th>Remove from Cart</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}
export default UserCard;
