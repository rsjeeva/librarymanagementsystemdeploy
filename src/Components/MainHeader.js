import React, { useContext, useEffect, useState } from 'react';
import classes from '../UI/MainHeader.module.css';
import {Link} from 'react-router-dom';
import MainContext from '../Context/main-context';



function MainHeader(){

  let ctx = useContext(MainContext);



  let[userDetails, setUserDetails]=useState('');

  useEffect(()=>{
    let uID = ctx.uID;
    setUserDetails(uID);
  },[ctx.uID, userDetails]);

 console.log(userDetails);
    return <div className={classes.mainheader}>
              <div className={classes.subMainheader}>
                  <div className={classes.logo}>
                    <Link to='/' className={classes.linklogo}>LMS</Link>
                  </div>
                  <div className={classes.headername}>Library Management System</div>
                  </div>
              {userDetails &&<div className={classes.namestyles}>{`Welcome ${userDetails}`}</div>}
    </div>
}

export default MainHeader;  