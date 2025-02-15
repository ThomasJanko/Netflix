import React, { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import movieService from '../service/movie.service';

const Home = () => {

    const [mount, setMount] = useState(true)

    //Type de films
    const [movies, setMovies] = useState([])
    const [rated, setRated] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [actions, setActions] = useState([])
    const [adventure, setAdventure] = useState([])
    const [comedy, setComedy] = useState([])
    const [fantasy, setFantasy] = useState([])

    //Premier film de la list (pour Affiche)
    const [homemovie, setHomemovie] = useState({})
    const [homeVideo, setHomeVideo] = useState({})
    


    useEffect( () => {
    
        //attendre d'avoir récupérer tous les films avant de récupérer la vidéo du premier film
          getMovies();
          (async () => {
            setMount(false);
            let res = await getMovie()

            if (res.success) {
              setHomemovie(res.data.results[0])
              setMount(true);
              
            }
          })();
        

        
        //get Popular movies
        movieService.getRatedMovies()
        .then((res) =>{
            setRated(res.data.results)
        })

        //get Latest Movies
        movieService.getUpcomingMovies()
        .then((res) =>{
            setUpcoming(res.data.results)
        })

        // movieService.getGenres()
        // .then(res => console.log(res.data))

        movieService.getByGenre(28)
        .then(res=> setActions(res.data.results))

        movieService.getByGenre(12)
        .then(res=> setAdventure(res.data.results))

        movieService.getByGenre(35)
        .then(res=> setComedy(res.data.results))

        movieService.getByGenre(14)
        .then(res=> setFantasy(res.data.results))

    }, []);

    //Récupérer tous les films
    const getMovies = async () => {
        //getAll movies (discover)
        try{
            let response = await movieService.getMovies()
            
            let data = response.data
            setMovies(data.results)

            return {success: true, data:data}
        }
        catch(error){
            console.log(error)
            return {success: false}
        }
        
        
        
    
       
        
        
        
        
        
    }

    //Récupérer vidéo du premier film
    const getMovie = async () => {
         //get du premier film de la liste pour avoir la vidéo
         try{
            let response = await movieService.getMovies()
            
            let data = response.data
            setMovies(data.results)

            return {success: true, data:data}
        }
        catch(error){
            console.log(error)
            return {success: false}
        }
       
    }
    return (
        <div>

            <div className='home_movie'>
                {homemovie &&( 
                    <>

                    {/* <Homemovie homemovie={homemovie}/> */}
                    

                 {homeVideo.key? 
                    <iframe src={`https://www.youtube.com/embed/${homeVideo.key}?autoplay=1&mute=1&showinfo=0&controls=0&autohide=1&showsearch=0&rel=0&iv_load_policy=3&cc_load_policy=1&fs=0&loop=1`}>
                    
                    </iframe> 
                
                 : 
                   <img src={`https://image.tmdb.org/t/p/original/${homemovie.backdrop_path}`} alt=""/> 

                 }
                <div className='home_text'>
                <h1>{homemovie.title}</h1> 

                <p>{homemovie.overview} </p>
                <div className='btn_home'>
                <button className='btn_white'><ion-icon name="play-outline"></ion-icon> <span>Lecture</span>  </button>
                <button className='btn_grey'><ion-icon name="information-circle-outline"></ion-icon><span>Plus d'infos</span>  </button>
                </div>
                </div>
                
                </>
                )}
                  

                
            </div>
           
            <div className='movieRow'>
            
            {movies ?  <Movies movies={movies} title="Tendances Actuelles"  /> : <></> }
            {rated ?  <Movies movies={rated} title="Films Populaire"  /> : <></> }
            {actions ?  <Movies movies={actions} title="Films d'Action"  /> : <></> }
            {comedy ?  <Movies movies={comedy} title="Films d'Action"  /> : <></> }
            {fantasy ?  <Movies movies={fantasy} title="Films d'Action"  /> : <></> }
            {adventure ?  <Movies movies={adventure} title="Films d'Action"  /> : <></> }
            {upcoming ?  <Movies movies={upcoming} title="Nouveautés"  /> : <></> }


            

            {/* {rated &&  <Movies movies={rated} title="Films Populaire" />}

            {rated &&  <Movies movies={rated} title="Films Populaire" />}

            {rated &&  <Movies movies={rated} title="Films Populaire" />} */}

           
            </div>

            {/* </> */}
            
        {/* ))} */}
        </div>
    );
}

export default Home;
