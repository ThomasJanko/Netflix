import Link from 'next/link';
import React, { useEffect, useState } from 'react';



const Index = () => {

    const [isHovered, setisHovered] = useState(false)
    const [movies, setMovies] = useState()

    useEffect(() => {
        setMovies(JSON.parse(localStorage.getItem('Mylist')))
    }, []);


    const RemovetoMyList = (element) =>{
        let items = movies
        console.log(element)
        let index = items.findIndex(el => el.id === element.id )
        items = items.splice(index, 1)

        // localStorage.setItem('Mylist', JSON.stringify(items))
        // setMovies(localStorage.getItem('Mylist'))
        

        
    }

    return (
        <div className='mylist'>
            <h1>Ma Liste </h1>

            {/* localStorage get Movie From MyList */}
            {movies? 
             movies.map((movie)=> (
                <>
                <div className="movieRow--item" key={movie.id} 
                       onMouseEnter ={()=> setisHovered(true)} onMouseLeave={()=>setisHovered(false)}
                   
                       >
  
                            <Link href={`/films/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={movie.original_title} width="100%" height="100%" />
                            </Link>


                            {isHovered && (
                               <>
                               
                               <div className='itemInfo'>
                                    <div className='icons'>
                                        <Link href={`/films/${movie.id}`}>
                                            <ion-icon name="play-circle-outline"></ion-icon>
                                        </Link> 
                                        <ion-icon name="remove-circle-outline" onClick= {()=>RemovetoMyList(movie)}></ion-icon>
                                        <ion-icon name="thumbs-up-outline"></ion-icon>

                                       <div className="ion_infos">
                                           <ion-icon  name="chevron-down-circle-outline" onClick={()=> setInfos(true)}></ion-icon>
                                       </div> 


           
                                    </div>
                                    <div className='itemInfoTop'>
                                        <span>1 hours 37min</span>
                                        <span className='limit'>+16</span>
                                        
                                    </div>
                            
                                    <div className='genre'>
                                        Action
                                    </div>
                            </div>

                               </>
                           )}


                            
                        </div>
                </>
            )) :
            <h1> Aucun Film dans votre Liste </h1>
            }


           
        </div>
    );
}

export default Index;
