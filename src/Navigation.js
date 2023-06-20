import {React, useState } from "react";
import logo from './images/logo.svg';
import up from './images/icon-arrow-up.svg';
import down from './images/icon-arrow-down.svg';
import './css/Navigation.css';
import x from './images/icon-close-menu.svg';
import burger from './images/icon-menu.svg';
import todo from './images/icon-todo.svg';
import calendar from './images/icon-calendar.svg';
import reminders from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';


export default function Navigation() {
    const [isOpen, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!isOpen);
    };

    const [features, setFeatures] = useState(false)
    const handleFeatures = () => {
        setFeatures(!features);
    };

    const [company, setCompany] = useState(false)
    const handleCompany = () => {
        setCompany(!company);
    };

   





    return (
        <div className="navigation" >
        <img src={logo} alt="logo" />

            <div className={!isOpen ? "nobg" : "menu" }>

            <div className="hamburger" onClick={handleOpen} >
            <img src={x} alt="close icon" className= {!isOpen ? "close" : "" } />
            <img src={burger} alt="open icon" className= {!isOpen ? "" : "close" }/>
            </div>
        

            <nav className= {!isOpen ? "close" : " " }>
                <div className="dropdown">
                <span onClick={handleFeatures}>Features <img src={ features ? down : up} alt="icon arrow"/></span>
                <ul className={!features ? "close" : ""}>
                    <li><img src={todo} alt="todo icon" className="dropicons"/>Todo List</li>
                    <li><img src={calendar} alt="calender icon"  className="dropicons"/> Calender</li>
                    <li><img src={reminders} alt="reminders icon"  className="dropicons"/> Reminders</li>
                    <li><img src={planning} alt="planning icon"  className="dropicons"/> Planning</li>
                </ul>
                </div>

                <div className="dropdown">
                <span onClick={handleCompany}>Company <img src={ company ? down : up} alt="icon arrow"/></span>
                <ul className= {!company ? "close" : ""} >
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                </ul>
                </div>

                <div>Careers</div>
                <div>About</div>
           

            <div className="signin">
                <div>Login</div>
                <div className="register">Register</div>
            </div>

            </nav>

            </div>
   
        </div>

    )
}