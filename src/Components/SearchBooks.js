import React, { useContext, useState } from 'react';
import MainContext from '../Context/main-context';
import classes from '../UI/SearchBooks.module.css';
import BookList from './BookList';
import BookListOrder from './BookListOrder';


function SearchBooks(props){

    let ctx = useContext(MainContext);

    let bookDetails = JSON.parse(localStorage.getItem("BookDetails"));


    let[searching, setSearching] = useState('');
    let[searchupd, setSearchBooksupd] = useState('');
    let bookupd=true;

    function searchToggler(event){
        setSearching(event.target.value);
    }

    function searchBookToggler(e){
        e.preventDefault();
        setSearchBooksupd(searching);
    }

    return <div className={classes.searchbooks}>
    <div>
        <form  onSubmit={searchBookToggler}>
            <input type='text' onChange={searchToggler} value={searching} placeholder='Search Books'></input>
        </form> 
    </div>
    <div className={classes.booklist}>
        {props.orderbtn?
            <BookListOrder bookSearching={searching} orderBtn={props.orderbtn} bookDetails={bookDetails}/>
            :
            <BookList bookupd={bookupd} bookSearching={searching} bookDetails={bookDetails}/>
        }
    </div>
    </div>

}

export default SearchBooks;