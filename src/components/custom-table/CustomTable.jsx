import React, { useState } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import PaginationControls from "./PaginationControls";
import { Container, Row, Col, Table, Form } from "react-bootstrap";

const CustomTable = ({
  data,
  rowsPerPageOptions = [5, 10, 15, 20],
  defaultRowsPerPage = 10,
  columnsToDisplay = [],
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const lastRowIndex = currentPage * rowsPerPage;
  const firstRowIndex = lastRowIndex - rowsPerPage;
  const currentUsers = data ? data.slice(firstRowIndex, lastRowIndex) : [];
  const totalPages = data ? Math.ceil(data.length / rowsPerPage) : 0;

  return (
    <Container fluid>
      <Row className="mb-3">
        <Col sm="6">
          Show
          <Form.Select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            style={{
              display: "inline-block",
              width: "auto",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
          entries
        </Col>
      </Row>
      <Row>
        <Col>
          <Table responsive="sm" striped bordered hover>
            <TableHeader
              headers={
                columnsToDisplay.length
                  ? columnsToDisplay
                  : Object.keys(data[0])
              }
            />
            <TableBody
              rows={currentUsers}
              columnsToDisplay={columnsToDisplay}
            />
          </Table>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col sm="6">
          Showing {firstRowIndex + 1} to {Math.min(lastRowIndex, data.length)}{" "}
          of {data.length} entries
        </Col>
        <Col sm="6" className="text-right">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            onPrevious={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          />
        </Col>
      </Row>
    </Container>
  );
};

CustomTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  defaultRowsPerPage: PropTypes.number,
  columnsToDisplay: PropTypes.arrayOf(PropTypes.string),
};

export default CustomTable;
