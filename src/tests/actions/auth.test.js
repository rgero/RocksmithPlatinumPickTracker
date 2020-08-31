import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {login, logout} from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);

test('Testing Login reducer', ()=> {
    var uid = 'aoisadinsaidn';
    const store = createMockStore({});
    store.dispatch(login(uid));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'LOGIN',
        uid: uid
    });
})

test('Testing Logout reducer', ()=> {
    const store = createMockStore({});
    store.dispatch(logout());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'LOGOUT',
    });
})