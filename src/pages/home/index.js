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
                
                <img src={`https://image.tmdb.org/t/p/original/${homemovie.backdrop_path}`} alt=""/>

                <div className='home_text'>
                <h1>{homemovie.title}</h1> 

                    <p>{homemovie.overview} </p>
                <div className='btn_home'>
                <button className='btn_white'><ion-icon name="play-outline"></ion-icon> <span>Lecture</span>  </button>
                <button className='btn_grey'><ion-icon name="information-circle-outline"></ion-icon><span>Plus d'infos</span>  </button>
                </div>
                </div>
                </>
                  : <> </>}

                
            </div>
            {/* {movies && movies.map((movie) => (
                <> */}
            <div className='movies__poster'>
            <Movies movies={movies} title="Tendances Actuelles" /> 
            <Movies movies={movies} title="Recommandation" />
            </div>

            {/* </> */}
            
        {/* ))} */}
        </div>
    );
}

export default Index;
