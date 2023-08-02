import React from "react";
import  ReactDOM  from "react-dom/client";

const Title = ()=>{
    return (
        <div>
            <h2>This is title.</h2>
        </div>
    )
}


const App = ()=>{ 
       return (
        <div>
            <Title></Title>
            {T}
             <h1> Welcome to React JSX.</h1>;        
        </div>
        )
};

// jsx element
const T = <h1>hello</h1>;

const rootDiv = ReactDOM.createRoot(document.getElementById("root"));
console.log(App);
rootDiv.render(<App/>);