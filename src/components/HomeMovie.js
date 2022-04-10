import React, { useEffect, useState } from 'react';
import movieService from '../service/movie.service';


const Homemovie = (props) => {
    

    const [homeVideo, setHomeVideo] = useState({})
    

    useEffect(() => {
        (async () =>{
            const test = await movieService.getMovie(props.homemovie.id)
            setHomeVideo(test.data)
        })
        
        // getHomeVideo()
       
    }, [props.homemovie]);

   

    return (
        <>
              {homeVideo? 
                    <iframe src={`https://www.youtube.com/embed/${homeVideo.key}?autoplay=1&mute=1&showinfo=0&controls=0&autohide=1&showsearch=0&rel=0&iv_load_policy=3&cc_load_policy=1&fs=0&loop=1/`}>
                    
                    </iframe> 
                
                 : 
                   <img src={`https://image.tmdb.org/t/p/original/${props.homemovie.backdrop_path}/`} alt=""/> 

                 }

        
        </>
    );
}

export default Homemovie;
