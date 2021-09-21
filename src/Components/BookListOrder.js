import React,{useContext, useState, useEffect} from 'react';
import MainContext from '../Context/main-context';
import classes from '../UI/BookList.module.css';

let filteredBooks=[];

function BookList(props){

    let bookDetails=JSON.parse(localStorage.getItem("BookDetails"));
    
    filteredBooks = bookDetails.filter((i)=>{
        if(i.name.toLowerCase().includes(props.bookSearching.toLowerCase()))
        return i;
    });

    function studentBookHandler(i){
        let storeBookInfo={
            id:i.bookID,
            name:i.name,
            author:i.author,
            category:i.category,
        }
        // console.log(storeBookInfo);

        let userDetails = JSON.parse(localStorage.getItem("CurrentUser"));
        // console.log(userDetails);
        let x = userDetails.bookDetails;
        let updatingBookDetails=x;
        updatingBookDetails = [...updatingBookDetails, storeBookInfo];
        userDetails.bookDetails=updatingBookDetails;
        // console.log('ud',userDetails);
        localStorage.setItem("CurrentUser",JSON.stringify(userDetails));
        


        //updating user details with book info

        let upd = JSON.parse(localStorage.getItem("StudentLoginInfo")); //getting studen details in upd variable
        // console.log('upd',upd);
        // let m = upd[0];

        let mapping = upd.map((i)=>{
            if(i.Email === userDetails.Email)
            {
               i.bookDetails=updatingBookDetails;
               return i;
            }
            else
            return i;
        });
        //updating the student info details
        // localStorage.setItem("StudentLogin",JSON.stringify(mapping));
        localStorage.setItem("StudentLoginInfo", JSON.stringify(mapping));
        alert("Book Added!!!");
        console.log('map',mapping);
    }

    return <div>        
           { filteredBooks.map((i)=>{
                return <li key={i.bookID} className={classes.bookliststyle}>
                    <div><span>Book Name: </span>{i.name.toUpperCase()}</div>
                    <div><span>Book Author: </span>{i.author.toUpperCase()}</div>
                    <div><span>Category: </span>{i.category.toUpperCase()}</div>
                    <div><span>Availability: </span>{i.quantity}</div>     
                    <button className={classes.editbtn} onClick={()=>{studentBookHandler(i)}}>Add</button>           
                    </li>
            })
        }

    </div>
}

export default BookList;