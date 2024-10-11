import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const infoMap = {
    characters: [
        { label: "Altura", key: "height" },
        { label: "Peso", key: "mass" },
        { label: "Color de cabello", key: "hair_color" },
        { label: "Color de piel", key: "skin_color" },
        { label: "Color de ojos", key: "eye_color" },
        { label: "Año de nacimiento", key: "birth_year" },
        { label: "Género", key: "gender" }
    ],
    planets: [
        { label: "Gravedad", key: "gravity" },
        { label: "Terreno", key: "terrain" }
    ],
    starships: [
        { label: "Modelo", key: "model" },
        { label: "Clase de nave", key: "starship_class" },
        { label: "Fabricante", key: "manufacturer" },
        { label: "Costo en créditos", key: "cost_in_credits" },
        { label: "Longitud", key: "length" },
        { label: "Tripulación", key: "crew" },
        { label: "Pasajeros", key: "passengers" },
        { label: "Calificación de hiperimpulsor", key: "hyperdrive_rating" },
        { label: "Capacidad de carga", key: "cargo_capacity" },
        { label: "Consumibles", key: "consumables" }
    ]
};

const Details = () => {
    const { inf, id } = useParams();
    const [item, setItem] = useState(null);
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const getItem = async () => {
            try {
                const apiEndpoint = inf === "characters" ? "people" : inf;
                const response = await fetch(`https://www.swapi.tech/api/${apiEndpoint}/${id}`);

                if (!response.ok) throw new Error(`Error HTTP! Estado: ${response.status}`);

                const data = await response.json();
                if (data.result) {
                    setItem(data.result.properties);
                    setDescription(data.result.description || "Descripción no disponible");
                } else {
                    throw new Error("Error: El formato de los datos es incorrecto");
                }
            } catch (error) {
                console.error("Error al obtener los datos:", error);
                setError(error.message);
            }
        };

        getItem();
    }, [inf, id]);

    if (error) return <div className="text-white">Error: {error}</div>;
    if (!item) return <div className="text-white">Cargando...</div>;

    return (
        <div className="container-fluid bg-dark text-white py-4">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/${inf}/${id}.jpg`}
                        onError={(e) => { e.target.src = 'https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg'; }}
                        className="img-fluid rounded"
                        alt={item.name || "Star Wars"}
                    />
                </div>
                <div className="col-md-6">
                    <h1>{item.name || "Nombre no disponible"}</h1>
                    <p>{description}</p>
                    <ul>
                        {infoMap[inf]?.map(({ label, key }) => (
                            <li key={key}>{label}: {item[key] || "No disponible"}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Details;
