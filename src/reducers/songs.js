// This is the songs reducer
const songsReducerDefaultState = [];
const songsReducer = (state = songsReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_SONG":
            // Get the highest ID - this is temporary until I set up firebase.
            var songsLength = state.length;
            action.song.id = (songsLength+1).toString();
            
            return state.concat(action.song);
        case "REMOVE_SONG":
            return state.filter(function(testOption){
                return action.id !== testOption.id;
            })
        case "EDIT_SONG":
            return state.map( (song) => {
                if (song.id === action.id) {
                    return {
                        ...song,
                        ...action.update
                    }
                } else {
                    return song;
                }
            })
        case 'SET_SONGS':
            return action.songs;
        default:
            return state;
    }
};

export default songsReducer;