import { useState } from "react";
import { Link } from "react-router-dom";

const Login=()=>{
    const [credentials,setCredentials]=useState({
        email:"",
        password:""
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
            <h3 class="text-center mb-5">Login</h3>
            <form  onSubmit={handleSubmit} >
                <div class="form-group mb-3">
                    <label for="emailInput" class="form-label">Email address</label>
                    <input type="email" class="form-control" required id="emailInput" onChange={handleInputChange} value={credentials.email} name="email" aria-describedby="emailHelp"
                        placeholder="johndoe@example.com" />
                </div>
                <div class="form-group mb-3">
                    <label for="passwordInput" class="form-label">Password</label>
                    <input type="password" required class="form-control" id="passwordInput" onChange={handleInputChange} name="password"value={credentials.password} placeholder="Enter password" />
                </div>
                <button type="submit" value="Login" class="btn btn-primary mt-4 mb-3">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Create one</Link></p>
        </div>

);
};
export default Login;