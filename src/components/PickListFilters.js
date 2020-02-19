import React from 'react'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters'


export class PickListFilters extends React.Component {

    constructor(props){
        super(props)
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.state = {
            calendarFocus: null
        }
    }

    onDatesChange({startDate, endDate}){
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange(calendarFocus){
        this.setState({
            calendarFocus
        })
    }

    onTextChange(e){
            this.props.setTextFilter(e.target.value)
    }

    render(){
        return(
            <div className="content-container">
                {/* A controlled input is an input that is controlled by Javascript */}
                <div className="input-group">
                    <div className="input-group__item">
                        <input type="text" className="text-input" value={this.props.filters.text} onChange={this.onTextChange} />
                        </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocus}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={()=> false}
                            showClearDates={true}
                            block
                        />
                    </div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(PickListFilters);
