import React, { useState } from "react";
import styles from "./AccountDetails.module.css";
import user from "../../../assets/UserImage.png";
import {
  useProfileUpdateMutation,
  useUploadImageMutation,
} from "../../../redux/api/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserProfile, setUser } from "../../../redux/features/userSlice";

function AccountDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");

  const [profileImage, setProfileImage] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const [updateProfile, { isLoading, isError, isSuccess }] =
    useProfileUpdateMutation();
  const [uploadImage] = useUploadImageMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      phoneNumber,
      city,
    };
    try {
      const user = JSON.parse(localStorage.getItem("userData"));
      await updateProfile({ id: user.id, userData: formData });
      dispatch(updateUserProfile({ ...formData, id: user.id }));

      if (selectedImageFile) {
        try {
          await uploadImage({ id: user.id, imageFile: selectedImageFile });
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }

      dispatch(setUser(formData));
      navigate("/dashboard");
      // Handle success, maybe show a toast or message
    } catch (error) {
      // Handle error, show error message to the user
    }
  };

  return (
    <div className={styles.accountDetails}>
      <div className={styles.userFiles}>
        <div className={styles.userFilesHeading}>
          <h3>Let's start with basic information</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            reprehenderit!
          </p>
        </div>

        <div className={styles.userFilesImg}>
          <img
            src={profileImage || user}
            alt="profilePicture"
            width="100px"
            height="100px"
          />
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setProfileImage(URL.createObjectURL(file));
                setSelectedImageFile(file);
              }
            }}
          />
        </div>
      </div>
      <form className={styles.userForm} onSubmit={handleSubmit}>
        <div className={styles.userProfile}>
          <div className={styles.userDiv}>
            <p>First Name</p>
            <input
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.userDiv}>
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* <div className={`${styles.userDiv} ${styles.last}`}>
            <p>Company Position</p>
            <input type="text" placeholder="John" value={companyPosition} onChange={e => setCompanyPosition(e.target.value)}/>
          </div> */}
        </div>
        <div className={styles.userProfile}>
          <div className={styles.userDiv}>
            <p>Phone No</p>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {/* <div className={styles.userDiv}>
            <p>Mobile Number</p>
            <input type="text" placeholder="+923123456789" />
          </div> */}
          {/* <div className={`${styles.userDiv} ${styles.last}`}>
            <p>Company Name</p>
            <input type="text" placeholder="Eagle's Eye" value={companyName} onChange={e => setCompanyName(e.target.value)}/>
          </div> */}
        </div>
        <div className={styles.userProfile}>
          {/* <div className={styles.userDiv}>
            <p>Company Address</p>
            <input type="text" value={companyAddress} onChange={e => setCompanyAddress(e.target.value)}/>
          </div> */}
          {/* <div className={styles.userDiv}>
            <p>Zip Code</p>
            <input type="text" value={zipCode} onChange={e => setZipCode(e.target.value)}/>
          </div> */}
          <div className={`${styles.userDiv} ${styles.last}`}>
            <p>City</p>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.userMortgage}>
          {/* <div className={styles.userDiv}>
            <p>Mortgage Advisor Email</p>
            <input type="text" />
          </div> */}
          {/* <div className={styles.companyLogo}>
            <p>Company Logo</p>
            <input
              type="file"
              name="fileUpload"
              className={styles.fileUpload}
            />
          </div> */}
        </div>
        <div className={styles.userButtons}>
          <button
            className={styles.saveButton}
            type="submit"
            disabled={isLoading}
          >
            Save Changes
          </button>
          <button className={styles.discardButton}>Discard</button>
        </div>
      </form>
      {isSuccess && <p>Profile updated successfully!</p>}
      {isError && <p>There was an error updating the profile.</p>}
    </div>
  );
}

export default AccountDetails;
