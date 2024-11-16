import React from "react";
import Zoom from "react-reveal/Zoom";

import { Card, Col, Row } from "react-bootstrap";
const Items = ({ elements }) => {
  return (
    <Row>
      <Zoom>
        {elements.length > 0 ? (
          elements.map((i) => {
            return (
              <Col sm="12" className="my-3" key={i.id}>
                <Card className="flex-row card-box" style={{ background: "F8F8F8" }}>
                  <Card.Img variant="top" className="img-item" src={i.img} />
                  <Card.Body>
                    <Card.Title className="fw-bold d-flex justify-content-between">
                      <div className="item-title fw-bold">{i.title} </div>
                      <div className="item-price fw-bold">{i.price}</div>
                    </Card.Title>
                    <Card.Text className="my-3">{i.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h4 style={{textAlign:"center" , marginTop:"40px"}}>لا يوجد اصناف </h4>
        )}
      </Zoom>
    </Row>
  );
};

export default Items;
