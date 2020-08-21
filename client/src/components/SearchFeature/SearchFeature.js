import React from 'react';
// import axios from 'axios';
// import Furniture from '../Furniture/Furniture';

// const { Search } = Input;

class SearchFeature extends React.Component {
  state = {
    products: [],
    productSearchTitle: [],
  };
  handleSubmit(e) {
    e.preventDefault();
    this.props.getProducts(this.state.value);
    // axios
    //   .get('/findAllProducts/' + this.state.value)
    //   .then((result) => {
    //     const finalResult = result.data;
    //     this.setState({ productSearchTitle: finalResult });
    //     console.log(finalResult, 'finallllll');
    //   })
    //   .catch((err) => {
    //     console.log(err, 'err in reserch');
    //   });
  }
  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    // this.props.getProducts(this.state.value);
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> Title: </label>
          <input
            type='text'
            name='Ahmed'
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
          />
          <button>search</button>
        </form>
      </div>
    );
  }
}

export default SearchFeature;
