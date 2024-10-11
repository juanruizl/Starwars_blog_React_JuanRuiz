import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from './views/Home.jsx';
import  Details  from './views/Details.jsx';
import  Characters  from './views/Characters.jsx';
import  Planets  from './views/Planets.jsx';
import  Starships  from './views/Starships.jsx';
import  Navbar  from './component/Navbar.jsx';
import injectContext from './store/appContext.js';
import { Footer } from "./component/footer.js";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:inf/:id" element={<Details />} /> 
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);