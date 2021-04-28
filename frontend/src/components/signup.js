import React,{useState} from "react";



const SignUp = ()=>{
    const [username, setU] = useState('');
    const [pass1, setP1] = useState('');
    const [pass2, setP2] = useState('');
    return(
        <div className="login">
            <title>Sign Up</title>
            <form>
                <h1 className="logH1">Sign Up to create a new account</h1>
                <label htmlFor="username">Enter your username : </label>
                <input type="text" id="username" onChange={event => setU(event.target.value)}/><br/>
                <label htmlFor="pwd">Enter Password : </label>
                <input type="password" id="pwd1" onChange={event => setP1(event.target.value)}/><br/>
                <label htmlFor="pwd">Re-Enter Password : </label>
                <input type="password" id="pwd2" onChange={event => setP2(event.target.value)} /><br/>
                <button type="submit" onClick={event=>{
                    event.preventDefault();
                    if(pass1!==pass2){
                        alert("Passwords must be same!");
                    }
                    else{
                        console.log(username,pass1);
                    }
                }}>Sign-Up</button><br/>
                <a href="/"> Already a user? Click here to log in</a>
            </form>
        </div>
    );
}

export default SignUp;