import React from 'react';
import {connect} from 'react-redux';
import ImportForm from './ImportForm';
import ErrorModal from './ErrorModal';
import {startAddSong} from '../actions/songs';

export class ImportPage extends React.Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.readFile = this.readFile.bind(this);
        this.processSongImport = this.processSongImport.bind(this);

        this.state = {
            fileType: "",
            hasHeaders: false,
        }
    }

    readFile = (filePath) => {
        const tempFileReader = new FileReader();
        return new Promise((resolve, reject) => {
            tempFileReader.onerror = () => {
                tempFileReader.abort();
                reject(new DOMException("Problem with file"));
            }
        
            tempFileReader.onload = () => {
                resolve(tempFileReader.result);
            }

            tempFileReader.readAsText(filePath);
        });
    }

    processSongImport(content){
        return new Promise( (resolve, reject) => {
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

                    var sepCharacter = ',';
                    switch(this.state.fileType){
                        case "csv":
                            sepCharacter = ","
                            break;
                        case "tsv":
                            sepCharacter = "\t";
                            break;
                        case "bar":
                            sepCharacter = "|"
                            break;
                        default:
                            break;
                    }
                    entry = entry.split(sepCharacter);
                    var testObject = {};
                    testObject["artist"] = entry[0];
                    testObject["songName"] = entry[1];
                    testObject["date"] = entry[2];
                    testObject["path"] = entry[3];
                    testObject["difficulty"] = entry[4];
                    testObject["accuracy"] = entry[5];
                    testObject["notes"] = entry[6];
                    testObject["level"] = "Platinum";

                    songs.push(testObject);
                }

            }
            if (songs.length > 0){
                this.setState({processing: true});
                for(var currentIndex = 0; currentIndex < songs.length; currentIndex++){
                    this.setState({
                        processMessage: `Processing: ${currentIndex} of ${songs.length}`
                    })
                    this.props.addSong(songs[currentIndex]);
                }
                this.setState({
                    processing: false,
                    processMessage: ""
                })
            }

            resolve("Success");
        })
    }

    async onSubmit(fileProps){
        this.setState({
            fileType: fileProps.fileType,
            hasHeaders: fileProps.hasHeaders
        })
        try{
            const fileContents = await this.readFile(fileProps.filePath);
            const successStatus = await this.processSongImport(fileContents);
            this.props.history.push('/');
        } catch (e) {
            console.warn(e.message);
        }

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


const mapDispatchToProps = (dispatch) => {
    return {
        addSong: (song) => dispatch(startAddSong(song))
    }
}

export default connect(undefined, mapDispatchToProps)(ImportPage);