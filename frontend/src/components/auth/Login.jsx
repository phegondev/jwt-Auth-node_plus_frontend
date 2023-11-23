import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5500/login', formData);
            const { token } = response.data;
            console.log("Login Token is: " + token)
            localStorage.setItem('token', token);
            setError('')
            navigate('/profile')

        } catch (error) {
            console.log("Login Failed: " + error)
            setError(error.response.data.message)
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    }

    return (
        <div className="login-container">
            <h2>Login Page</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="username"
                    value={formData.username} onChange={handleChange}
                    required placeholder="Username" /> <br />

                <input type="password" name="password"
                    value={formData.password} onChange={handleChange}
                    required placeholder="Password" /> <br />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to='/register'>Login</Link></p>
        </div>
    )
}
export default Login;