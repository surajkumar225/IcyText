import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            props.showAlert("Logged In SuccessFully", "success")
            history.push("/");
        }
        else{
            props.showAlert("Invalid Details", "danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2 className="loginh2 my-2">Login to your account</h2>
            <form className="Loginform my-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="••••••••••" value={credentials.password} onChange={onChange} name="password" id="password" />
                    <div id="passwordHelp" className="form-text">Password must be atleast 5 characters</div>
                </div>

                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login