import React, { useContext } from "react";
import { Context } from "../store/appContext";
import  Card  from '../component/Card.jsx';

const Starships = () => {
    const { store } = useContext(Context);

    return (
        <div className="container-fluid bg-dark text-white">
            <h2 className="my-4">Naves Espaciales</h2>
            <div className="row">
                {store.starships.map((starship, id) => (
                    <div key={id} className="col-md-4 col-sm-6 mb-4">
                        <Card item={starship} type="starships" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Starships;
