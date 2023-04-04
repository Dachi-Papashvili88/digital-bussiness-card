import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<App />, document.getElementById("root"))