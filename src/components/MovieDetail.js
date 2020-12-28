import React from 'react';

const MovieDetail = ({movies, match}) => {

    let relTitle = match.params.title
    const movie = movies.find(m => m.title == relTitle)

    return (
        <div className='movieInfo'>
            <div className='title'>{movie.title}</div>
            <div className='year'>{movie.year}</div>
            <div className='description'>{movie.descrShort}</div>
            <img className='movieDetImage' src={movie.img} alt="" />
        </div>
    )
}

export default MovieDetail