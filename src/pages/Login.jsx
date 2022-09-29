
import { useState } from "react";
import CreateAccount from "../Components/CreateAccount";
import LoginForm from "../Components/LoginForm";
import "../Styles/Login.css"

export default function Login() {
  const [state,setState] = useState(false)
  return (
    <div id="loginPage">
      {state ? <CreateAccount /> : <LoginForm />}
      <br />
      <br />
      <p>{state?"Already a Customer":"Don't have an account?"}</p>
      <button onClick={() => setState(!state)}>
        {state ? "LOG IN" : "CREATE ACCOUNT"}
      </button>
    </div>
  );
}