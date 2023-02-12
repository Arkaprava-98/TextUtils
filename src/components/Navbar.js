import React from 'react'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
            <a className="navbar-brand mx-5 px-2 h4 d6" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end mx-5 px-2" id="navbarSupportedContent">
                <ul className="navbar-nav float-right">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.link3}</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

