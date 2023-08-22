import React, { useRef } from "react";
import styles from "./profilePage.module.css";
import AccountDetails from "../../../components/Profile/account-details/AccountDetails";
import TimeZone from "../../../components/Profile/timezone/TimeZone";
import ChangePassword from "../../../components/Profile/change-password/ChangePassword";
import CallBackgroundImage from "../../../components/Profile/call-background-images/CallBackgroundImage";
import EmbeddedCode from "../../../components/Profile/embedded-code/EmbeddedCode";
import Layout from "../../../layouts/Layout";

const ProfilePage = () => {
  const refs = {
    accountDetails: useRef(null),
    timeZone: useRef(null),
    changePassword: useRef(null),
    embeddedCode: useRef(null),
  };

  const sections = [
    {
      id: "accountDetails",
      label: "Account Details",
      component: <AccountDetails />,
    },
    { id: "timeZone", label: "Timezone", component: <TimeZone /> },
    {
      id: "changePassword",
      label: "Change Password",
      component: <ChangePassword />,
    },
    { id: "embeddedCode", label: "Embedded code", component: <EmbeddedCode /> },
  ];

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <div className={styles.ProfileInfo}>
        <div className={styles.profileLinks}>
          {sections.map((section) => (
            <div key={section.id} onClick={() => scrollToRef(refs[section.id])}>
              <p>{section.label}</p>
            </div>
          ))}
        </div>
        <div className={styles.UserRegistration}>
          {sections.map((section) => (
            <div key={section.id} ref={refs[section.id]}>
              {section.component}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
