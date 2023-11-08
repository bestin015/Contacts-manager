import { Link } from "react-router-dom"; 
import { useState } from "react";

const Register=()=>{
        const [credentials,setCredentials]=useState({
            email:"",
            password:"",
            confirmPassword:"",
        });
        const handleInputChange =(event)=>{
            const{name,value}=event.target;
            setCredentials({...credentials,[name]:value})
        };
        const handleSubmit =(event)=>{
            event.preventDefault();
        };
    return(
        <div class="login-container my-5 mx-auto col-md-3">
            <h3 class="text-center mb-5">Create your account</h3>
            <form onSubmit={handleSubmit}>
                <div class="form-group mb-3" >
                    <label for="emailInput" class="form-label">Email address</label>
                    <input type="email" value={credentials.email} class="form-control" onChange={handleInputChange} id="emailInput" name="email" aria-describedby="emailHelp"
                        placeholder="johndoe@example.com" />
                </div>
                <div class="form-group mb-3">
                    <label for="passwordInput" class="form-label">Password</label>
                    <input required type="password" value={credentials.password} onChange={handleInputChange} class="form-control" id="passwordInput" name="password" placeholder="Enter password" />
                </div>
                <div class="form-group mb-3">
                    <label for="confirmPassword" class="form-label">Confirm Password</label>
                    <input required type="password" value={credentials.confirmPassword} onChange={handleInputChange} class="form-control" id="confirmPassword" name="confirmPassword" placeholder="Enter password" />
                </div>
                <button type="submit" value="Register" class="btn btn-primary mt-4 mb-3">Login</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>

);
};
export default Register;