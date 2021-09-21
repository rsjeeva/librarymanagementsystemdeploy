import React, {useEffect, useState} from "react";
import classes from "../UI/OrderDetails.module.css";


function OrderDetails(){

    let userdetails = JSON.parse(localStorage.getItem("StudentLoginInfo"));
    // console.log(userdetails[0].bookDetails);
    return <div className={classes.orderdetailstyle}>
        {
        userdetails.map((i)=>{
            let x = i.bookDetails.length;
            // console.log('i',i);
            // console.log(x,'x');
           return <li key={i.Email} className={classes.userlist}>
               <div><span>User Name: </span>{i.Name.toUpperCase()}</div>
               {
                x?   
                   <div className={classes.bookliststyle}>{
                   i.bookDetails.map((item)=>{
                       return <li>
                           <div><span>Book Name: </span>{item.name}</div>
                       </li>
                   })
                    }
                   </div>
                   :
                   <div className={classes.bookliststyle}><span>Book Name: </span>No Book</div>
               }
           </li>
        })}
    </div>
}

export default OrderDetails;