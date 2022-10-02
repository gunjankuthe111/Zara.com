import { useState } from "react";
import "../Styles/Login.css";

export default function CreateAccount() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div id="loginContainer">
      <h1>CREATE ACCOUNT</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <br />
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />
      <br />
      <input
      type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      <br />
      <br />
      <br />
      <button onClick={()=>{
        const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
        const available = usersData.find((ele)=>ele.email===email)

        if(available){
          alert("User already exist")
          return
        }
          const user = {
            name,email,password
          }
          usersData.push(user);
          localStorage.setItem("usersData",JSON.stringify(usersData));
          alert("Account created successfuly")
        }}>CREATE ACCOUNT</button>
    </div>
  );
}
