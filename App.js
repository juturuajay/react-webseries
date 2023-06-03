import React from "react";
import ReactDOM from 'react-dom/client'

const elem = <span>Hello span</span>

const jsxheading = (
    <div>
       <h1>{elem}</h1>
       <h1>Hello JSX using react element</h1>
       
    </div>
   )

const FunctionalComponent = () => (
   <div id="container">
       {jsxheading}
        <h1>Hello FunctionalComponent</h1>
        <h2>Hello F2</h2>
    </div>
)




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<FunctionalComponent />)