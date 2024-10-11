import React from "react";
import { Link } from "react-router-dom";
import Favorites from './FavoritesList.jsx';

const Navbar = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-black px-3">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" 
                        alt="Star Wars Logo" 
                        width="120" 
                        height="85" 
                    />
                </Link>
                
                {/* Botón para móviles */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <Link to="/characters" className="nav-link text-light">Personajes</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/planets" className="nav-link text-light">Planetas</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/starships" className="nav-link text-light">Naves Espaciales</Link>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">
                    <Favorites />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
