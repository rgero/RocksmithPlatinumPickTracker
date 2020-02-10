import React from 'react';
import ImportForm from './ImportForm';
import {startAddSongs} from '../actions/songs';

export class ImportPage extends React.Component {

    

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleFileRead = this.handleFileRead.bind(this);
        this.processSongImport = this.processSongImport.bind(this);
        
        this.fileReader = new FileReader();
        this.fileReader.onloadend = this.handleFileRead;

        this.state = {
            fileType: "",
            hasHeaders: false
        }
    }

    handleFileRead = (e) => {
        const content = this.fileReader.result;
        this.processSongImport(content);
    }

    processSongImport(content){

        // Split string into array
        var contentList = content.split('\n');
        
        // Check to see up
        var songs = [];
        var index = 0;
        if (this.state.hasHeaders){
            var index = 1;
        }
        for(var i = index; i < content.length - 1; i++)
        {
            var entry = contentList[i]

            if (entry){
                entry = entry.split(',');
                var testObject = {};
                testObject["artist"] = entry[0];
                testObject["songName"] = entry[1];
                testObject["date"] = entry[2];
                testObject["path"] = entry[3];
                testObject["difficulty"] = entry[4];
                testObject["accuracy"] = entry[5];
                testObject["notes"] = entry[6];

                songs.push(testObject);
            }

        }
        if (songs.length > 0){
            startAddSongs(songs);
        }
    }

    onSubmit(fileProps){
        this.setState({
            fileType: fileProps.fileType,
            hasHeaders: fileProps.hasHeaders
        });
        this.fileReader.readAsText(fileProps.filePath);
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Import Data</h1>
                    </div>
                </div>
                <div className="content-container">
                    <div className="content-infobox">
                        The format should be the following:
                        <div className="content-noticebox">Artist | Song Name | Date | Path | Difficulty | Accuracy | Notes</div>
                        For this utility, the pick level "Platinum" is presumed.
                    </div>
                    <ImportForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        )
    }
}


export default ImportPage;