import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value,
        }))
    }


    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/register',formData );
            console.log("Registration Successful")
            navigate('/login')
        } catch (error) {
            console.log("Registration Failed: " + error)
        }
    }


    return (
        <div className="registration-container">
            <h2>Registration Page</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username"
                    value={formData.username} onChange={handleChange}
                    required placeholder="Enter Username" /> <br />

                <input type="password" name="password"
                    value={formData.password} onChange={handleChange}
                    required placeholder="Enter Password" /> <br />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
    )
}
export default Register;