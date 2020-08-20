import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "../App";
import Add from "../components/AddAdvertising/Add";
import Catagories from "../components/catagories/catagories";
import Fashion from "../components/Fashion/Fashion";
import Footer from "../components/footer/Footer";
import Furniture from "../components/Furniture/Furniture";
import Login from "../components/Login/Login";
import Logout from "../components/Logout/Logout";
import Machine from "../components/Machine/Machine";
import Navbar from "../components/navBar/Navbar";
import SignedInLinks from "../components/navBar/SignedInLinks";
import SignedOutLinks from "../components/navBar/SignedOutLinks";
import CardInput from "../components/Payment/CardInput";
import Checkout from "../components/Payment/Checkout";
import HomePage from "../components/Payment/HomePage";
import Payment from "../components/Payment/Payment";
import Register from "../components/Register/Register";
import ShopNow from "../components/ShopNowButton/ShopNowButton";
import Show from "../components/ShowAdvertising/ShowMyAds";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//test for basic components

//for App component
it("renders without crashing", () => {
  shallow(<App />);
});

//for AddAdvertising component
it("renders without crashing", () => {
  shallow(<Add />);
});

//for  Catagories component
it("renders without crashing", () => {
  shallow(<Catagories />);
});

//for  Fashion component
it("renders without crashing", () => {
  shallow(<Fashion />);
});

//for  Footer component
it("renders without crashing", () => {
  shallow(<Footer />);
});

//for  Furniture component
it("renders without crashing", () => {
  shallow(<Furniture />);
});

//for  Login component
it("renders without crashing", () => {
  shallow(<Login />);
});

//for  Logout component
it("renders without crashing", () => {
  shallow(<Logout />);
});

//for  Machine component
it("renders without crashing", () => {
  shallow(<Machine />);
});

//for  Navbar component
it("renders without crashing", () => {
  shallow(<Navbar />);
});

//for  SignedInLinks component
it("renders without crashing", () => {
  shallow(<SignedInLinks />);
});

//for  SignedOutLinks component
it("renders without crashing", () => {
  shallow(<SignedOutLinks />);
});

//for  CardInput component
it("renders without crashing", () => {
  shallow(<CardInput />);
});

// //for  Checkout component
// it("renders without crashing", () => {
//   shallow(<Checkout />);
// });

// //for  HomePage component
// it("renders without crashing", () => {
//   shallow(<HomePage />);
// });

//for  Payment component
it("renders without crashing", () => {
  shallow(<Payment />);
});

//for  Register component
it("renders without crashing", () => {
  shallow(<Register />);
});

//for  ShopNow component
it("renders without crashing", () => {
  shallow(<ShopNow />);
});

// //for  Show component
// it("renders without crashing", () => {
//   shallow(<Show />);
// });

//test children-components
it("renders readlater", () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper.contains(<SignedInLinks />));
});

it("renders readlater", () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper.contains(<SignedOutLinks />));
});

//test children-components
it("renders readlater", () => {
  const wrapper = shallow(<App />);
  expect(
    wrapper.contains(
      <Navbar />,
      <Login />,
      <Register />,
      <Show />,
      <Logout />,
      <Add />,
      // <Cart />,
      <Fashion />,
      <Furniture />,
      <Machine />,
      <Catagories />,
      <Payment />
    )
  );
});

// test("renders the component with params", () => {
//   // you'll have to declare the path prop in the component, exactly like the route
//   renderWithRouterWrapper(<Furniture path="/Furniture"/>, {
//     // and pass the parameter value on the route config
//    Route:"/Furniture",
//   });
// });

// describe("the file Register is running", () => {
//   it("The register file is runnig", () => {
//     const wrapper = shallow(<Register />);
//     // const button1 = wrapper.find("button");
//     button1.simulate("click");
//     const label1 = wrapper.find("label.email");
//     // const input2 = wrapper.find("input.lastname");
//     // const input3 = wrapper.find("input.password");
//     // const input4 = wrapper.find("input.email");
//     expect(label1).toEqual({});
//     // expect(input2).toEqual({});
//     // expect(input3).toEqual({});
//     // expect(input4).toEqual({});
//   });
// });
//Ahmad
// it("renders welcome message", () => {
//   const wrapper = shallow(<Catagories />);
//   const welcome = <h> YOU CAN ALWAYS FIND SOMRTHING YOU WANT</h>;
//   // expect(wrapper.contains(welcome)).toBe(true);
//   expect(wrapper.contains(welcome)).toEqual();
// });
const wrapper = shallow(<Register />);
expect(wrapper.contains(<div className="SignUp-page__div" />)).toBe(false);

// const label = shallow(<Register />);
// expect(label.contains(<label htmlFor="email" className="SignUp-page__label "/>)).toBe(false);



