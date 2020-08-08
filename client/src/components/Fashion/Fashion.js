<<<<<<< HEAD
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
=======
import React, { Component } from 'react';

>>>>>>> f86808a73352ba7b4706506a78350436750f9e12
class Fashion extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://media.missguided.com/s/missguided/Y9206288_set/1/tall-premium-black-bandage-organza-sleeve-mini-dress"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Fashion;