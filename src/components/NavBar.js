import React, { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

const NavBar = (prop) => {
  const [searchValue, setSearchValue] = useState("");

  // on click btn search
  const OnSearch = (e) => {
    e.preventDefault();
    prop.fnSerach(searchValue);
  };

  return (
    <Row style={{ margin: "0" }}>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color fw-bold">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="ابحث.."
                className="mx-2"
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyUp={() => prop.fnOnWrite(searchValue)}
                value={searchValue}
              />
              <button className="btn-search" onClick={OnSearch}>
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
