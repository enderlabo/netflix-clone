import React, { useEffect, useState } from 'react'

import './UI.css'

export const Navbar = () => {

    const [ show, handleShow ] = useState(false);

    //Listener from window
    useEffect(() => {
        
        window.addEventListener("scroll", () => {
            if( window.scrollY > 100 ) {
                handleShow( true )
            }else handleShow( false )

        })
                return () => {
                    window.removeEventListener("scroll");
                }
        
    }, [])


    return (
        <div className={`nav ${ show && "nav__black" }`}>
            <img className="nav__logo"
            src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" 
            alt="Netflix Logo" 
            />


            <img className="nav__avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
            alt="Avatar Logo" 
            />
        </div>
    )
}
