import React, { useContext } from "react";
import { Context } from "../store/appContext";
import  Card  from '../component/Card.jsx';

const Characters = () => {
    const { store } = useContext(Context);

    return (
        <div className="container-fluid bg-dark text-white">
            <h2 className="my-4"> Personajes </h2>
            <div className="row">
                {store.people.map((character, id) => (
                    <div key={id} className="col-md-4 col-sm-6 mb-4">
                        <Card item={character} type="characters" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;
