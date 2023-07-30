
// single html element 
//heading element                   (//element,    // attributes or props,       //children);
const heading = React.createElement("h1",        {id:"heading",xyz:"test"},  "Hello World From React");


// lets create nested html structure suing react
        // <div id="parent">
        //     <div id="child">
        //         <h1> !' am an h1 tag</h1>
        //     </div>
        // </div>

// nested html structure
const parent = React.createElement("div",{id:"parent"},
      (React.createElement("div", {id:"child"},
      [React.createElement("h1",{},"I 'am an h1 tag"),
      React.createElement("h2",{},"I 'am an h2 tag") ]
      )));          
//note*  createElement creates an object
    

// root using DOM and javascript;
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
// root.render(heading);

// render converts object to an html
root.render(parent);