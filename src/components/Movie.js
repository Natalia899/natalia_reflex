import React, { Component } from 'react';

import { Link } from 'react-router-dom'

const Movie = (props) => {
    const rentTheMovie = () => {
        props.rentTheMovie(props.movie.id)
    }

    const removeFromRented = () => {
        props.removeFromRented(props.movie.id)
    }

    return (
        <div className='movie'>
            <Link to={`/catalog/movie/${props.movie.title}`}>
                <img className='movieImage' src={props.movie.img} alt="" />
                <div className='movieName'>{props.movie.title}</div>
            </Link>
            <span onClick={rentTheMovie} className='add'>+</span>
            <span onClick={removeFromRented} className='remove'>-</span>

        </div>
    )

}
export default Movie