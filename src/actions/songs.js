

import database from '../firebase/firebase'

export const addSong = (song) => ({
    type: 'ADD_SONG',
    song
})

export const removeSong = ( id ) => ({
    type: 'REMOVE_SONG',
    id
})

export const editSong = ( id, update = {}) => ({
    type: "EDIT_SONG",
    id,
    update
})

// SET_SONG
export const setSongs = (songs) => ({
    type: 'SET_SONGS',
    songs
});

export const startSetSongs = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/pick_tracker/songs`).once('value').then((snapshot) => {
        const songs = [];
  
        snapshot.forEach((childSnapshot) => {
          songs.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setSongs(songs));
      });
    };
  };

  export const startEditSong = (id, update) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/pick_tracker/songs/${id}`).update({...update})
        .then(()=>{
            dispatch(editSong(id, update))
        })
    }

}

export const startRemoveSong = ( id ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/pick_tracker/songs/${id}`).remove()
        .then(()=> {
            dispatch(removeSong(id))
        })
    }
}

export const startAddSong = (songData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            date=0,
            artist="",
            songName="",
            path="",
            difficulty="",
            level="",
            accuracy="",
            notes="",
        } = songData;

        const song = {date, artist, songName, path, difficulty, level, accuracy, notes};

        return database.ref(`users/${uid}/pick_tracker/songs`).push(song).then((ref)=> {
            dispatch(addSong({
                id: ref.key,
                ...song
            }))
        });
    };
};

export const startAddSongs = (songs = []) => {
    return (dispatch, getState) => {
        songs.forEach(song => {
            startAddSong(song);
        })
    }
}