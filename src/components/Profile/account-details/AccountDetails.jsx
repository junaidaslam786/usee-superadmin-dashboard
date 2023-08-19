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
import { useAppSelector } from "../../../redux/store";

function AccountDetails() {
  const userState = useAppSelector((state) => state.userState);

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
  const [uploadImage, { data, error }] = useUploadImageMutation();

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
          // if (data && data.user) {
          //   dispatch(setUser(data.user));
          // }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }

      dispatch(setUser(formData));
      // navigate("/dashboard");
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
            src={
              profileImage ||
              `${process.env.REACT_APP_SERVER_ENDPOINT}/${userState?.user?.profileImage}`
            }
            alt="profilePicture"
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
      <div className={styles.mainDiv}>
        <form className={styles.userForm} onSubmit={handleSubmit}>
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
          <div className={styles.userProfile}>
            <div className={styles.userDiv}>
              <p>Phone No</p>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.userProfile}>
            <div className={styles.userDiv}>
              <p>City</p>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.userMortgage}></div>
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
        <div className={styles.mainCard}>
          <div className={styles.card}>
            <img src={user} />
            <div className={styles.margin}>
              <div className={styles.flexTate}>
                <p className={styles.cardNameHeading}>Name: </p>
                <p className={styles.cardName}>Abdul Hakeem</p>
              </div>
              <div className={styles.flexTate}>
                <p className={styles.cardNameHeading}>Mobile: </p>
                <p className={styles.cardName}>1234567890</p>
              </div>
              <div className={styles.flexTate}>
                <p className={styles.cardNameHeading}>City: </p>
                <p className={styles.cardName}>Chungi No. 07</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSuccess && <p>Profile updated successfully!</p>}
      {isError && <p>There was an error updating the profile.</p>}
    </div>
  );
}

export default AccountDetails;
