import React from 'react';
import '../sass/header.scss';
import logo from '../images/logo.svg'
import capsule from '../images/header-capsule-text.svg'
import headerLogoOil from '../images/header-logo.svg'
import aboutImg from "../images/header-capsule-text-mini.svg";
import rectengleImg from "../images/squre-elemrnt.svg";
import videoPlayer from "../images/videoplayer.png";
import oilCard from '../images/oil-col-4-card.png'
import bottom5Card from '../images/bottom-col-5-card.png'
import top5Card from '../images/top-col-5-card.png'
import top3CardMain from '../images/top-col-3-card.png'
import bottom3CardMini from '../images/bottom-col-3-card.png'
import arrow from '../images/arrow-top-right-large.svg'
import footerLogo from  '../images/footer-logo.svg'
import instagram from '../images/white-instagram.svg'
import telegram from '../images/white-telegram.svg'
import phone from '../images/phone icon.svg'
import location from '../images/location icon.svg'
import years15 from '../images/15years-truck picture.png'
import uzbekistanMap from '../images/Uzbekistan map.png'
import oil8000 from '../images/8000-oil.png'


const Header = () => {
    return (
        <>
            <div className="home">
                <header className='header'>
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
                                <a className="nav-item nav-link" href="#">О КОМПАНИИ</a>
                                <a className="nav-item nav-link" href="#">НАШИ ПРЕИМУЩЕСТВА</a>
                                <a className="nav-item nav-link " href="#">КОНТАКТЫ</a>
                            </div>
                            <div className="changeLanguage">
                                <div className="rus">rus</div>
                                <div className="uzb">uzb</div>
                            </div>
                        </div>
                    </nav>
                    <section className='header-info'>
                        <div className="row">
                            <div className="col-7">
                                <h1>NOBEL
                                    <span className='header-capsule'>
                                <img className='header-capsule_img' src={capsule} alt=""/>
                                <span className='header-text_style'>TRADE</span>
                                </span>
                                </h1>
                                <p className="subtitle">
                                    Компания NOBEL TRADE - крупнейший импортёр
                                    подсолнечного масла и пальмового жира  в Республику Узбекистан
                                </p>
                            </div>
                            <div className="col-5">
                                {/*<img src={headerLogoOil} alt=""/>*/}
                            </div>
                        </div>
                    </section>
                </header>
                <div className="about">
                    <section className="main">
                        <h3 className="title">
                            О КОМПАНИИ
                            <span className="about-capsule"><img className='about-img' src={aboutImg} alt=""/></span>
                        </h3>
                        <p className="subtitle">
                            NOBEL TRADE является ключевым поставщиком Сухого Молока, Сыворотки,<br/>
                            Крахмала,Кукурузного и Картофельного крахмала, какао, различные крупы а также Патоки кукуруза
                            на рынок Узбекистана. <br/> Это молодое направление в бизнесе Компании,
                            но за короткое время мы уже успели завоевать доверие многих клиентов в Узбекистане.
                        </p>
                        <div className="row">
                            <div className="col-lg-4">
                                <img className='card1 carded' src={oilCard} alt=""/>
                            </div>
                            <div className="col-lg-5">
                                <div className="col-12">
                                    <img className='card2 carded' src={top5Card} alt=""/>
                                </div>
                                <div className="col-12">
                                    <img className='card2 card3 carded' src={bottom5Card} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="col-12">
                                    <img className='card4 carded' src={top3CardMain} alt=""/>
                                </div>
                                <div className="col-12">
                                    <img className='card5 carded' src={bottom3CardMini} alt=""/>
                                </div>
                            </div>
                        </div>
                        <h2><span className='rectengle-img'><img src={rectengleImg} alt=""/></span>NOBEL TRADE</h2>
                        <p className='subtitle'>
                            Основана в 2009 году и в настоящее время в компании работают 150 человек.<br/>
                            Дистрибуционная сеть компании NOBEL TRADE состоит из 12 филиалов, со своими офисами<br/>
                            и складами, в 12 областях страны.
                        </p>
                        <img className='videoplayer' src={videoPlayer} alt=""/>
                    </section>
                    <section className="about-us">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card-about">
                                    <h3>15 лет</h3>
                                    <p className="subtitle">
                                        успешного опыта<br/>  на мировом рынке
                                    </p>
                                    <img src={years15} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-about">
                                    <h4>12 филиалов</h4>
                                    <p className="subtitle">
                                        со своими складами и <br/>  офисами в 12 областях  страны
                                    </p>
                                    <img src={uzbekistanMap} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-about">
                                    <h3>8000</h3>
                                    <p className="subtitle">
                                        торговых точек <br/>  достигает активная клиентская база
                                    </p>
                                    <img src={oil8000} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="card-about crad-fill"></div>
                            </div>
                        </div>
                    </section>
                    <section className='partners'>
                        <div className="partners-page">
                            <h2>НАШИ ПАРТНЕРЫ<span className='rectengle-img'><img src={rectengleImg} alt=""/></span></h2>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card-about">

                                    </div>
                                </div>
                            </div>
                            <h3>ДОЧЕРНИЕ КОМПАНИИ</h3>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="partners-card">

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="partners-card">

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="partners-card">

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="partners-card">

                                    </div>
                                </div>

                            </div>
                            <div className="be-partners">
                                <p className="subtitle">
                                    CТАНОВИТЕСЬ ПАРТНЕРАМИ И<br/> РАЗВИВАЙТЕСЬ ВМЕСТЕ С
                                </p>
                                <button className='btn'>ОТПРАВИТЬ ЗАЯВКУ <img src={arrow} alt=""/></button>
                            </div>
                            <p className='main-text'>NOBEL TRADE</p>
                        </div>
                    </section>
                </div>
                <footer className='footer'>
                    <div className="footer-components">
                        <div className="footer-form">
                            <p>АКТУАЛЬНЫЕ ВАКАНСИИ В<br/> НАШЕЙ КОМПАНИИ</p>
                            <button className='btn'>ОТПРАВИТЬ<br/>  СВОИ ДАННЫЕ <img src={arrow} alt=""/></button>
                        </div>
                        <div className="footer-navigate">
                            <div className="row">
                                <div className="col-lg-4 main">
                                    <img src={footerLogo} alt=""/>
                                    <ul className='navbar'>
                                        <li className='nav-item nav-link'>ГЛАВНАЯ</li>
                                        <li className='nav-item nav-link'>О КОМПАНИИ</li>
                                        <li className='nav-item nav-link'>ПАРТНЕРЫ</li>
                                        <li className='nav-item nav-link'>НАШИ ПРЕИМУЩЕСТВА</li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 main-part">
                                    <ul className='navbar'>
                                        <li className='nav-item nav-link'>КАТАЛОГ</li>
                                        <li className='nav-item nav-link'>ВАКАНСИИ</li>
                                        <li className='nav-item nav-link'>КОНТАКТЫ</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div className="footer-socials">
                                        <img src={instagram} alt=""/>
                                        <img src={telegram} alt=""/>
                                    </div>
                                    <div className="footer-contacts">
                                        <p className="phone-number">
                                            <img src={phone} alt=""/>
                                            +998 71 209 33 35
                                        </p>
                                        <p className="address">
                                            <img src={location} alt=""/>
                                            г. Ташкент, Кичик Халка Йули 4
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Header;