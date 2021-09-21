import React, {  useState } from "react";
import { useHistory } from "react-router";
import classes from '../UI/AdminLogin.module.css';

function AdminLogin(){

    let [email, setEmailID]= useState('');
    let [password, setPassword] = useState('');    
    const history = useHistory();

    function adminformhandler(e){
        e.preventDefault();
        console.log(typeof(email));
        if(password === "adminlms" && email === "admin@gmail.com")
        {
            history.replace('/adminpage/addbooks');
        }
        else{
            console.log(localStorage);
            // console.log(password, email);
            alert("invalid userName");
        }
    }


    return <div className={classes.adminLoginHeader}>
        <div className={classes.loginpage}>
        <div className={classes.loginhead}>Login</div>
        <form className={classes.formcontainer} onSubmit={adminformhandler}>
            <div>
            <span>Email:</span><input type='email' value={email} onChange={(e)=>{setEmailID(e.target.value)}} required></input>
            </div>
            <div> 
            <span>Password:</span><input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required></input>
            </div>
            <button type='submit'>GetIn</button>
        </form>
        </div>
    </div>
}

export default AdminLogin;