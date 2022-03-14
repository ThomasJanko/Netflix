import React, { useEffect, useState } from 'react';
import Movies from '../../components/Movies';
import movieService from '../../service/movie.service';

const Index = () => {

    const [movies, setMovies] = useState()
    const [homemovie, setHomemovie] = useState()
    useEffect(() => {
        
    movieService.getMovies()
        .then((res) => {
             setMovies(res.data.results)
            setHomemovie(res.data.results[0])
            console.log(res.data.results[0])
        })

    
        
    }, []);
    return (
        <div>

            <div className='home_movie'>
                {homemovie ? 
                    <>
                <h1>{homemovie.title}</h1> 
                <img src={`https://image.tmdb.org/t/p/original/${homemovie.backdrop_path}`} alt=""/>
                </>
                  : <> </>}

                
            </div>
            {movies && movies.map((movie) => (
            <Movies movie={movie} /> 
        ))}
        </div>
    );
}

export default Index;
