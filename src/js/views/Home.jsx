import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import Card from '../component/Card.jsx';

const Home = () => {
    const { store } = useContext(Context);

    const starshipsRef = useRef(null);
    const planetsRef = useRef(null);
    const charactersRef = useRef(null);

    const scroll = (scrollRef, direction) => {
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    };

    return (
        <div className="container-fluid bg-black text-white py-5">
            <div className="my-5">
                <h2 className="text-light">Personajes</h2>
                <div className="position-relative">
                    <button 
                        className="scroll-btn-left btn btn-outline-light position-absolute top-50 translate-middle-y" 
                        style={{ left: "0" }} 
                        onClick={() => scroll(charactersRef, "left")}
                    >
                        &lt;
                    </button>
                    <button 
                        className="scroll-btn-right btn btn-outline-light position-absolute top-50 translate-middle-y" 
                        style={{ right: "0" }} 
                        onClick={() => scroll(charactersRef, "right")}
                    >
                        &gt;
                    </button>
                    <div className="scrolling-wrapper row flex-row flex-nowrap overflow-hidden pt-2" ref={charactersRef}>
                        {store.people.map((character, id) => (
                            <div key={id} className="col-auto">
                                <Card item={character} type="characters" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h2 className="text-light">Planetas</h2>
                <div className="position-relative">
                    <button 
                        className="scroll-btn-left btn btn-outline-light position-absolute top-50 translate-middle-y" 
                        style={{ left: "0" }} 
                        onClick={() => scroll(planetsRef, "left")}
                    >
                        &lt;
                    </button>
                    <button 
                        className="scroll-btn-right btn btn-outline-light position-absolute top-50 translate-middle-y" 
                        style={{ right: "0" }} 
                        onClick={() => scroll(planetsRef, "right")}
                    >
                        &gt;
                    </button>
                    <div className="scrolling-wrapper row flex-row flex-nowrap overflow-hidden pt-2" ref={planetsRef}>
                        {store.planets.map((planet, id) => (
                            <div key={id} className="col-auto">
                                <Card item={planet} type="planets" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h2 className="text-light">Naves Espaciales</h2>
                <div className="position-relative">
                    <button 
                        className="scroll-btn-left btn btn-outline-light position-absolute top-50 translate-middle-y" 
                        style={{ left: "0" }} 
                        onClick={() => scroll(starshipsRef, "left")}
                    >
                        &lt;
                    </button>
                    <button 
                        className="scroll-btn-right btn btn-outline-light position-absolute top-50 translate-middle-y" 
                        style={{ right: "0" }} 
                        onClick={() => scroll(starshipsRef, "right")}
                    >
                        &gt;
                    </button>
                    <div className="scrolling-wrapper row flex-row flex-nowrap overflow-hidden pt-2" ref={starshipsRef}>
                        {store.starships.map((starship, id) => (
                            <div key={id} className="col-auto">
                                <Card item={starship} type="starships" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
