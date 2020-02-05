import React from 'react';
import ImportForm from './ImportForm';

export class ImportPage extends React.Component {
    constructor(props){
        super(props);

        this.runImport = this.runImport.bind(this);
    }

    runImport(){
        console.log("I've been clicked")
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
                    <ImportForm />
                </div>
            </div>
        )
    }
}


export default ImportPage;