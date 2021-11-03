import React from 'react';
import { useParams } from 'react-router';

const Color = () => {
    const {id, color, bc} = useParams();

    return (

        <div>
        <h1>The number is: #{id}</h1>

        <h2 style = {{color:color, backgroundColor: bc}}>the word is: hello {color} </h2>
        </div>

    )

};

export default Color;