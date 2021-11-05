import React from 'react';

const Planets = (info) => {
    return (
        <div>
            <h3>Name: {info.name}</h3>
            <h3>Climate: {info.climate}</h3>
            <h3>Terrain: {info.terrain}</h3>
            <h3>Population: {info.population}</h3>
        </div>
    );
};


export default Planets;