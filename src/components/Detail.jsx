import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function Detail(){
    const {id} = useParams()
    const [character,setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => setCharacter(data)
        );
    },[]);

    return (
        <div>
        {character.name ? (
        <>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <img src={character.image} alt='' />
        </>
        ): (
            <h3>Loading...</h3>
        )}
        </div>
    )
}

export default Detail;