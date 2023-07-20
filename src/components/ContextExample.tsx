import React from "react";
import { usePokemon, PokemonProvider } from "../store";
import {Link, Outlet, ReactLocation, Router, useMatch,} from "@tanstack/react-location";

const location = new ReactLocation();

const SearchBox = () => {
    const { search, setSearch } = usePokemon();

    return <>
        <input
            type="text"
            placeholder="Search"
            className="searchBar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </>
}

const PokemonList = () => {
    const {pokemon} = usePokemon();

    return <ul>
        {
            pokemon.map(pkm => 
                <Link key={pkm.id} to={`/pokemon/${pkm.id}`}>
                    <li>
                        { pkm.name }
                    </li>
                </Link>
            )
        }
    </ul>
}

const PokemonDetails = () => {
    const {params: {id}} = useMatch();
    const {pokemon} = usePokemon();

    const pokemonData = pokemon.find(p => p.id === parseInt(id))
    if (!pokemonData) {
        return <div>No pokemon found</div>
    }
    return (<>
        <Link to={"/"}>
            Home
        </Link>
        <div className="pokemonDetailsWrapper">
            <img src="https://easydrawingguides.com/wp-content/uploads/2018/10/how-to-draw-balbasaur-pokemon-featured-image-1200.png" alt={pokemonData.name} className="roundedImage" />
            <div className="pokemonDeatilsInnerWrapper">
                <h2>{pokemonData.name}</h2>
                <div>
                    <h3 style={{color: "#a3a3a3", marginTop: "6px",}}>Stats</h3>
                    <hr style={{width: "50%", margin: "4px auto"}} />  
                    <ul style={{lineHeight: "1.5"}}>
                        {[
                            "hp",
                            "attack",
                            "defense",
                            "special_attack",
                            "special_defense",
                            "speed"
                        ].map(stat => (
                            <li key={stat}>
                                <span>{stat}</span>
                                <span>{pokemonData[stat as keyof typeof pokemonData]}</span>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </>)
}

const routes = [
    {
        path: "/",
        element: (
            <>
                <h3>Main Route</h3>
                <h4>Context Example - using typed script tsx</h4>
                <SearchBox />
                <PokemonList />
            </>
        )
    },
    {
        path: "/pokemon/:id",
        element: (
            <>
                <PokemonDetails />
            </>
        )
    }
]

const ContextExample = () => {
    return (
    <PokemonProvider>
        <Router location={location} routes={routes}>
            <div>
                <Outlet />
            </div>
        </Router>
    </PokemonProvider>
)}

export default ContextExample;