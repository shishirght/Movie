import { useState } from 'react';
import './Movie.css';

function Movie(number){

    return(
        <>        
        <div className='#div1'>
            
            <img  
            src="https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/singham-returns-1678889360141.jpg?imformat=chrome"
            alt='Singham Movie Poster'  height="200" width="250" />
            <h1>Poster Singham </h1>
            
        </div>
        </>

    );
}

export default Movie;