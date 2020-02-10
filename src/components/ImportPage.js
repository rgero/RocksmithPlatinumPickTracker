import React from 'react';
import ImportForm from './ImportForm';

export class ImportPage extends React.Component {

    

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleFileRead = this.handleFileRead.bind(this);
        this.processSongImport = this.processSongImport.bind(this);
        
        this.fileReader = new FileReader();
        this.fileReader.onloadend = this.handleFileRead;

        this.state = {
            fileType: ""
        }
    }

    handleFileRead = (e) => {
        const content = this.fileReader.result;
        this.processSongImport(content);
    }

    processSongImport(content){

        // Split string into array
        var contentList = content.split('\n');
        
        // Figure out headers
        var headers = contentList[0].split(',');
        var headerIndex = {
            artist: 0,
            songName: 0,
            date: 0,
            path: 0,
            difficulty: 0,
            accuracy: 0,
            notes: 0,
            pickLevel: 0,
        }
        for(var i = 0; i < headers.length; i++)
        {
            var entry = headers[i];

        }


    }

    onSubmit(fileProps){
        this.setState = ({
            fileType: fileProps.fileType
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