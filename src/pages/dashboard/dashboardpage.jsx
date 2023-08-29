import React from "react";
import DashMainPage from "../../components/dashboard/dashmainpage/dashmainpage";
import Layout from "../../layouts/Layout";
import { Container } from "react-bootstrap";

const DashboardPage = () => {
  return (
    <Layout>
      <Container fluid className="d-flex flex-column">
        <DashMainPage />
      </Container>
    </Layout>
  );
};

export default DashboardPage;
