import React, { Component } from 'react'
import SearchForm from './SearchForm';

import { connect } from 'react-redux';

import  MovieContainer  from './MovieContainer';
import Spinner from '../layout/Spinner';

export class Landing extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div className="container">
                <SearchForm/>
                {loading ? <Spinner /> : <MovieContainer />}
            </div>
        )
    }
}

const mapStateToProps = state=> { 
    return {loading:state.movies.loading};
}

export default connect(mapStateToProps)(Landing);
