import React, { useEffect, useState } from "react";
import styles from "./AccountDetails.module.css";
import {
  useProfileUpdateMutation,
  useUploadImageMutation,
} from "../../../redux/api/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/userSlice";
import { useAppSelector } from "../../../redux/store";

import { toast } from "react-toastify";
import { CustomErrorMessage } from "../../../utils/CustomErrorMessage";

function AccountDetails() {
  const userState = useAppSelector((state) => state.userState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [profileImage, setProfileImage] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const [updateProfile, { isLoading, isError, isSuccess }] =
    useProfileUpdateMutation();
  const [uploadImage, { data, error }] = useUploadImageMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFields = {
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(phoneNumber && { phoneNumber }),
      ...(email && { email }),
    };

    try {
      await updateProfile({ id: userState.user.id, userData: updatedFields });

      let updatedUserData = { ...userState.user, ...updatedFields };

      if (selectedImageFile) {
        const uploadResponse = await uploadImage({
          id: userState.user.id,
          imageFile: selectedImageFile,
        });
        if (uploadResponse.data.imageUrl.imageUrl) {
          updatedUserData.profileImage = uploadResponse.data.imageUrl.imageUrl;
        }
      }

      dispatch(setUser(updatedUserData));

      // Update localStorage with the new user data
      localStorage.setItem("userData", JSON.stringify(updatedUserData));
    } catch (error) {
      console.error("Error updating profile or uploading image:", error);
    }
  };

  const handleDiscard = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setSelectedImageFile(null);
  };
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      dispatch(setUser(userData));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Profile updated successfully!");
      navigate("/dashboard");
    }
    if (isError) {
      toast.error("There was an error updating the profile.");
      const errorMessage = CustomErrorMessage(error); // Extract error message using the utility
      toast.error(errorMessage);
    }
  }, [isSuccess, isError]);

  return (
    <div className={styles.accountDetails}>
      <div className={styles.userFiles}>
        <div className={styles.userFilesHeading}>
          <h3>Let's start with basic information</h3>
          <p>
            Add your basic profile information to get started and enjoy hassle
            free experience
          </p>
        </div>

        <div className={styles.userFilesImg}>
          <img
            src={
              profileImage ||
              `${process.env.REACT_APP_SERVER_ENDPOINT}/${
                userState?.user?.imageUrl?.imageUrl
                  ? userState?.user?.imageUrl?.imageUrl
                  : userState?.user?.profileImage
              }?${Date.now()}`
            }
            alt="profilePicture"
          />
        </div>
      </div>
      <div className={styles.mainDiv}>
        <form className={styles.userForm} onSubmit={handleSubmit}>
          <div className={styles.userDiv}>
            <p>First Name</p>
            <input
              type="text"
              placeholder={userState?.user?.firstName}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.userDiv}>
            <p>Last Name</p>
            <input
              type="text"
              placeholder={userState?.user?.lastName}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.userProfile}>
            <div className={styles.userDiv}>
              <p>Phone No</p>
              <input
                type="text"
                placeholder={userState?.user?.phoneNumber}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.userProfile}>
            <div className={styles.userDiv}>
              <p>Email</p>
              <input
                type="email"
                placeholder={userState?.user?.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <button className={styles.discardButton} onClick={handleDiscard}>
              Discard
            </button>
            <button
              className={styles.uploadButton}
              onClick={() => {
                const fileInput = document.getElementById("hiddenFileInput");
                fileInput.click();
              }}
            >
              Choose File
            </button>
            <input
              type="file"
              id="hiddenFileInput"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setProfileImage(URL.createObjectURL(file));
                  setSelectedImageFile(file);
                }
              }}
            />
          </div>
        </form>
      </div>
      {/* {isSuccess && <p>Profile updated successfully!</p>} */}
      {/* {isError && <p>There was an error updating the profile.</p>} */}
    </div>
  );
}

export default AccountDetails;
