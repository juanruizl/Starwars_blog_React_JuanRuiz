import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Favorites = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="btn-group dropstart">
            <button 
                type="button" 
                className="btn btn-outline-light text-light dropdown-toggle" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
            >
                <i className="bi bi-heart"></i> Favoritos ({store.favorites.length})
            </button>
            <ul className="dropdown-menu bg-dark text-light">
                {store.favorites.length === 0 ? (
                    <li className="dropdown-item text-light">No hay favoritos seleccionados</li>
                ) : (
                    store.favorites.map((item, index) => (
                        <li key={index} className="d-flex justify-content-between align-items-center m-2">
                            <Link to={`/details/${item.type}/${item.uid}`} className="dropdown-item text-light">
                                {item.properties.name}
                            </Link>
                            <button 
                                className="btn btn-outline-danger btn-sm ms-2"
                                onClick={(e) => {
                                    e.stopPropagation(); // Evitar que el dropdown se cierre
                                    actions.removeFavorite(index);
                                }}
                            >
                                <i className="bi bi-trash"></i>
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Favorites;
