import React,{useState} from "react";
import classes from '../UI/MyOrder.module.css';

function Return(){
    let currentUserBookDetails=[];
    currentUserBookDetails =JSON.parse(localStorage.getItem("CurrentUser"));
    // console.log(currentUserBookDetails);
    let [filteredBooks, setfilteredbooks]=useState(currentUserBookDetails.bookDetails);
    let x1=[];
    let x=false;
    // console.log('fb', filteredBooks);

    function removeBooks(bookid){
        x1= filteredBooks.filter(i=>i.id!==bookid);
        setfilteredbooks(x1);
        currentUserBookDetails={...currentUserBookDetails,bookDetails:x1};
        // console.log('cub',currentUserBookDetails);
        localStorage.setItem("CurrentUser", JSON.stringify(currentUserBookDetails));
        //getting all student details
        let allstudent = JSON.parse(localStorage.getItem("StudentLoginInfo"));
        let result = allstudent.map((i)=>{
            if(i.Email===currentUserBookDetails.Email)
            {
                i.bookDetails=currentUserBookDetails.bookDetails;
                return i;
            }
            else
            return i;
        });
        // console.log('res',result);
        alert("Book Returned");
        localStorage.setItem("StudentLoginInfo",JSON.stringify(result));
    }

    if(filteredBooks.length>0)
    x=true;
    else
    x=false;

    // console.log('fbd', filteredBooks);
    // console.log('x',x);

    return <div className={classes.myorderstyle}>
        {x
        ?
        filteredBooks.map(i=>{
               return <li key={i.id} className={classes.orderListStyle}>
                    <div>
                        <span>Book Name: </span>
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
                    <div>
                    <button onClick={()=>{removeBooks(i.id)}}>Return</button>
                    </div>
                </li>
            })
            :
            <p>No books in cart</p>
        }
    </div>
}

export default Return;