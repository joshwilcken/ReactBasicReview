import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    render() {
        return(
            <div className='navBar'>
                <div>
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Contact</h1>
                </div>
            </div>
        )
    }

}

export default Header 