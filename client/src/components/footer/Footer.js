import React from "react";
import "./style.css";
import linked from "./in.png";
import face from "./face.png";
import insta from "./insta.png";
import twitter from "./twitter.png";
import axios from "axios";
class Footer extends React.Component {
  state = {
    senderName: "",
    senderEmail: "",
    senderMessage: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { senderName, senderEmail, senderMessage } = this.state;
    console.log(senderName, senderEmail, senderMessage);
    axios
      .post("/Contact", {
        senderName: senderName,
        senderEmail: senderEmail,
        senderMessage: senderMessage,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <div className="main">
        <div className="contact">
          <div className="cotainer">
            <div className="info">
              <h2>Some Space</h2>
              <p>
                We are buying and selling our used products because of our
                increasing demand to be friendly with the environment, our needs
                to renew our things without throwing the old things, our needs
                to buy used things that are cheap and have good quality.
              </p>
              <br />
              <br />

              <p>
                <strong>Email: </strong>SomeSpace@gmail.com
                <br />
                <strong>Phone: </strong>+97066690
                <br />
                <br />
                <ul>
                  <li>
                    <img src={face} alt="face icon" />
                  </li>
                  <li>
                    <img src={insta} alt="instgram icon" />
                  </li>
                  <li>
                    <img src={twitter} alt="twitter icon" />
                  </li>
                  <li>
                    <img src={linked} alt="linkedin icon" />
                  </li>
                </ul>
              </p>
            </div>

            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <h3>Contact us</h3>
                <p>
                  Please contact us any time you would have any issue or
                  question.
                </p>
                <label>Name * </label>
                <input
                  name="senderName"
                  type="text"
                  onChange={this.handleChange}
                ></input>
                <label>Email Adress </label>
                <input
                  name="senderEmail"
                  type="email"
                  onChange={this.handleChange}
                ></input>
                <label>Message </label>
                <textarea
                  name="senderMessage"
                  onChange={this.handleChange}
                ></textarea>
                <br />
                <br />

                <input id="submit" type="submit" value="Send The Message" />
              </form>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <span>Copyright &copy; 2020 SomeSpace</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
