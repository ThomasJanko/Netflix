import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Movie from '../../../components/Movie';
import movieService from '../../../service/movie.service';

const Index = () => {
const [movieFilm, setMovieFilm] = useState("")
const router = useRouter();

useEffect(() => {
    
    if(!router.isReady) return;
    const id = router.query.id;

    //Récupère un film avec sa vidéo
    movieService.getMovie(id)
    .then(response => {
        setMovieFilm(response.data.results[0])
        // console.log(response.data.results[0])
        // console.log(id)
    })


}, [])


    return (
        <Movie movie={movieFilm}/>
    );
}

export default Index;
