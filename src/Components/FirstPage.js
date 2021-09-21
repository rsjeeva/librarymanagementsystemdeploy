import React, { useEffect, useState } from "react";
import classes from '../UI/FirstPage.module.css';
import {Link} from 'react-router-dom';

function FirstPage(){

    let[newsStore, setNewsStore]=useState([]);
    // // let[coronaurl, setcoronaurl] = useState('');

    function fetchNews(){
        async function newsreader(){
            try{
            let response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9ac25f5da8194440b73d53d569be32b7");
            // console.log(response);
            let data = await response.json();
            // console.log(data.articles);
            displayNews(data.articles);
            }
            catch(err)
            {
                console.log(err);
            }
            
        }
        newsreader();
    }

    function displayNews(data){
        setNewsStore(data);
    }

    useEffect(()=>{
        fetchNews(); 
    },[]);



    return <div className={classes.firstpage}>
        <div className={classes.sidebar}>
            <ul>
                <Link className={classes.linkstyle} to='/firstpage/admin'>Admin</Link>
                <Link className={classes.linkstyle} to='firstpage/student'>Student</Link>
            </ul>
        </div>
        <div className={classes.firstpagecontent}>
            <div className={classes.headlines}><h1>Business Headlines</h1></div>
            <div className={classes.news}>
                {newsStore.map(i=>{
                    return <li key={i.title}>
                        {i.title}
                    </li>
                })}
            </div>
        </div>
    </div>
}

export default FirstPage;