import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addSong, setSongs, editSong, removeSong} from '../../actions/songs';
import songs from '../fixtures/songs'

const createMockStore = configureMockStore([thunk]);

test('Testing addSong action', ()=> {
    let song = songs[0];
    const store = createMockStore({});
    store.dispatch(addSong(song));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: "ADD_SONG",
        song: song
    });
})

test('Testing setSongs action', ()=> {
    const store = createMockStore({});
    store.dispatch(setSongs(songs));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: "SET_SONGS",
        songs: songs
    });
})

test('Testing editSong action', ()=> {
    let update = songs[0];
    const store = createMockStore({});
    store.dispatch(editSong(1, update));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: "EDIT_SONG",
        id: 1,
        update: update
    });
})

test('Testing removeSong action', ()=> {
    let removeID = 1
    const store = createMockStore({});
    store.dispatch(removeSong(removeID));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: "REMOVE_SONG",
        id: removeID
    });
})