import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {getVisibleSongs} from '../selectors/songs';

// Import React Table
import ReactTable, { ReactTableDefaults } from "react-table-6";
import "react-table-6/react-table.css";

export class PickList extends React.Component {

    constructor(props){
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
    }

    onRowClick(e){
        let id = e.id;
        if (id)
        {
            this.props.history.push('/edit/' + id.toString());
        }
    }

    render(){
        const columnDefaults = { ...ReactTableDefaults.column, headerClassName: 'wordwrap'}
        return (
            <ReactTable
                data={this.props.songs}
                column={columnDefaults}
                columns={[
                    {
                    Header: "Your Rocksmith Picks",
                    columns: [
                        {
                            Header: "Artist Name",
                            accessor: "artist",
                            style: { 'whiteSpace': 'unset'}
                        },
                        {
                            Header: "Song Name",
                            accessor: "songName",
                            style: { 'whiteSpace': 'unset'}
                        },
                        {
                            Header: "Date",
                            id: "date",
                            accessor: d => { return moment(d.date).format("YYYY-MM-DD") },
                            style: { 'whiteSpace': 'unset'}

                        },
                        {
                            Header: "Path",
                            accessor: "path",
                            style: { 'whiteSpace': 'unset'}
                        },
                        {
                            Header: "Difficulty",
                            accessor: "difficulty",
                            style: { 'whiteSpace': 'unset'}
                        },
                        {
                            Header: "Pick Level",
                            accessor: "level",
                            style: { 'whiteSpace': 'unset'}
                        },
                        {
                            Header: "Accuracy",
                            id: "accuracy",
                            accessor: d => Number(d.accuracy).toFixed(2),
                            sortMethod: (a, b) => Number(a)-Number(b),
                            style: { 'whiteSpace': 'unset'}
                        }
                    ]
                    }
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
                getTrProps={(state, rowInfo, column, instance) => ({
                    onClick: e => this.onRowClick(rowInfo.original)
                })}
                
            />
        )
    }
};

const mapStateToProps = (state, props)=>{
    return {
        songs: getVisibleSongs(state.songs, state.filters)
    };
}

export default connect(mapStateToProps)(PickList);