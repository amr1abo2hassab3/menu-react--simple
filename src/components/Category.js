import React from "react";
import { Col, Row } from "react-bootstrap";
import Roll from "react-reveal/Roll";

const Category = ({ propCategory, fnCat }) => {
  return (
    <Row>
      <Col sm="12" className="d-flex justify-content-center text-center">
        <Roll>
          {propCategory.length > 0 ? (
            propCategory.map((i) => (
              <div key={i}>
                <button onClick={() => fnCat(i)} className="btn mx-2">
                  {i}
                </button>
              </div>
            ))
          ) : (
            <h4>لا يوجد تصنيفات </h4>
          )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Category;
