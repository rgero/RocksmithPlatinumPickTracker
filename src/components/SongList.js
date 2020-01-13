import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Import React Table
import ReactTable, { ReactTableDefaults } from "react-table-6";
import "react-table-6/react-table.css";

export const SongList = (props) => {

    // Temporarily injecting data into this.
    let DLCSong = [
        {
            artist: "Rise Against",
            songName: "Savior",
            path: "Lead",
            date: "2020-01-06",
            difficulty: "Master",
            accuracy: "100.00"
        },
        {
            artist: "Rise Against",
            songName: "Savior",
            path: "Bass",
            date: "2020-01-06",
            difficulty: "Master",
            accuracy: "100.00"
        },
        {
            artist: "Jake Kantzer's Super Band",
            songName: "RAPTOR!!",
            path: "Lead",
            date: "2020-01-06",
            difficulty: "Easy. To strong",
            accuracy: "100.00"
        },
        {
            artist: "Bob Marley",
            songName: "Some Bob Marley Song",
            path: "Rhythm",
            date: "2020-01-06",
            difficulty: "Master",
            accuracy: "100.00"
        }
    ]

    //var data = props.songs;
    var data = DLCSong;

    const columnDefaults = { ...ReactTableDefaults.column, headerClassName: 'wordwrap'}
    return (
        <div className="content-container">
            <div className="content-navbar">
                <Link className="button" to="/create">Log New Pick</Link>
            </div>
            <ReactTable
                data={data}
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
    )
};

const mapStateToProps = (state, props)=>{
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps)(SongList);