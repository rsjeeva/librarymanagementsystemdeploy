import React from 'react';
import { useState } from 'react/cjs/react.development';
import classes from '../UI/OrderBooks.module.css';
import SearchBooks from '../Components/SearchBooks';

function OrderBooks(){

    

    return <div className={classes.searchbooks}>
        <SearchBooks orderbtn={true}/>
    </div>
}

export default OrderBooks;