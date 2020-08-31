import React from 'react';
import {connect} from 'react-redux';
import SongForm from './SongForm';
import {startEditSong, startRemoveSong} from '../actions/songs';

export class EditSongPage extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    onSubmit(song){
        this.props.onSubmit(this.props.song.id, song)
        this.props.history.push('/')
    }

    removeItem(){
        this.props.removeItem(this.props.song.id);
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Editing '{this.props.song.artist} - {this.props.song.songName}'</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <SongForm
                        songInfo = {this.props.song}
                        onSubmit={this.onSubmit}
                        
                    />
                    <button className='button button--secondary' onClick={this.removeItem}>Remove</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (id, song) => { 
            dispatch(startEditSong(id, song))
        },
        removeItem: (id) => dispatch(startRemoveSong(id))
    }
}

const mapStateToProps = (state, props) => {
    return {
        song: state.songs.find((song) => song.id === props.match.params.id)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSongPage);