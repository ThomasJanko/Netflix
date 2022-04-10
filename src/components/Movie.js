import React from 'react'
import Link from 'next/link';

export default function Movie(props) {


  return (
    <div className='watch'>
        <Link href="/">
        <div className='back'> 
        
            <ion-icon name="arrow-back-outline"></ion-icon>
            Home
        </div></Link>

     
        <iframe allowFullScreen src={`https://www.youtube.com/embed/${props.movie.key}?autoplay=1&showinfo=0&controls=0&autohide=1&rel=0&cc_load_policy=1&fs=0&loop=1&modestbranding=1`} >
                    
        </iframe> 
       
    </div>
  )
}
