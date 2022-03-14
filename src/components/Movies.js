import React from 'react';

const Movies = (props) => {
    return (
<div className="card" key={props.id}>

{/* <img className='card-image' src={props.}/>  */}

<h1>{props.movie.title}</h1>

</div>
    );
}

export default Movies;
