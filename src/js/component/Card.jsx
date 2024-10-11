import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({ item, type }) => {
    const { actions, store } = useContext(Context);
    const isFavorite = store.favorites.some(fav => fav.uid === item.uid && fav.type === type);

    const imgUrl = `https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`;

    return (
        <div className="card bg-dark text-light mx-1 shadow-sm" style={{ minWidth: "200px", maxWidth: "100%", marginBottom: "20px" }}>
            <img
                src={imgUrl}
                className="card-img-top"
                alt={item.properties.name}
                onError={(e) => { e.target.src ='https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg'; }}
                style={{ objectFit: "cover", height: "250px" }}
            />
            <div className="card-body">
                <h5 className="card-title">{item.properties.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/details/${type}/${item.uid}`} className="btn btn-outline-light btn-sm">
                        Saber más
                    </Link>
                    <button
                        className={`btn ${isFavorite ? "btn-light" : "btn-outline-light"} btn-sm`}
                        onClick={() => actions.toggleFavorite(item, type)}
                    >
                        <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
