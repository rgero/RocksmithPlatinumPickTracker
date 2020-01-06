import React from 'react';
import {connect} from 'react-redux';
import SongForm from './SongForm';
import { addSong } from '../actions/songs';

export class CreateSongEntry extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(song){
        this.props.onSubmit(song);
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Song</h1>
                    </div>
                </div>
                <div className="content-container">
                    <SongForm onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (song) => dispatch(addSong(song))
    }
}

export default connect(undefined, mapDispatchToProps)(CreateSongEntry); // Check out the react-redux documentation to understand the connect statement here.