import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from '../helpers/axios';
import movieTrailer from 'movie-trailer';

import './row.css';

function Row({ title, fetchUrl, isLargeRow }) {

    const base_url = "https://image.tmdb.org/t/p/original/";
    const [ movies, setMovies ] = useState([]);
    const [ trailerUrl, setTrailerUrl ] = useState("");

    
    useEffect( () => {

       async function fetchData() {
            const request = await axios.get( fetchUrl );

            setMovies( request.data.results )
            return request;
        }

        fetchData();

    }, [ fetchUrl ]);

    console.log(movies)
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    
    const handleClick = ( movie ) => {

        if( trailerUrl ){
            setTrailerUrl("");
        } else {
            movieTrailer( movie?.name || "" )
            .then( (base_url) => {
                //get params from url https://www.youtube.com/watch?v=BBe2BvssBgY
                const urlParams = new URLSearchParams( new URL( base_url ).search );
                setTrailerUrl( urlParams.get('v'))
            })
            .catch( err => console.log(err) )
        }
    }

    return (
        <div className="row">
            <h2>{ title }</h2>
           
            <div className="row__posters">
            {
                movies.map( movie => (
                    <img key={ movie.id } className={`row__poster ${ isLargeRow && "row__posterLarge"} `}
                    onClick={ handleClick( movie ) } 
                    src={ `${ base_url }${ isLargeRow ? movie.poster_path : movie.backdrop_path }` } 
                    alt={ movie.name } />
                ))
            }
            </div>
            { trailerUrl && <YouTube videoId={ trailerUrl } opts={ opts } />}
        </div>
    )
}

export default Row

    
