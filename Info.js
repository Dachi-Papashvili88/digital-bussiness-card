import React from "react"


export default function Info(){
    return (
        <div className="info">
        <img class="profile-image"src="./images/profile-photo.png"/>
        <h1>Laura Smith</h1>
        <h4>Frontend Developer</h4>
        <p className="website">laurasmith.website</p>
        <div className="my-info">
        <div className="email">
        <h3><i class="fa-solid fa-envelope"></i>Email</h3>
        </div>
        <div className="linkedin">
        <h3><i class="fa-brands fa-linkedin"></i>Linkedin</h3>
        </div>
        </div>
        </div>
    )
}
