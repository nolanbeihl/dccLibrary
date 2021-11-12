import React, {Component} from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "Blood Sucking Fiends", author: "Christopher Moore"},
            {title: "You Suck", author: "Christopher Moore"},
            {title: "Bite Me", author: "Christopher Moore"},
        ];
        this.state = {
            booknumber : 0
        };
    }
render(){
    return(
        <div className="container-fluid">
            <TitleBar />
            <div className="row">
                <div className="col-md-4">
                    {/*Button here to move to the preivous book views*/}
                </div>
                <div className="col-md-4">
                    {/*Display book with cover here*/}
                    <h1>{this.books[this.state.booknumber].title}</h1>
                    <h4>{this.books[this.state.booknumber].author}</h4>
                </div>
                <div className="col-md-4">
                    {/*Button here to move to the next book views*/}
                </div>
            </div>
        </div>
    )
    }
}

export default App;
