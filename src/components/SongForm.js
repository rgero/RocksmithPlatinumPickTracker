import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import '../styles/components/SongForm.css';

export default class SongForm extends React.Component {

    constructor(props)
    {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onCalendarFocusChanged = this.onCalendarFocusChanged.bind(this);
        this.onAccuracyChange = this.onAccuracyChange.bind(this);

        this.state = {
            id: this.props.songInfo ? this.props.songInfo.id : "",
            artist: this.props.songInfo ? this.props.songInfo.artist : "",
            songName: this.props.songInfo ? this.props.songInfo.songName : "",
            date: this.props.songInfo ? moment(this.props.songInfo.date) : moment(),
            path: this.props.songInfo ? this.props.songInfo.path : "",
            accuracy: this.props.songInfo ? (this.props.songInfo.accuracy/100).toString() : "",
            notes: this.props.songInfo ? this.props.songInfo.notes : "",
            calendarFocused: false,
            error: "",
        }

    }

    onSubmit(e){
        e.preventDefault();
    }

    onTextChange = (value) => (evt) => {
        var newValue = evt.target.value;
        switch(value){
            case "artist":
                this.setState({
                    artist: newValue
                });
                break;
            case "songName":
                this.setState({
                    songName: newValue
                });
                break;
            case "path":
                this.setState({
                    path: newValue
                });
                break;
            case "notes":
                this.setState({
                    notes: newValue
                });
                break;
            default:
                break;
        }
    }

    onDateChange(newDate){
        if(newDate){
            this.setState(() => ({date: newDate}));
        }
    }

    onCalendarFocusChanged(calendarFocused){
        calendarFocused = calendarFocused["focused"]
        this.setState(() => ({calendarFocused}));
    }

    onAccuracyChange(e){
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,3}(\.\d{0,2})?$/)) {
            this.setState(()=>({
                accuracy: amount
            }));
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error !== '' && <p className="form__error">{this.state.error}</p>}
                
                {/* Artist */}
                <div className = "form__input">
                    <label className = "form__label">Artist</label>
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Artist"
                        autoFocus
                        value={this.state.artist}
                        onChange={this.onTextChange("artist")}
                    />
                </div>

                {/* Song Name */}
                <div className = "form__input">
                    <label className = "form__label">Song Name</label>
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Song Name"
                        autoFocus
                        value={this.state.songName}
                        onChange={this.onTextChange("songName")}
                    />
                </div>

                {/* Date */}
                <div className = "form__input">
                    <label className = "form__label">Date</label>
                    <SingleDatePicker 
                        date={this.state.date}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChanged}
                        numberOfMonths={1}
                        isOutsideRange={()=> false}
                        block
                    />
                </div>

                {/* Path */}
                <div className = "form__input">
                    <label className = "form__label">Path</label>
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Path"
                        autoFocus
                        value={this.state.path}
                        onChange={this.onTextChange("path")}
                    />
                </div>

                {/* Accuracy 
                    TODO: Add verification for the following conditions
                        - It's a number
                        - It is between 0 and 100. (Allow for 0.00 and 100.00)
                */}
                <div className = "form__input">
                <label className = "form__label">Accuracy</label>
                <input
                    type="text"
                    className="text-input"
                    placeholder="Accuracy"
                    autoFocus
                    value={this.state.accuracy}
                    onChange={this.onAccuracyChange}
                />
            </div>

                {/* Notes */}
                <div className = "form__input">
                    <label className = "form__label">Notes</label>
                    <textarea 
                        placeholder="Notes about the song"
                        className="textarea"
                        value={this.state.note}
                        onChange={this.onTextChange("notes")}
                    >
                    </textarea>
                </div>

                <div className = "form__input">
                    <button className="button">Save Entry</button>
                </div>
            </form>
        )
    }
}