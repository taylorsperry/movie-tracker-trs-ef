import React from 'react' 
import './AllMovies.scss'
import Movie from '../../components/Movie/Movie'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const AllMovies = ( {movies} ) => {
    
    const allMovies = movies.map((movie) => {
        return (
            <Movie key={movie.id} {...movie} />
        )
    })

    return (
        <div className='movie-display-container'>
            { allMovies }
        </div>
    )
}

export const mapStateToProps = (state) => ({
    movies: state.movies
})

export default connect(mapStateToProps)(AllMovies)

AllMovies.propTypes = {
    movies: PropTypes.array
}