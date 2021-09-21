import React, { useState} from 'react';
import classes from '../UI/AddBooks.module.css';


function AddBooks(){

    let[bookID, setBookID] = useState(0);
    let[bookName, setBookName] = useState('');
    let[bookAuthor, setBookAuthor] = useState('');
    let[booksCategory, setbookscategory] = useState('');
    let[quantity, setQuantity] = useState(0);  

    let bookarr = [];
    let x = JSON.parse(localStorage.getItem("BookDetails"));
    console.log(bookarr);


    function bookformtoggler(e){
        e.preventDefault();
        let bookobj={
            bookID:bookID,
            name:bookName, 
            author:bookAuthor, 
            quantity:quantity,
            category:booksCategory,
        };
        //local storage to store book details
        if(x)
        {
            bookarr=x;
        }
        bookarr=[...bookarr, bookobj];
        localStorage.setItem("BookDetails",JSON.stringify(bookarr));

        alert('book added')

        setBookID(0);
        setBookName('');
        setBookAuthor('');
        setbookscategory('');
        setQuantity(0);
    }

    return <div className={classes.addbookheader}>
        <div className={classes.bookheading}>
            Add New Book
        </div>
        <div className={classes.formheader}>
            <form className={classes.form} onSubmit={bookformtoggler}>
                <div>
                    <span>Book ID</span>
                    <input type='number' onChange={(e)=>{setBookID(e.target.value)}} value={bookID} required></input>
                </div>
                <div>
                    <span>Book Name</span>
                    <input type='text' onChange={(e)=>{setBookName(e.target.value)}} value={bookName} required></input>
                </div>
                <div>
                    <span>Author</span>
                    <input type='text' onChange={(e)=>{setBookAuthor(e.target.value)}} value={bookAuthor} required></input>
                </div>
                <div>
                    <span>Category</span>
                    <input type='text' onChange={(e)=>{setbookscategory(e.target.value)}} value={booksCategory} required></input>
                </div>
                <div>
                    <span>Quantity</span>
                    <input type='number' onChange={(e)=>{setQuantity(e.target.value)}} value={quantity} required></input>
                </div>
                    <button>Add</button>
            </form>
        </div>
    </div>
}

export default AddBooks;