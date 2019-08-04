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

    componentDidMount() {
        const {match} = this.props;
        this.handleSearch(match);
      }

      componentDidUpdate(prevProps) {
        const {match} = this.props;
          if (match !== prevProps.match) {
              this.handleSearch(match)
          }
      }

    handleSearch(match) {
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${match.params.query}&per_page=24&client_id=${apiKey}`)
        .then(res => res.json())
        .then(data => this.setState({
            isLoading: false,
            data: data.results,
            name: match.params.query
        }));
    }

    render() {
        return (
            <div className="photo-container">
                <h2>Results for: {this.state.name}</h2>
                <ul>
                    {
                        this.state.data.map(photo => <Photo key={photo.id} data={photo}/>)
                    }
                    {/* Add logic later */}
                </ul>
            </div>
        )
    }
}

export default PhotoContainer;