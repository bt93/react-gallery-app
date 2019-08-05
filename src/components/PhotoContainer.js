import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

import apiKey from '../config';

/**
 * Containers for the photos
 * Recieves the params from App.js and fetches
 * new data when route changes
 */
class PhotoContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: [],
            name: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    // Fetches first results on page load
    componentDidMount() {
        const {match} = this.props;
        this.handleSearch(match);
      }

      /**
       * Updates props if they are different
       * @param {object} prevProps - previous match
       */
      componentDidUpdate(prevProps) {
        const {match} = this.props;
          if (match !== prevProps.match) {
              this.handleSearch(match)
          }
      }

      /**
       * Fetches Unsplash api acording to the search term and updates state
       * @param {object} match - match object obtained from React Router
       */
    handleSearch(match) {
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${match.params.query}&per_page=24&client_id=${apiKey}`)
        .then(res => res.json())
        .then(data => this.setState({
            isLoading: false,
            data: data.results,
            name: match.params.query
        }))
        .catch(err => {
            console.log('Something went wrong: ', err);
        });
    }

    render() {
        return (
            <div className="photo-container">
                <h2>Results for: {this.state.name}</h2>
                    {/* 
                    Checks if loading
                    If not: checks if api returns data
                    */}
                    { !this.state.isLoading ? (
                            this.state.data.length > 0 ? (
                                <ul>
                                    {this.state.data.map(photo => <Photo key={photo.id} data={photo}/>)}
                                </ul>
                            ) : (
                                <NotFound />
                            )
                    ) : (
                        <div>
                            <h1>Loading...</h1>
                        </div>
                    )
                    }
            </div>
        )
    }
}

export default PhotoContainer;