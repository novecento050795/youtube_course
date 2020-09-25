import React from 'react'
import { Card, Container, Button, CardDeck } from 'react-bootstrap'

export default function Cards() {

  return (
    <Container>
      <h2 className="text-center m-4">Our team</h2>
      <CardDeck>
       <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>Text1</Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
       <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>Text1</Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
       <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>Text1</Card.Text>
            <Button variant="primary">Read more</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  )
}