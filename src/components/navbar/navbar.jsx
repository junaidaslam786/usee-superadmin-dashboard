
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Row, Col, Button, InputGroup, FormControl, Image, Dropdown } from "react-bootstrap";
import styles from "./navbar.module.css";
import { useAppSelector } from "../../redux/store";

const Navbar = () => {
  const userState = useAppSelector((state) => state.userState);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Container fluid className={styles.toggleSide}>
      <Row className="align-items-center justify-content-between">
        {/* <Col xs="auto" className="d-flex align-items-center">
          <h4 className={styles.dashlogo}>Dashboard</h4>
        </Col> */}
        <Col xs="auto">
          <InputGroup>
            <InputGroup.Text><i className="material-symbols-outlined">search</i></InputGroup.Text>
            <FormControl placeholder="Search here..." />
          </InputGroup>
        </Col>
        <Col xs="auto" className="d-flex align-items-center justify-content-center pt-2">
          <Button variant="outline-success" className={styles.notification}>
            <span className="material-symbols-outlined">notifications</span>
          </Button>
          <Image
            src={`${process.env.REACT_APP_SERVER_ENDPOINT}/${userState?.user?.imageUrl?.imageUrl ? userState?.user?.imageUrl?.imageUrl : userState?.user?.profileImage}?${Date.now()}`}
            roundedCircle
            width="40"
            className="mx-2"
          />
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="success" id="dropdown-basic">
              {userState?.user?.firstName || "Guest"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="align-items-center bg-dark text-white py-2 mt-3">
        <Col>
          {pathnames.length === 0 ? (
            <Link to="/dashboard" className={styles.linkColor}>
              Home
            </Link>
          ) : (
            <>
              <Link to="/dashboard" className={styles.linkColor}>
                Home
              </Link>{" "}
              /{" "}
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                return index === pathnames.length - 1 ? (
                  name.charAt(0).toUpperCase() + name.slice(1)
                ) : (
                  <>
                    <Link to={routeTo}>
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Link>{" "}
                    /{" "}
                  </>
                );
              })}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
