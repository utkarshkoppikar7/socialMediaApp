import React,{useState} from "react";

class User{
    constructor(user,pass){
        this.username = user;
        this.password = pass;
    }
}
const Login = ()=>{
    let [user,addUser] = useState()
    let [uname,changeU1] = useState("")
    let [pword,changeP1] = useState("")
    
    const changeU = (e)=>{
        changeU1(uname = e.target.value)
    }
    
    const changeP = (e) =>{
        changeP1(pword = e.target.value);
    }

    const verify = (e)=>{
        e.preventDefault();
        addUser(user = new User(uname,pword));
        console.log(user);
    }
    return(
        <div className="login">
            <title>Log In/Sign up</title>
            <form>
                <h1 className="logH1">Log In to continue</h1>
                <label htmlFor="username">Enter your username : </label>
                <input type="text" id="username" onChange={changeU}/><br/>
                <label htmlFor="pwd">Enter Password : </label>
                <input type="password" id="pwd" onChange={changeP}/><br/>
                <button type="submit" onClick={verify}>Log-In</button><br/>
                <a href="/signup">Not a user? Click here to create a new account</a>
            </form>
        </div>
    );
}

export default Login;