import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div>
        <div className = {styles.whole}>
                <div className = {styles.profileCreation}>
                    <div className = {styles.profileCreationHeading}>
                        <h3>Profile Creation</h3>
                    </div>
                    <div className = {styles.profileCreationButtons}>
                        <button>Quick Appointment</button>
                        <button className = {styles.one}>Create Property</button>
                    </div>
                </div>
                <div className = {styles.ProfileInfo}>
                    <div className = {styles.profileLinks}>
                        <div>
                            <p>Account Details</p>
                        </div>
                        <div>
                            <p>Timezone</p>
                        </div>
                        <div>
                            <p>Change Password</p>
                        </div>
                        <div>
                            <p>Call Background Images</p>
                        </div>
                        <div>
                            <p>Embedded code</p>
                        </div>
                    </div>
                    <div className = {styles.UserRegistration}>
                        <div className = {styles.accountDetails}>
                            <div className = {styles.userFiles}>
                                <div className = {styles.userFilesHeading}>
                                    <h3>Let's start with basic information</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
                                        reprehenderit!</p>
                                </div>
                                <div className = {styles.userFilesImg}>
                                    <img src="Images/Rectangle 1393.png" alt="profilePicture" width="100px"
                                        height="100px" />
                                    <a href="#">Upload Image</a>
                                </div>
                            </div>
                            <form className = {styles.userForm}>
                                <div className = {styles.userProfile}>
                                    <div className = {styles.userDiv}>
                                        <p>First Name</p>
                                        <input type="text" placeholder="John" />
                                    </div>
                                    <div className = {styles.userDiv}>
                                        <p>Last Name</p>
                                        <input type="text" placeholder="Doe" />
                                    </div>
                                    <div className = {styles.userDiv}>
                                        <p>Company Position</p>
                                        <input type="text" placeholder="John" />
                                    </div>
                                </div>
                                <div className = {styles.userProfile}>
                                    <div className = {styles.userDiv}>
                                        <p>Phone No</p>
                                        <input type="text" />
                                    </div>
                                    <div className = {styles.userDiv}>
                                        <p>Mobile Number</p>
                                        <input type="text" placeholder="+923123456789" />
                                    </div>
                                    <div className = {styles.userDiv}>
                                        <p>Company Name</p>
                                        <input type="text" placeholder="Eagle's Eye" />
                                    </div>
                                </div>
                                <div className = {styles.userProfile}>
                                    <div className = {styles.userDiv}>
                                        <p>Company Address</p>
                                        <input type="text" />
                                    </div>
                                    <div className = {styles.userDiv}>
                                        <p>Zip Code</p>
                                        <input type="text" />
                                   </div>
                                    <div className = {styles.userDiv}>
                                        <p>City</p>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className = {styles.userMortgage}>
                                    <div className = {styles.userDiv}>
                                        <p>Mortgage Advisor Email</p>
                                        <input type="text" />
                                    </div>
                                    <div className = {styles.companyLogo}>
                                        <p>Company Logo</p>
                                        <input type="file" name="fileUpload" className = {styles.fileUpload} />
                                    </div>
                                </div>
                            </form>
                            <div className = {styles.userButtons}>
                                <button className = {styles.saveButton}>Save Changes</button>
                                <button className = {styles.discardButton}>Discard</button>
                            </div>
                        </div>
                        <div className = {styles.timeZone}>
                            <div className = {styles.timeZoneHeading}>
                                <h3>Update your timezone</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ducimus?</p>
                            </div>
                            <div className = {styles.timeZoneLabel}>
                                <label for="Timezone"></label>
                                <select name="Time" id="Time">
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Karachi">Karachi</option>
                                </select>
                            </div>
                            <button className = {styles.timeZoneButton}>Update</button>
                        </div>
                        <div className = {styles.userPass}>
                            <div className = {styles.userPassHeading}>
                                <h3>Change Password</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, unde.</p>
                            </div>
                            <div className = {styles.userPassInputs}>
                                <div className = {styles.userPassAbout}>
                                    <h4>Current password</h4>
                                    <p>(Lorem ipsum dolor sit amet.)</p>
                                </div>
                                <input type="text" placeholder="Enter current password" />
                            </div>
                            <div className = {styles.userPassInputs}>
                                <div className = {styles.userPassAbout}>
                                    <h4>New password</h4>
                                    <p>(Lorem ipsum dolor sit amet.)</p>
                                </div>
                                <input type="text" placeholder="Enter new password" />
                            </div>
                            <div className = {styles.userPassInputs}>
                                <div className = {styles.userPassAbout}>
                                    <h4>Confirm New password</h4>
                                </div>
                                <input type="text" placeholder="Confirm password" />
                            </div>
                            <button className = {styles.userPassButton}>Update Password</button>
                        </div>
                        <div className = {styles.userBackgroundImage}>
                            <div className = {styles.userBackgroundImageHeading}>
                                <h3>Call Background Images</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ex.</p>
                            </div>
                            <div className = {styles.userBackgroundImageFiles}>
                                <p>Drag & drop some files, or <a href="#">click here</a> to select files</p>
                            </div>
                        </div>
                        <div className = {styles.userEmbeddedCode}>
                            <div className = {styles.userEmbeddedCodeHeading}>
                                <h3>Embedded Code</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, delectus!</p>
                            </div>
                            <button className = {styles.userEmbeddedCodeButton}>See API</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Profile