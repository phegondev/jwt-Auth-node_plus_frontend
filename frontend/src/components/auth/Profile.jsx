import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {

        const fetchUserDate = async () => {
            try {
                const response = await axios.get('http://localhost:5500/profile', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setUserData(response.data);
            } catch (err) {
                console.log('Error Fetching user profile data: ' + err)
            }
        }

        fetchUserDate();
    }, [])



    return (
        <div className="profile-container">

            {
                userData ? (
                    <div>
                        <h2>Your User name is: {userData.username}</h2>
                    </div>
                ) : (
                    <p>Loading user data</p>
                )
            }

        </div>
    )
}
export default Profile;