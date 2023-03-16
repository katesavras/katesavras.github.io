import React from "react";
import {BsFacebook, BsGithub, BsLinkedin} from "react-icons/bs";
import './style.scss'
const Header = () => {

    return <header className="header">
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <ul className='header__media'>
                        <li><a href="https://github.com/katesavras?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <BsGithub
                            color='white'
                            size='30'/></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/ekaterina-savras/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin
                            color='white'
                            size='30'/></a>
                        </li>
                        <li><a href="https://www.facebook.com/profile.php?id=100009667419669"
                               target="_blank" rel="noopener noreferrer">
                            <BsFacebook
                            color='white' size='30'/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
}

export default Header;
