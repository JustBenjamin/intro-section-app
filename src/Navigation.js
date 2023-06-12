import React from "react";

export default function Navigation() {

    return (
        <div >
        <h1>Logo</h1>

            <div className="menu">

            <nav>
                <div className="dropdown">
                <span>Features</span>
                <ul>
                    <li>Todo List</li>
                    <li>Calender</li>
                    <li>Reminders</li>
                    <li>Planning</li>
                </ul>
                </div>

                <div className="dropdown">
                <span>Company</span>
                <ul>
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                </ul>
                </div>

                <div>Careers</div>
                <div>About</div>
            </nav>

            <div>
                <div>Login</div>
                <div className="register">Register</div>
            </div>


            </div>
   
        </div>

    )
}