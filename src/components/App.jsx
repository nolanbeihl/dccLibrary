import React, {Component} from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";
import BookViewer from "./BookViewer/BookViewer";
import BookCreator from "./BookCreator/BookCreator";

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

goToNextBook = () => {
    let tempBookNumber = this.state.booknumber;
    tempBookNumber++;
    if(tempBookNumber === this.books.length){
        tempBookNumber = 0;
    }
    this.setState({
        booknumber: tempBookNumber
    });
}

goToPreviousBook = () =>{
    let tempBookNumber = this.state.booknumber;
    tempBookNumber --;
    if(tempBookNumber < 0){
        tempBookNumber = this.books.length - 1;
    }
    this.setState({
        booknumber: tempBookNumber
    });
}

createBook = (newBook) => {
    console.log('From the createBook on App Component', newBook);
    this.books.push(newBook);
    this.setState({
        booknumber: this.books.length -1
    })

}

render(){
    return(
        <div className="container-fluid">
            <TitleBar />
            <BookViewer book={this.books[this.state.booknumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook} />
            <BookCreator createNewBook={this.createBook} />        
        </div>
    )
    }
}

export default App;
