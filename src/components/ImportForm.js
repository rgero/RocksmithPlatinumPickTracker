import React from 'react';
import ErrorModal from './ErrorModal';

export default class ImportForm extends React.Component {

    constructor(props)
    {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.clearError = this.clearError.bind(this);
        this.onFileTypeChange = this.onFileTypeChange.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);

        this.state = {
            error: "",
            filePath: "",
            fileType: "csv",
            hasHeaders: false
        }
    }

    onChangeFile(event) {
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];
        this.setState({filePath: file}); /// if you want to upload latter
    }

    onFileTypeChange(e){
        const value = e.target.value
        this.setState(()=>({
            fileType: value
        }))
    }

    handleCheckChange(e){
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        this.setState({
            hasHeaders: value
        })

    }


    onSubmit(e){
        e.preventDefault();

        // Check the error
        var currentError = "";
        if (!this.state.filePath)
        {
            currentError = "You have not specified a file.";
        }
        if( currentError === ""){
            this.setState({error: currentError})
            this.props.onSubmit({
                filePath: this.state.filePath,
                fileType: this.state.fileType,
                hasHeaders: this.state.hasHeaders
            })
        } else {
            this.setState({error: currentError})
        }
    }

    clearError(){
        this.setState({error: ""})
    }

    render() {
        return (
            <form className="form__importData" onSubmit={this.onSubmit}>
                {this.state.error !== '' && <ErrorModal errorMessage={this.state.error} clearError={this.clearError} />}

                {/* File Type */}
                <div className="form__input">
                    <label className = "form__label">File Type</label>
                    <select value={this.state.fileType}
                            onChange={this.onFileTypeChange}
                    >
                        <option value="csv">CSV</option>
                        <option value="tsv">TSV</option>
                        <option value="bar">| separated</option>
                    </select>
                    
                </div>

                
                <div className="form__input">
                    <label className = "form__label">Check if this file has the headers</label>
                    <input name="hasHeaders" type="checkbox" checked={this.state.hasHeaders} onChange={this.handleCheckChange} />
                </div>

                {/* File Path */}
                <div className = "form__input">
                        <input id="fileInput"
                            type="file"
                            ref={(ref) => this.upload = ref}
                            onChange={this.onChangeFile}
                        />
                </div>

                <div className = "form__input center">
                    <button className="button">Import Data</button>
                </div>
            </form>
        )
    }
}