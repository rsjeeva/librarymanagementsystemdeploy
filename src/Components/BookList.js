import React,{useContext, useState} from 'react';
import MainContext from '../Context/main-context';
import classes from '../UI/BookList.module.css';
import UpdateModal from '../Components/UpdateModal';

let filteredBooks=[];

function BookList(props){

    let ctx = useContext(MainContext);

    let[updateScreen, setupdateScreen]=useState(false);
    let bookDetails = JSON.parse(localStorage.getItem("BookDetails"));
    console.log("bd",bookDetails);

    
    filteredBooks = bookDetails.filter((i)=>{
        if(i.name.toLowerCase().includes(props.bookSearching.toLowerCase()))
        return i;
    });
    // console.log('fb',filteredBooks);

    function updateHandler(i){
        // console.log(i);
        setupdateScreen(prevState=>!prevState);
        let updatingBookDetails ={
            id:i.bookID,
            name:i.name,
            author:i.author,
            category:i.category,
            quantity:i.quantity
        };
        console.log(updatingBookDetails);
        ctx.updatingBookDetails=updatingBookDetails;
    }

    function updatedHandler(){
        setupdateScreen(false);
    }

    return <div>
        
        {props.bookupd
            ?
            
           filteredBooks.map((i)=>{
            //    console.log(i.bookID);
               return <li key={i.bookID} className={classes.bookliststyle}>
                    <div><span>Book Name: </span>{i.name.toUpperCase()}</div>
                    <div><span>Book Author: </span>{i.author.toUpperCase()}</div>
                    <div><span>Category: </span>{i.category.toUpperCase()}</div>
                    <div><span>Availability: </span>{i.quantity}</div>                   
                   </li>
           })
           :
            filteredBooks.map((i)=>{
                return <li key={i.bookID} className={classes.bookliststyle}>
                    <div><span>Book Name: </span>{i.name.toUpperCase()}</div>
                    <div><span>Book Author: </span>{i.author.toUpperCase()}</div>
                    <div><span>Category: </span>{i.category.toUpperCase()}</div>
                    <div><span>Availability: </span>{i.quantity}</div>     
                    <button className={classes.editbtn} onClick={()=>{updateHandler(i)}}>Edit</button>           
                    </li>
            })
        }
        {updateScreen && <UpdateModal updateHandler={updateHandler} updatedHandler={updatedHandler}></UpdateModal>}

    </div>
}

export default BookList;