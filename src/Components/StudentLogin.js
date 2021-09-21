import React, {  useReducer, useState } from "react";
import { useHistory } from "react-router";
import classes from '../UI/StudentLogin.module.css';


function reducerFunction(state, action){

    if(action.type === 'LOGIN')
    {
        state = {...state, value:true, name:'Login',toggling_name:'SignUp', desc:'Already not registered?'};

        return state;
    }

    if(action.type === 'SIGNUP')
    {
        state = {...state, value:false, name:'SignUp',toggling_name:'SignIn', desc:'Have Account?'};
        return state;
    }

    return state;
}

function StudentLogin(){

    let allstudentLoginDetails = JSON.parse(localStorage.getItem("StudentLoginInfo"));
    // console.log(allstudentLoginDetails);

    let[email, setemail]=useState('');
    let[pass, setpass]=useState('');
    let[Sname, setname] = useState('');
    const history = useHistory();
    let[state, dispatch] = useReducer(reducerFunction, {value:true, name:'Login',toggling_name:'SignUp', desc:'Already not registered?'})

    // const ctx = useContext(MainContext);


    function pageToggler(){
        // console.log('toggling');
        if(state.toggling_name==='SignUp')
        dispatch({type:'SIGNUP'});
        if(state.toggling_name==='SignIn')
        dispatch({type:'LOGIN'});
    }

    function studentformHandler(e){
        e.preventDefault();
        let singleUserLoginDetails=[];

        if(allstudentLoginDetails)
        {
         singleUserLoginDetails= allstudentLoginDetails.filter(i=>i.Email===email);
        }
        // let x = singleUserLoginDetails[0];
        // console.log('sud',x[0]);


        if(state.value===true)
        {
            if(singleUserLoginDetails.length<1)
            {
                alert("Please Signup");
            }
            else if(singleUserLoginDetails[0].Email === email && singleUserLoginDetails[0].Password === pass)
            {
                alert("login successfull");

                localStorage.setItem("CurrentUser",JSON.stringify(singleUserLoginDetails[0]));
                history.replace('/studentpage');
            }
            else{
                alert("Invalid User Credentials!!!");
            }
            setemail('');
            setpass('');
        }

        else{     
            let studentLoginArray=[]; 
            if(allstudentLoginDetails)
                studentLoginArray=allstudentLoginDetails;    
            console.log(studentLoginArray);  
           let studentInfos = {
               Email:email,
               Password:pass,
               Name:Sname,
               bookDetails:[]
           };
           //local storage to store data
           studentLoginArray = [...studentLoginArray, studentInfos]
           localStorage.setItem("StudentLoginInfo",JSON.stringify(studentLoginArray));
            setemail('');
            setpass('');
            setname('');
            history.replace('/');
        }
    }



    return <div className={classes.studentLoginHeader}>
        <div className={classes.loginheading}>
            {state.name}
        </div>
        <div className={classes.formContainer}>
            <form className={classes.formpage} onSubmit={studentformHandler}>
                {!state.value && <div>
                <span>Name:</span><input type='text' value={Sname} onChange={(e)=>{setname(e.target.value)}} required></input>
                </div>}
                <div>
                <span>Email:</span><input type='email' value={email} onChange={(e)=>{setemail(e.target.value)}} required></input>
                </div>
                <div> 
                <span>Password:</span><input type='password' value={pass} onChange={(e)=>{setpass(e.target.value)}} required></input>
                </div>
                <button type='submit'>{state.name}</button>
            </form>
        </div>
        <div className={classes.signup}>
            <div>{state.desc}</div>
            <div onClick={pageToggler}>{state.toggling_name}</div>
        </div>
    </div>
}

export default StudentLogin;