// import React, { useState, Fragment } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import logo from "../../../assets/logo.png";
// import navigationConfig from "../../../config/navigationConfig";
// import { useDispatch } from "react-redux";
// import { logout } from "../../../redux/features/userSlice";
// import { Link, useNavigate } from "react-router-dom";

// const DashSide = ({ isMenuOpen, setIsMenuOpen }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [expandedMenu, setExpandedMenu] = useState(null);
//   const [hoveredId, setHoveredId] = useState(null);

//   const toggleMenu = () => {
//     setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
//   };

//   const handleMenuClick = (menuId) => {
//     if (expandedMenu === menuId) {
//       setExpandedMenu(null); // collapse if it's already expanded
//     } else {
//       setExpandedMenu(menuId); // expand the clicked menu
//     }
//   };

//   return (
//     <Container fluid className="d-flex flex-column vh-100 vw-25">
//       <Button
//         variant="success"
//         onClick={toggleMenu}
//         className="rounded-circle d-lg-none position-absolute top-0 start-0 m-3"
//       >
//         ☰
//       </Button>
//       {isMenuOpen && (
//         <Row
//           className={`flex-column ${
//             isMenuOpen ? "" : "d-none"
//           } bg-white border-end border-dark`}
//           style={{ width: "18vw" }}
//         >
//           <Col className="d-flex justify-content-center my-5">
//             <img
//               src={logo}
//               alt="Logo"
//               style={{ height: "3vmax", width: "3vmax" }}
//             />
//           </Col>
//           <Col>
//             {navigationConfig.map((item) => (
//               <Fragment key={item.id}>
//                 <Row
//                   className="d-flex align-items-center fw-bold py-3 mx-2 rounded cursor-pointer text-secondary pages"
//                   style={{
//                     width: "18vw",
//                     ...(hoveredId === item.id
//                       ? {
//                           boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
//                           backgroundColor: "#00C800",
//                           color: "white",
//                         }
//                       : {}),
//                   }}
//                   onMouseEnter={() => setHoveredId(item.id)}
//                   onMouseLeave={() => setHoveredId(null)}
//                   onClick={() => handleMenuClick(item.id)}
//                 >
//                   <span className="me-2">{item.icon}</span>
//                   <Link
//                     className="text-decoration-none hover:text-white text-secondary"
//                     to={item.navLink}
//                   >
//                     {isMenuOpen ? item.title : ""}
//                   </Link>
//                 </Row>
//                 {expandedMenu === item.id &&
//                   item.children &&
//                   item.children.map((child) => (
//                     <Row
//                       className="d-flex align-items-center fw-bold py-2 px-5 mx-2 rounded cursor-pointer text-secondary pages"
//                       key={child.id}
//                     >
//                       <span className="me-2">{child.icon}</span>
//                       <Link
//                         className="text-decoration-none hover:text-white text-secondary"
//                         to={child.navLink}
//                       >
//                         {isMenuOpen ? child.title : ""}
//                       </Link>
//                     </Row>
//                   ))}
//               </Fragment>
//             ))}
//           </Col>
//           <Col className="mt-auto d-flex align-items-center sign">
//             <span className="text-white me-3">logout</span>
//             <Button
//               variant="dark"
//               onClick={() => {
//                 dispatch(logout());
//                 navigate("/login");
//               }}
//             >
//               Sign Out
//             </Button>
//           </Col>
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default DashSide;
// import React, { useState } from "react";
// import { Button, Container, Row, Col, ListGroup, Collapse } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import logo from "../../../assets/logo.png";
// import navigationConfig from "../../../config/navigationConfig";
// import { logout } from "../../../redux/features/userSlice";

// const DashSide = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [expandedMenu, setExpandedMenu] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuClick = (menuId) => {
//     if (expandedMenu === menuId) {
//       setExpandedMenu(null);
//     } else {
//       setExpandedMenu(menuId);
//     }
//   };

//   return (
//     <Container fluid>
//       <Row>
//         <Col md={isMenuOpen ? 2 : 1} className="position-fixed bg-light" style={{ transition: 'width 0.5s' }}>
//           <img src={logo} alt="Logo" style={{ height: "3vmax", width: "3vmax" }} />
//           <Button variant="primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             Toggle Sidebar
//           </Button>
//           <ListGroup>
//             {navigationConfig.map((item) => {
//               return (
//                 <div key={item.id}>
//                   <ListGroup.Item action onClick={() => handleMenuClick(item.id)}>
//                     {item.icon} {isMenuOpen && item.title}
//                   </ListGroup.Item>
//                   <Collapse in={expandedMenu === item.id}>
//                     <div>
//                       {item.children?.map((child) => (
//                         <ListGroup.Item key={child.id} action href={child.navLink}>
//                           {child.icon} {isMenuOpen && child.title}
//                         </ListGroup.Item>
//                       ))}
//                     </div>
//                   </Collapse>
//                 </div>
//               );
//             })}
//           </ListGroup>
//           <Button
//             variant="danger"
//             onClick={() => {
//               dispatch(logout());
//               navigate("/login");
//             }}
//           >
//             Sign Out
//           </Button>
//         </Col>
//         <Col md={{ span: isMenuOpen ? 8 : 11, offset: isMenuOpen ? 4 : 1 }}>
//           {/* Rest of the page content goes here */}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default DashSide;

// import React, { useState } from "react";
// import {
//   Button,
//   Container,
//   Row,
//   Col,
//   ListGroup,
//   Collapse,
// } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import logo from "../../../assets/logo.png";
// import navigationConfig from "../../../config/navigationConfig";
// import { logout } from "../../../redux/features/userSlice";

// const DashSide = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [expandedMenu, setExpandedMenu] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuClick = (menuId) => {
//     if (expandedMenu === menuId) {
//       setExpandedMenu(null);
//     } else {
//       setExpandedMenu(menuId);
//     }
//   };

//   return (
//     <Container fluid>
//       <Row>
//         <Col
//           md={isMenuOpen ? 2 : 1}
//           className="position-fixed bg-light py-2"
//           style={{ transition: "width 0.5s", zIndex: 1000 }}
//         >
//           <Button
//             variant="light"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="mb-2"
//           >
//             ☰
//           </Button>
//           <img
//             src={logo}
//             alt="Logo"
//             className="d-block mx-auto mb-4"
//             style={{ height: "3vmax", width: "3vmax" }}
//           />
//           <ListGroup>
//             {navigationConfig.map((item) => {
//               return (
//                 <div key={item.id}>
//                   <ListGroup.Item
//                     action
//                     onClick={() => handleMenuClick(item.id)}
//                   >
//                     {item.icon} {isMenuOpen && item.title}
//                   </ListGroup.Item>
//                   <Collapse in={expandedMenu === item.id}>
//                     <div>
//                       {item.children?.map((child) => (
//                         <ListGroup.Item
//                           key={child.id}
//                           action
//                           href={child.navLink}
//                         >
//                           {child.icon} {isMenuOpen && child.title}
//                         </ListGroup.Item>
//                       ))}
//                     </div>
//                   </Collapse>
//                 </div>
//               );
//             })}
//           </ListGroup>
//           <Button
//             variant="danger"
//             onClick={() => {
//               dispatch(logout());
//               navigate("/login");
//             }}
//             className="mt-3"
//           >
//             Sign Out
//           </Button>
//         </Col>
//         <Col
//           md={{ span: isMenuOpen ? 8 : 11, offset: isMenuOpen ? 4 : 1 }}
//           className="mt-4"
//         >
//           {/* Rest of the page content goes here */}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default DashSide;
// import React, { useState } from "react";
// import {
//   Button,
//   Container,
//   Row,
//   Col,
//   ListGroup,
//   Collapse,
// } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import logo from "../../../assets/logo.png";
// import navigationConfig from "../../../config/navigationConfig";
// import { logout } from "../../../redux/features/userSlice";

// const DashSide = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [expandedMenu, setExpandedMenu] = useState(null);
//   const [isContentVisible, setContentVisible] = useState(false);

//   const handleMenuClick = (menuId) => {
//     if (expandedMenu === menuId) {
//       setExpandedMenu(null);
//     } else {
//       setExpandedMenu(menuId);
//     }
//   };

//   return (
//     <Container fluid>
//       <Row>
//         <Col
//           md={3}
//           className="position-fixed bg-light py-2"
//           style={{ transition: "width 0.5s", zIndex: 1000 }}
//         >
//           <Button
//             variant="light"
//             onClick={() => setContentVisible(!isContentVisible)}
//             className="mb-2"
//           >
//             ☰
//           </Button>
//           <Collapse in={isContentVisible || window.innerWidth >= 768}>
//             <div>
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="d-block mx-auto mb-4"
//                 style={{ height: "3vmax", width: "3vmax" }}
//               />
//               <ListGroup>
//                 {navigationConfig.map((item) => {
//                   return (
//                     <div key={item.id}>
//                       <ListGroup.Item
//                         action
//                         onClick={() => handleMenuClick(item.id)}
//                       >
//                         {item.icon} {item.title}
//                       </ListGroup.Item>
//                       <Collapse in={expandedMenu === item.id}>
//                         <div>
//                           {item.children?.map((child) => (
//                             <ListGroup.Item
//                               key={child.id}
//                               action
//                               href={child.navLink}
//                             >
//                               {child.icon} {child.title}
//                             </ListGroup.Item>
//                           ))}
//                         </div>
//                       </Collapse>
//                     </div>
//                   );
//                 })}
//               </ListGroup>
//               <Button
//                 variant="danger"
//                 onClick={() => {
//                   dispatch(logout());
//                   navigate("/login");
//                 }}
//                 className="mt-3"
//               >
//                 Sign Out
//               </Button>
//             </div>
//           </Collapse>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default DashSide;
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Collapse,
} from "react-bootstrap";
import logo from "../../../assets/logo.png";
import navigationConfig from "../../../config/navigationConfig";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/userSlice";
import { Link, useNavigate } from "react-router-dom";

const DashSide = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [expandedMenu, setExpandedMenu] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleMenuClick = (menuId) => {
    if (expandedMenu === menuId) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menuId);
    }
  };

  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Button
        variant="success"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="rounded-circle d-lg-none position-absolute top-0 start-0 m-3"
      >
        {isCollapsed ? ">" : "<"}
      </Button>

      <Row
        className={`flex-column ${
          isCollapsed ? "d-none" : ""
        } bg-white border-end border-dark`}
        style={{ width: "18vw" }}
      >
        <Col className="d-flex justify-content-center my-5">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "3vmax", width: "3vmax" }}
          />
        </Col>
        <Col>
          {navigationConfig.map((item) => (
            <ListGroup.Item
              key={item.id}
              action
              onClick={() => handleMenuClick(item.id)}
              className="d-flex align-items-center fw-bold py-3 mx-2 rounded cursor-pointer"
            >
              {item.icon}
              {item.title}
            </ListGroup.Item>
          ))}
        </Col>
        <Col className="mt-auto mb-5">
          <Button
            variant="danger"
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
          >
            Sign Out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DashSide;
