import React from "react";
import PropTypes from "prop-types"
import "./Movie.css"

function Movie({id, year, title, summary, poster, genres}){

    return <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">{genres.map((genre, index)=>(
                    <li key ={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0,180)}...</p>
            </div>
        </div>}
Movie.proptype={
    id : PropTypes.number.isRequired,
    year :PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster  : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired

};

export default Movie