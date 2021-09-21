import React,{useState, useEffect} from "react";
import classes from '../UI/UpdateBook.module.css';
import BookList from "./BookList";

function UpdateBook(){

    let bookupd = false;
    let[searching, setSearching] = useState('');
    let[searchupd, setSearchBooksupd] = useState('');

    function searchToggler(event){
        setSearching(event.target.value);
        // console.log(searching);
    }

    function searchBookToggler(e){
        e.preventDefault();
        setSearchBooksupd(searching);
    }

    return <div className={classes.updatebooks}>
    <div>
       <form  onSubmit={searchBookToggler}>
            <input type='text' onChange={searchToggler} value={searching} placeholder='Search Books'></input>
        </form> 
    </div>
    <div>
        <BookList bookupd={bookupd} bookSearching={searching}/>
    </div>
    
    </div>
}

export default UpdateBook;