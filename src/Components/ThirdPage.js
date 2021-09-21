import React from "react";
import {Route, Switch, Redirect, NavLink, useHistory} from 'react-router-dom';
import classes from '../UI/ThirdPage.module.css';
import MyOrder from "./MyOrder";
import OrderBooks from "./OrderBooks";
import Return from "./Return";
import SearchBooks from "./SearchBooks";

function ThirdPage(){

    let bookDetails = JSON.parse(localStorage.getItem("BookDetails"));

    let history = useHistory();

    function logOutHandler(){
        localStorage.removeItem("CurrentUser");
        history.replace('/');
    }
    return <div className={classes.thirdpage}>
    <div className={classes.sidebar}>
        <ul>
            <NavLink activeClassName={classes.selected} className={classes.linkstyle} to='/studentpage/searchbooks'>Books Search</NavLink>
            <NavLink activeClassName={classes.selected} className={classes.linkstyle} to='/studentpage/myorder'>My Order</NavLink>
            <NavLink activeClassName={classes.selected} className={classes.linkstyle} to='/studentpage/returnbook'>Return</NavLink>
            <NavLink activeClassName={classes.selected} className={classes.linkstyle} to='/studentpage/neworder'>New Order</NavLink>
            <div className={classes.linkstyle} onClick={logOutHandler}>Logout</div>
        </ul>
    </div>
    <div className={classes.thirdpagecontent}>
        <Switch>
            <Route path='/studentpage' exact>
                <Redirect to='/studentpage/searchbooks'></Redirect>
            </Route>
        <Route path='/studentpage/searchbooks'>
            {bookDetails?<SearchBooks/>:<p>No books in the library</p>}
        </Route>
        <Route path='/studentpage/myorder'>
            <MyOrder/>
        </Route>
        <Route path='/studentpage/returnbook'>
            <Return/>
        </Route>
        <Route path='/studentpage/neworder'>
            {bookDetails?<OrderBooks/>:<p>No books in the library</p>}
        </Route>
        </Switch>
    </div>
</div>
}

export default ThirdPage;
