import authReducer from '../../reducers/auth';

test('Login reducer test', ()=>{
    const action = {
        type: 'LOGIN',
        uid: 'osamdoasm'
    }
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
})

test('Default State Test', ()=>{
    const action = {
        type: 'LOGOUT',
    }
    const state = authReducer({uid: 'asomsaomdaso'}, action);
    expect(state).toEqual({});
})