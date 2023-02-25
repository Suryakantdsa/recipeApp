import { useState } from "react"
import { useNavigate } from "react-router-dom"

// import './Login.css';
const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const handelLogin = async () => {
        if (!email && !password) {
            alert("enter userid & password")
        }
        else {
            let result = await fetch("http://localhost:5000/login",
                {
                    method: "post",
                    body: JSON.stringify({ email, password }),
                    headers: {
                        "content-Type": 'application/json'
                    }

                })
            result = await result.json();
            console.log(result)
            if (result) {
                localStorage.setItem("user", JSON.stringify(result.checkUser))
                localStorage.setItem("token", JSON.stringify(result.auth))
                navigate("/home")
            }
            
        }
    }




    return(
        <div className="login-page">

        <div className="signin-box">
        <h1>Sign in</h1>
        <div className="input-field">
            <h3>Email address</h3>
            <input  type={"text"} placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <h3>Password</h3>
            <input type={"password"} placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}}/>
           <h3><input type={"checkbox"}/><span>Remember me</span></h3>
        </div>
        <button onClick={handelLogin}>Submit</button>
        <p className="forget-pass" >Forget <span style={{color:"blue"}}>password ?</span></p>

    </div>
</div>
    )
}

export default Login