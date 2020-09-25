import React from 'react'
import { Container, Nav, Row, Tab, Col } from 'react-bootstrap'
export default class About extends React.Component {

  render() {

    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src="https://buysite.com.ua/wp-content/uploads/2017/11/1-min.png" />
                  <p></p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://thesuncityinsider.com/wp-content/uploads/2017/05/Team1.jpg" />
                  <p></p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://pbs.twimg.com/media/D6za1SmVsAEVMMA.jpg" />
                  <p></p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/433413/images/5311618/banner.jpg" />
                  <p></p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://coderseye.com/wp-content/uploads/What-are-JavaScript-Libraries.jpg" />
                  <p></p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}