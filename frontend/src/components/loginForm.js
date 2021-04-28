import React,{useState} from "react";

const Login = ()=>{
    let [uname,changeU1] = useState("");
    let [pword,changeP] = useState("");

    
    return(
        <div className="login">
            <title>Log In/Sign up</title>
            <form>
                <h1 className="logH1">Log In to continue</h1>
                <label htmlFor="username">Enter your username : </label>
                <input type="text" id="username" onChange={event => changeU1(event.target.value)}/><br/>
                <label htmlFor="pwd">Enter Password : </label>
                <input type="password" id="pwd" onChange={event => changeP(event.target.value)}/><br/>
                <button type="submit" onClick={event => {
                    event.preventDefault();
                    console.log(uname,pword);
                }}>Log-In</button><br/>
                <a href="/signup">Not a user? Click here to create a new account</a>
            </form>
        </div>
    );
}

export default Login;