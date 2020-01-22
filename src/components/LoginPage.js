import React from 'react';
import {connect} from 'react-redux';
import {startGoogleLogin} from '../actions/auth';

export class LoginPage extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Welcome to the Rocksmith Pick Tracker</h1>
                    <p>It's time to write a tag-line</p>
                    <button className="button" onClick={this.props.startGoogleLogin}>Login with Google!</button>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({

    startGoogleLogin: () => dispatch(startGoogleLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);