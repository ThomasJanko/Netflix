
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Infoscard from './infosCard';
import Modal from './Modal';

const Movies = (props) => {

    const [scrollX, setScrollX] = useState(0);
    const [isHovered, setisHovered] = useState(false);
    const [infos, setInfos] = useState(false);
    const [showModal, setShowModal] = useState(false);
    

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = props.movies.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    const addMyList =(element) =>{
      
        console.log(element)
        let movietoAdd ={
            id: element.id,
            title: element.title,
            backdrop_path: element.backdrop_path,
            overview: element.overview,
        
        }
        var list = [];

        if (localStorage.getItem('Mylist') == null){
            list.push(movietoAdd)
            localStorage.setItem('Mylist', JSON.stringify(list))
            
        }

        else{ 
            const memory = JSON.parse(localStorage.getItem('Mylist'))
            const check = memory.findIndex(element => element.id == movietoAdd.id)
            console.log(check)
            memory.forEach(a => {
                
                list.push(a)
            });
            if(check !== -1){
                
                return "Film déjà présent"
                
            }
            else{
                list.push(movietoAdd)
                setShowModal(true)
            }
            console.log(memory)
            
            
        

           localStorage.setItem('Mylist', JSON.stringify(list))
        }
        
        
    }

    



    return (
        <>
            
            <Modal title="Ajout à la liste" isActive={showModal} closeFunction={()=>setShowModal(!showModal)} type="information">
                <p>Contenu ajouté à votre liste de films</p>
             </Modal>
            
            

            
            {props.movies && (
            <>
            
                
            <h1 className='poster__title'>{props.title} </h1>

            <div className="movieRow--left" >
            <FaAngleLeft style={{fontSize: 50}} onClick={()=>handleLeftArrow()} />
            </div>
            <div className="movieRow--right">
            <FaAngleRight style={{fontSize: 50}} onClick={()=>handleRightArrow()} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    }}>
                      {props.movies && props.movies.map((movie) => (
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
                                        <ion-icon name="add-circle-outline" onClick={()=>addMyList(movie)} ></ion-icon>
                                        <ion-icon name="thumbs-up-outline"></ion-icon>

                                       <div className="ion_infos">
                                           <ion-icon  name="chevron-down-circle-outline" onClick={()=> setInfos(true)}></ion-icon>
                                       </div> 
                                   
                                    </div>
                                    <div className='infos__title'>
                                    {movie.title}
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
                    ))}
                </div>
                
          
            {/* <div className='poster'>
                <img className='poster__img' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>

            </div> */}

            
        </div>
        
            </>
            )
            }
            
            
            
        
        </>
    );
}

export default Movies;
