import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [repeatpass,setRpass]=useState("")
    const [checkbox,setBox]=useState("")
    const navigate=useNavigate()
    const handleSign=async()=>{
        console.log(checkbox)
        if(password===repeatpass && checkbox){
            // console.log("working")
            let result=await fetch("http://localhost:5000/signin",{
                method:"post",
                body:JSON.stringify({email,password}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            result=await result.json()
            console.log(result)
            localStorage.setItem('user', JSON.stringify(result));
           
            if(result){
                navigate("/login")
            }

            
        }
        else{
            console.log("not working")
        }

    }
    return (
        <div className="signup-page">

        <div className="signin-box">
            <h1>Sign up</h1>
            <div className="input-field signup-input">
                <input type={"text"} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
                <input type={"password"} placeholder="Password"onChange={(e)=>{setPassword(e.target.value)}} />
                <input type={"password"} placeholder="Repeat Password" onChange={(e)=>{setRpass(e.target.value)}}/>
                <h3><input type={"checkbox"} onChange={(e)=>{setBox(e.target.checked)}} /><span style={{color:"#aaa"}}>I agree with</span> <span style={{textDecoration:"underline"}}>TERMS & CONDITIONS</span></h3>
            </div>
    
            <button onClick={handleSign}>CONTINUE</button>
          
        </div>
        </div>
    )
}
export default SignUp