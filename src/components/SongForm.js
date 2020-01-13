import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import ErrorModal from './ErrorModal';

export default class SongForm extends React.Component {

    constructor(props)
    {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onCalendarFocusChanged = this.onCalendarFocusChanged.bind(this);
        this.onAccuracyChange = this.onAccuracyChange.bind(this);
        this.onPickLevelChange = this.onPickLevelChange.bind(this);
        this.clearError = this.clearError.bind(this);

        this.state = {
            id: this.props.songInfo ? this.props.songInfo.id : "",
            artist: this.props.songInfo ? this.props.songInfo.artist : "",
            songName: this.props.songInfo ? this.props.songInfo.songName : "",
            date: this.props.songInfo ? moment(this.props.songInfo.date) : moment(),
            path: this.props.songInfo ? this.props.songInfo.path : "",
            difficulty: this.props.songInfo ? this.props.songInfo.difficulty : "",
            level: this.props.songInfo ? this.props.songInfo.level : "platinum",
            accuracy: this.props.songInfo ? (this.props.songInfo.accuracy/100).toString() : "",
            notes: this.props.songInfo ? this.props.songInfo.notes : "",
            calendarFocused: false,
            error: "",
        }

    }

    onSubmit(e){
        e.preventDefault();

        //Validate Form;
        var currentError = "";
        if (!this.state.artist || !this.state.songName || !this.state.date || !this.state.path || !this.state.accuracy || !this.state.difficulty)
        {
            currentError = "Please inspect the form";
        }
        
        if( currentError === ""){
            this.setState({error: currentError})
            this.props.onSubmit({
                id: this.state.id,
                artist: this.state.artist,
                songName: this.state.songName,
                date: this.state.date.valueOf(),
                path: this.state.path,
                difficulty: this.state.difficulty,
                level: this.state.level,
                accuracy: this.state.accuracy,
                notes: this.state.notes
            });
        } else {
            this.setState({error: currentError})
        }
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
            case "difficulty":
                this.setState({
                    difficulty: newValue
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
        if ((!amount || amount.match(/^\d{1,3}(\.\d{0,2})?$/)) && (!amount || parseFloat(amount) <= 100)) {
            this.setState(()=>({
                accuracy: amount
            }));
        }
    }

    onPickLevelChange(e){
        const value = e.target.value
        this.setState(()=>({
            level: value
        }))
    }

    clearError(){
        this.setState({error: ""})
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error !== '' && <ErrorModal errorMessage={this.state.error} clearError={this.clearError} />}
                
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

                {/* Pick Level */}
                <div className="form__input">
                    <label className = "form__label">Pick Level</label>
                    <select value={this.state.level}
                            onChange={this.onPickLevelChange}
                    >
                        <option value="platinum">Platinum</option>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                        <option value="bronze">Bronze</option>
                    </select>
                </div>

                {/* Difficulty */}
                <div className = "form__input">
                    <label className = "form__label">Difficulty</label>
                    <input
                        type="text"
                        className="text-input"
                        placeholder="Difficulty"
                        autoFocus
                        value={this.state.difficulty}
                        onChange={this.onTextChange("difficulty")}
                    />
                </div>

                {/* Accuracy */}
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
                        placeholder="Notes about the song (optional)"
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