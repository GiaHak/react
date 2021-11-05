import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import Planets from './Planets';


const View= () => {
    const { lists, id } = useParams();

    const [info, setInfo] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${lists}/${id}/`)
            .then(res=>{
                console.log("using axios for info")
                console.log(res)
                setInfo(res.data)

            })
            .catch(err=>console.log(err))
    },[lists,id])


    return (
        
        <div>
            {lists=="people"?
                <>
                    <h2> {info.name} </h2>
                    <h5>Mass: {info.mass}</h5>
                    <h5>Height: {info.height}</h5>
                    <h5>Skin Color: {info.skin_color}</h5>  
                    <h5>Hair Color: {info.hair_color}</h5>
                </>:
                lists=="planets"?
                <>
                <h1>Planet info:</h1>
                <Planets  name={info.name} climate={info.climate} terrain={info.terrain} population={info.population}>
                </Planets>
                </>:
                lists=="films"?
                <>
                    <h1>Film Info:</h1>
                    <h5>Title: {info.title}</h5>
                    <h5>Director: {info.director}</h5>
                    <h5>Producer: {info.producer}</h5>
                    <h5>Episode: {info.episode_id}</h5>
                </>:
                <>
                    <h1>These aren't the droids you're looking for</h1>
                    <img src="https://starwarsblog.starwars.com/wp-content/uploads/2021/02/20-best-star-wars-droids-TALL.jpg"alt=""  width="700px" />
                </>
            }

        </div>
    );
};

export default View;