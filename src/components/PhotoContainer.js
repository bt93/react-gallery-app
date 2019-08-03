import React, {Component} from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {

    render() {
        const {match} = this.props;
        console.log(match);
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    <Photo />
                    <NotFound />
                </ul>
            </div>
        )
    }
}

export default PhotoContainer;