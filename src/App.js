import React from "react";
import ReactDOM from "react-dom/client";
import resObj from './Utils/MockData';

import Header from './components/Header';
import Body from './components/Body';



const AppLayout = ()=>{
    return(
     
        <div className="app">
            <Header/>
            
            <Body res = {resObj}></Body>
        </div>
    )
}

 const root = ReactDOM.createRoot(document.getElementById("foodApp"));

 root.render(<AppLayout></AppLayout>);

export default AppLayout;