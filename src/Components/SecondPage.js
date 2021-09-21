import React from "react";
import classes from '../UI/SecondPage.module.css';
import {Link,NavLink,Route} from 'react-router-dom';
import AddBooks from "./AddBooks";
import SearchBooks from "./SearchBooks";
import UpdateBook from "./UpdateBook";
import OrderDetails from "./OrderDetails";

function SecondPage(){
    let bookDetails = JSON.parse(localStorage.getItem("BookDetails"));
    return <div className={classes.secondpage}>
    <div className={classes.sidebar}>
        <ul>
            <NavLink activeClassName={classes.selected} className={classes.linkstyle} to='/adminpage/addbooks'>Add Books</NavLink>
            <NavLink activeClassName={classes.selected} className={classes.linkstyle} to='/adminpage/searchbooks'>Books Search</NavLink>
            <NavLink activeClassName={classes.selected} className={classes.linkstyle} to='/adminpage/updatebooks'>Book Update</NavLink>
            <NavLink activeClassName={classes.selected} className={classes.linkstyle} to='/adminpage/orderdetails'>View Order</NavLink>
            <Link activeClassName={classes.selected} className={classes.linkstyle} to='/'>Logout</Link>
        </ul>
    </div>
    <div className={classes.secondpagecontent}>
        <Route path='/adminpage/addbooks'>
            <AddBooks/>
        </Route>
        <Route path='/adminpage/searchbooks'>
           {bookDetails?<SearchBooks/>:<p>No Books Available... Please add new books</p>}
        </Route>
        <Route path='/adminpage/updatebooks'>
            {bookDetails?<UpdateBook/>:<p>No Books Available... Please add new books</p>}
        </Route>
        <Route path='/adminpage/orderdetails'>
            {true?<OrderDetails/>:<p>No Books Available... Please add new books</p>}
        </Route>
    </div>
</div>
}

export default SecondPage;