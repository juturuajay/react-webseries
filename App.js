import React from "react";
import ReactDOM from 'react-dom/client'


const heading = React.createElement("div", {
    id: "parent"},[React.createElement("div", {
        id: "child1"},[React.createElement("h1", {
        },"I am an H1 tag"),React.createElement("h2", {
        },"I am an H2 tag")]),React.createElement("div", {
            id: "child2"},[React.createElement("h1", {
            },"I am an H1 tag"),React.createElement("h2", {
            },"I am an H2 tag")])]);


 
const root = ReactDOM.createRoot(document.getElementById("headerr"));

root.render(heading)