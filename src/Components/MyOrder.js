import React, {  useState } from "react";
import classes from '../UI/MyOrder.module.css';
function MyOrder(){

    let x=false;
    let localuserDetails=JSON.parse(localStorage.getItem("CurrentUser"));;
    let [ans, setans] = useState(localuserDetails);
    if(localuserDetails.bookDetails.length>0)
    x=true;
    else
    x=false;
    return <div className={classes.myorderstyle}> 
        {x?
         localuserDetails.bookDetails.map(i=>{
               return <li key={i.id} className={classes.orderListStyle}>
                    <div>
                        <span>Book Author: </span>  
                        {i.name}
                    </div>
                    <div>
                        <span>Book Author: </span>
                        {i.author}
                    </div>
                    <div>
                        <span>Book Category: </span>
                        {i.category}
                    </div>
                </li>
            })
        :
        <div>No Books in Cart</div>
 }
    </div>
}

export default MyOrder;