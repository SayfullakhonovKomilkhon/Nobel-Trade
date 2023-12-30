import React from "react";
import logo from "../images/logo.svg";
import '../sass/navbar.scss'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img className="headerImg" src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">ГЛАВНАЯ <span
                            className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/Advantages.js">НАШИ ПРЕИМУЩЕСТВА</a>
                        <a className="nav-item nav-link" href="#">О КОМПАНИИ</a>
                        <a className="nav-item nav-link " href="#">ПАРТНЕРЫ</a>
                        <a className="nav-item nav-link " href="#">КАТАЛОГ</a>
                        <a className="nav-item nav-link " href="#">КОНТАКТЫ</a>
                    </div>
                    <div className="changeLanguage">
                        <div className="rus">rus</div>
                        <div className="uzb">uzb</div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;