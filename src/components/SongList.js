import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Import React Table
import ReactTable, { ReactTableDefaults } from "react-table-6";
import "react-table-6/react-table.css";
import Header from './Header';

export const SongList = (props) => {

    const columnDefaults = { ...ReactTableDefaults.column, headerClassName: 'wordwrap'}
    return (
        <div>
            <Header/>
            <div className="content-container">
                <div className="content-navbar">
                    <Link className="button" to="/create">Log New Pick</Link>
                </div>
                <ReactTable
                    data={props.songs}
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
                                accessor: "date",
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
                    />
            </div>
        </div>
    )
};

const mapStateToProps = (state, props)=>{
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps)(SongList);