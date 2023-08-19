import React, { useState, Fragment } from "react";
import styles from "./dashside.module.css";
import logo from "../../../assets/logo.png";
import navigationConfig from "../../../config/navigationConfig"; // Import the navigationConfig
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/userSlice";
import { useNavigate } from "react-router-dom";

const DashSide = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleMenuClick = (menuId) => {
    if (expandedMenu === menuId) {
      setExpandedMenu(null); // collapse if it's already expanded
    } else {
      setExpandedMenu(menuId); // expand the clicked menu
    }
  };

// const burgerMenu = document.getElementById('burger-menu');
// const menu = document.getElementById('menu');

// function showSideBar() {
//   if (menu.styles.display === 'none') {
//     menu.styles.display = 'block';
//   } else {
//     menu.styles.display = 'none';
//   }
// };

// showSideBar(burgerMenu);

  return (
    <div className={styles.burgerMenu}>
      <div>
        <button className={styles.burger} id="burger-menu" >☰</button>
      </div>
      <div className={styles.menu} id="menu">
        <div className={styles.image}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.content}>
          <div className={styles.icons}>
            {navigationConfig.map((item) => (
              <Fragment key={item.id}>
                <div
                  className={styles.pages}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.icon}
                  <a href={item.navLink}>{item.title}</a>
                </div>
                {expandedMenu === item.id &&
                  item.children &&
                  item.children.map((child) => (
                    <div
                      className={`${styles.pages} ${styles.submenu}`}
                      key={child.id}
                    >
                      {child.icon}
                      {/* <a href={child.navLink}>{child.title}</a> */}
                      <a href="#">{child.title}</a>
                    </div>
                  ))}
              </Fragment>
            ))}
          </div>
          <div className={styles.sign}>
            <span className="material-symbols-outlined">logout</span>
            <button
              type="button"
              className={styles.signout}
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSide;
