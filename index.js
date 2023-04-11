import React from 'react';
import ReactDOM from 'react-dom/client';
import Info from "./Info"
import AboutMe from "./About"
import ContactDetails from "./Contact"


export default function App() {
  return (
    <div className="main">
    <Info/>
    <AboutMe/>
    <ContactDetails/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)