import React from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
            <header className="header">

                <Link to="/" className="logo"> <i className="fas fa-utensils"></i> food </Link>

                <nav className="navbar">
                    <Link to="/">home</Link>
                    <a href="#about">about</a>
                    <a href="#popular">popular</a>
                    <a href="#category">menu</a>
                    <a href="#order">order</a>
                    <a href="#blogs">blogs</a>
                </nav>

                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars"></div>
                    <div id="search-btn" className="fas fa-search"></div>
                    <div id="cart-btn" className="fas fa-shopping-cart"></div>
                    <div id="login-btn" className="fas fa-user"></div>
                </div>
            </header>
    )
}
