import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addSong, setSongs, editSong, removeSong, startAddSong, startEditSong, startRemoveSong} from '../../actions/songs';
import songs from '../fixtures/songs'
import database from '../../firebase/firebase';

const uid = 'testString';
const defAuthState = {auth: {uid} }
const createMockStore = configureMockStore([thunk]);

beforeEach((done)=> {
    const songsData = {};
    songs.forEach(({id, date, artist, songName, path, difficulty, level, accuracy, notes})=> {
        songsData[id] = {date, artist, songName, path, difficulty, level, accuracy, notes};
    })

    database.ref(`users/${uid}/pick_tracker/songs`).set(songsData).then(()=> done());
})


test('Testing addSong action', ()=> {
    let song = songs[0];
    const store = createMockStore({});
    store.dispatch(addSong(song));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_SONG',
        song: song
    });
})

test('Testing setSongs action', ()=> {
    const store = createMockStore({});
    store.dispatch(setSongs(songs));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'SET_SONGS',
        songs: songs
    });
})

test('Testing editSong action', ()=> {
    let update = songs[0];
    const store = createMockStore({});
    store.dispatch(editSong(1, update));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'EDIT_SONG',
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
        type: 'REMOVE_SONG',
        id: removeID
    });
})

/* Firebase tests */
test('should edit song on firebase', (done)=> {
    var target = songs[1];
    target.artist = '1331';
    const store = createMockStore(defAuthState);
    store.dispatch(startEditSong(target.id, target)).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_SONG',
            id: target.id,
            update: target

        });
        return database.ref(`users/${uid}/pick_tracker/songs/${target.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(target);
        done();
    })
})

test('should add song to database and store', (done)=> {
    const store = createMockStore(defAuthState);
    const songData = {
        artist: 'Rise',
        songName: 'Against',
        path: 'Bass',
        date: '2021-01-06',
        level: 'Silver',
        difficulty: 'Master',
        accuracy: '100.00',
        notes: ''
    }
    store.dispatch(startAddSong(songData)).then(()=> {
        const actions = store.getActions(); // This will return an array of actions
        // We are going to expect one

        expect(actions[0]).toEqual({
            type: 'ADD_SONG',
            song: {
                id: expect.any(String),
                ...songData
            }
        })

        database.ref(`users/${uid}/pick_tracker/songs/${actions[0].song.id}`).once('value').then(
            (snapshot)=> {
                expect(snapshot.val()).toEqual(songData)
                done();
            }
        )

        
    })
})

test('should remove song from firebase', (done)=> {
    var targetSong = songs[0];
    const store = createMockStore(defAuthState);
    store.dispatch(startRemoveSong(songs[0].id)).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_SONG',
            id: targetSong.id
        });
        return database.ref(`users/${uid}/pick_tracker/songs/${targetSong.id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    })
})