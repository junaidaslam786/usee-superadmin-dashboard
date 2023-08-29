import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar/navbar";
import DashSide from "../components/dashboard/dashside/dashside";
import useInitializeUserFromLocalStorage from "../hooks/useInitializeUserFromLocalStorage";

const Layout = ({ children }) => {
  useInitializeUserFromLocalStorage();

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <Container fluid className="d-flex vh-100 vw-100 overflow-hidden">
      <Col
        lg={isMenuOpen ? 3 : 1}  // Adjusted the width for larger screens
        md={isMenuOpen ? 4 : 1}
        sm={isMenuOpen ? 5 : 1}
        className="p-0 vh-100 overflow-hidden"
      >
        <DashSide isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </Col>
      <Col
        lg={isMenuOpen ? 9 : 11}  // Adjusted the width for larger screens
        md={isMenuOpen ? 8 : 11}
        sm={isMenuOpen ? 7 : 11}
        className="d-flex flex-column p-0 vh-100 overflow-hidden"
      >
        <Navbar />
        <main className="overflow-auto">{children}</main>
      </Col>
    </Container>
  );
};

export default Layout;
