import React, { useContext } from "react";
import { Context } from "../store/appContext";
import  Card from '../component/Card.jsx';

const Planets = () => {
    const { store } = useContext(Context);

    return (
        <div className="container-fluid bg-dark text-white">
            <h2 className="my-4">Planetas</h2>
            <div className="row">
                {store.planets.map((planet, id) => (
                    <div key={id} className="col-md-4 col-sm-6 mb-4">
                        <Card item={planet} type="planets" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planets;
