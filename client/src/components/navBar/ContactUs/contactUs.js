// import React, { Component } from "react";
// import * as emailjs from "emailjs-com";
// import "./contactUs.css";
// import {
//   Button,
//   FormFeedback,
//   Form,
//   FormGroup,
//   Label,
//   Input,
// } from "reactstrap";
// class ContactUs extends React.Component {
//   state = {
//     name: "",
//     email: "",
//     address: "",
//     message: "",
//   };
//   alertMessage() {
//     alert("Your message has been sent");
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     const { name, email, address, message } = this.state;
//     let templateParams = {
//       from_name: email,
//       to_name: "<YOUR_EMAIL_ID>",
//       address: address,
//       message_html: message,
//     };
//     emailjs.send(
//       'gmail', 'somespace', 'emaail', 'user_4eCzz2DUBd8xaIpszQj0a'
//     );
//     this.resetForm();
//   }
//   resetForm() {
//     this.setState({
//       name: "",
//       email: "",
//       address: "",
//       message: "",
//     });
//   }
//   handleChange = (param, e) => {
//     this.setState({ [param]: e.target.value });
//   };
//   render() {
//     return (
//       <div className="sentemail">
//         <Navbar />
//         {/* <Layout> */}
//         <h1>Contact Us</h1>
//         <div class="border"></div>
//         <Form onSubmit={this.handleSubmit.bind(this)}>
//           <FormGroup controlId="formBasicEmail">
//             {/* <Label className="text-muted">Email address</Label> */}
//             <Input
//               type="email"
//               name="email"
//               value={this.state.email}
//               className="text-primary"
//               onChange={this.handleChange.bind(this, "email")}
//               placeholder="Your email"
//             />
//           </FormGroup>
//           <FormGroup controlId="formBasicName">
//             {/* <Label className="text-muted">Name</Label> */}
//             <Input
//               type="text"
//               name="name"
//               value={this.state.name}
//               className="text-primary"
//               onChange={this.handleChange.bind(this, "name")}
//               placeholder="Your Name"
//             />
//           </FormGroup>
//           <FormGroup controlId="formBasicSubject">
//             {/* <Label className="text-muted">address</Label> */}
//             <Input
//               type="text"
//               name="address"
//               className="text-primary"
//               value={this.state.address}
//               onChange={this.handleChange.bind(this, "address")}
//               placeholder="address"
//               required
//             />
//           </FormGroup>
//           <FormGroup controlId="formBasicMessage">
//             {/* <Label className="text-muted">Message</Label> */}
//             <Input
//               type="textarea"
//               name="message"
//               className="text-primary"
//               value={this.state.message}
//               onChange={this.handleChange.bind(this, "message")}
//               placeholder=" Please leave your message here ..."
//             />
//           </FormGroup>
//           <Button variant="primary" type="submit" onClick={this.alertMessage}>
//             Send message
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }
// export default ContactUs;
