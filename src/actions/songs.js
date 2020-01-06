
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