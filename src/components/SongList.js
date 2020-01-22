import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Import React Table
import ReactTable, { ReactTableDefaults } from "react-table-6";
import "react-table-6/react-table.css";


export class SongList extends React.Component {
    
    constructor(props){
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
    }

    onRowClick(e){
        let id = e.id;
        console.log(e);
        if (id)
        {
            this.props.history.push('/edit/' + id.toString());
        }
    }

    render(){
        const columnDefaults = { ...ReactTableDefaults.column, headerClassName: 'wordwrap'}
        return (
                <div>
                    <div className="content-container">
                        <div className="content-navbar">
                            <Link className="button" to="/create">Log New Pick</Link>
                        </div>
                        <ReactTable
                            data={this.props.songs}
                            column={columnDefaults}
                            columns={[
                                {
                                Header: "Platinum Picks",
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
                                        accessor: "accuracy",
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
                    </div>
                </div>
            )
    }
};

const mapStateToProps = (state, props)=>{
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps)(SongList);