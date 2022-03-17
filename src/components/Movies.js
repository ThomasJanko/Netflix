
import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Movies = (props) => {

    const [scrollX, setScrollX] = useState(0);


    // const handleLeftArrow = () => {
    //     let x = scrollX + Math.round(window.innerWidth / 2);
    //     if(x > 0) {
    //         x = 0;
    //     }
    //     setScrollX(x);
    // }

    // const handleRightArrow = () => {
    //     let x = scrollX - Math.round(window.innerWidth / 2);
    //     let listW = props.movies.results.length * 150;
    //     if ((window.innerWidth - listW) > x) {
    //         x = (window.innerWidth - listW) - 60;
    //     }
    //     setScrollX(x);
    // }
    return (
        <>
        
        
            <h1 className='poster__title'>{props.title} </h1>

            <div className="movieRow--left" >
            <FaAngleLeft style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right">
            <FaAngleRight style={{fontSize: 50}} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    // width: props.movies.results.length * 150
                    }}>
                      {props.movies && props.movies.map((movie) => (
                       <div className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
                    </div>
                    ))}
                </div>
          
            {/* <div className='poster'>
                <img className='poster__img' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>

            </div> */}

            
        </div>
        
        </>
    );
}

export default Movies;
