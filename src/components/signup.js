import React from "react";

const SignUp = ()=>{
    return(
        <div className="login">
            <title>Sign Up</title>
            <form>
                <h1 className="logH1">Sign Up to create a new account</h1>
                <label htmlFor="username">Enter your username : </label>
                <input type="text" id="username"/><br/>
                <label htmlFor="pwd">Enter Password : </label>
                <input type="password" id="pwd1"/><br/>
                <label htmlFor="pwd">Re-Enter Password : </label>
                <input type="password" id="pwd2"/><br/>
                <button type="submit">Sign-Up</button><br/>
                <a href="/"> Already a user? Click here to log in</a>
            </form>
        </div>
    );
}

export default SignUp;