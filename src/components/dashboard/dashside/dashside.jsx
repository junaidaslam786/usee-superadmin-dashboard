import React from 'react'
import styles from './dashside.module.css'
import logo from '../../../assets/logo.png'

const DashSide = () => {
  return (
    <div className = {styles.menu}>
        <div className ={styles.image}>
            <img 
                src= {logo} alt="Logo" 
            />
        </div>
        <div className ={styles.content}>
            <div className = {styles.icons}>
                <div className ={styles.pages}>
                    <span className ="material-symbols-outlined">
                        dashboard
                    </span>
                    <a href="#">Dashboard</a>
                </div>
                <div className ={styles.pages}>
                    <span className ="material-symbols-outlined">
                        account_circle
                    </span>
                    <a href="#">Profile</a>
                </div>
                <div className ={styles.pages}>
                    <span className ="material-symbols-outlined">
                        list
                    </span>
                    <a href="#">Listings</a>
                </div>
                <div className ={styles.pages}>
                    <span className ="material-symbols-outlined">
                        Group
                    </span>
                    <a href="#">Users</a>
                </div>
                <div className ={styles.pages}>
                    <span className ="material-symbols-outlined">
                        news
                    </span>
                    <a href="#">News</a>
                </div>
                <div className ={styles.pages}>
                    <span className ="material-symbols-outlined">
                        payments
                    </span>
                    <a href="#">Payments</a>
                </div>
                <div className ={styles.pages}>
                    <span className ="material-symbols-outlined">
                        groups_2
                    </span>
                    <a href="#">Traders</a>
                </div>
                <div className ={styles.pages}>
                    <span className ="material-symbols-outlined">
                        finance
                    </span>
                    <a href="#">Analytics</a>
                </div>
                <div className ={styles.pages}>
                    <span className ="material-symbols-outlined">
                        ad_group
                    </span>
                    <a href="#">Subscription Management</a>
                </div>
            </div>
            <div className = {styles.sign}>
                <span className ="material-symbols-outlined">
                    logout
                </span>
                <button type="button" className ={styles.signout}>Sign Out</button>
            </div>
        </div>
    </div>
  )
}

export default DashSide