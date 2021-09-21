import React,{useState} from "react";
import { useEffect } from "react/cjs/react.development";


const MainContext= React.createContext({
});

 export const ContextProvider = (props)=>{

    let [uID, setUID] = useState('');
    let [userDetails, setuserDetails] = useState({});

    function uIDtoggler(data){
        setUID(data);
    }

    function userDetailsToggler(data)
    {
        // console.log('dd',data);
        setuserDetails(JSON.parse(data));
    }

    const contextValue={
        uID:uID,
        userDetails:userDetails,
        uIDtoggler:uIDtoggler,
        userDetailsToggler:userDetailsToggler,
    }

    return <MainContext.Provider value={contextValue}>
        {props.children}
    </MainContext.Provider>

};


export default MainContext;