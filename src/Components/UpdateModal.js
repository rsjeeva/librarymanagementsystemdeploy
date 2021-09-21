import React,{useState, useContext} from "react";
import MainContext from "../Context/main-context";
import classes from '../UI/UpdateModal.module.css';

function UpdateModal(props){

    let ctx = useContext(MainContext);

    let[bookName, setBookName] = useState(ctx.updatingBookDetails.name);
    let[bookAuthor, setBookAuthor] = useState(ctx.updatingBookDetails.author);
    let[booksCategory, setbookscategory] = useState(ctx.updatingBookDetails.category);
    let[quantity, setQuantity] = useState(ctx.updatingBookDetails.quantity); 

    function updateFormHandler(e){
        e.preventDefault();
        
        console.log(bookName,bookAuthor, booksCategory, quantity, ctx.updatingBookDetails.id);

        let updatedarr={
            bookID:ctx.updatingBookDetails.id,
            name:bookName,
            author:bookAuthor,
            quantity:quantity,
            category:booksCategory
        };

        console.log(updatedarr);
        let x = JSON.parse(localStorage.BookDetails);
        let y = x.map((i)=>{
            if(i.bookID===updatedarr.bookID)
            {
                i=updatedarr;
            }

            return i;
        });
        console.log('y',y);

        localStorage.setItem("BookDetails",JSON.stringify(y));

        

        // alert("book updated!!!");


        props.updatedHandler();

    }

    return <div>
        <div className={classes.backdrop} onClick={()=>{props.updatedHandler()}}></div>
        <div className={classes.modal}>
        <form onSubmit={updateFormHandler}>
            <div>
                <span>Book Name</span>
                <input type='text' onChange={(e)=>{setBookName(e.target.value)}} value={bookName}></input>
            </div>
            <div>
                <span>Author</span>
                <input type='text' onChange={(e)=>{setBookAuthor(e.target.value)}} value={bookAuthor}></input>
            </div>
            <div>
                <span>Category</span>
                <input type='text' onChange={(e)=>{setbookscategory(e.target.value)}} value={booksCategory}></input>
            </div>
            <div>
                <span>Quantity</span>
                <input type='number' onChange={(e)=>{setQuantity(e.target.value)}} value={quantity}></input>
            </div>
            <button className={classes.updatebtn}>Update</button>
        </form>
        </div>
    </div>
}

export default UpdateModal;