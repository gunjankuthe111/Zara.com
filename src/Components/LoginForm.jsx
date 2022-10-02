import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css"
export default function LoginForm(){
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
    return (
      <div id="loginContainer">
        <h1>LOG IN</h1>
        <br/>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <br />
        <br />
        <br />
        <button onClick={()=>{
          const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
          const available = usersData.find((ele)=>ele.email===email && ele.password===password)
          if(available){
            alert("Login successful");
            navigate("/")
          }else{
            alert("Enter Valid details")
          }
        }}>LOG IN</button>
      </div>
    );
}