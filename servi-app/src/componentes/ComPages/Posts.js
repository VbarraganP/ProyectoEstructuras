import React, { Component } from 'react';
import firebase from 'firebase';
import FileUpload from "./FileUpload.js";

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            pictures: []
        };
        //bindeo de las funciones con this.
        this.handleUpload = this.handleUpload.bind(this);
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user });
        });

        firebase.database().ref('pictures').on('child_added', snapshot => {
            this.setState({
                pictures: this.state.pictures.concat(snapshot.val())
            });
        });
    }
    
    handleUpload(event) {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
        const task = storageRef.put(file);

        task.on('state_changed', snapshot => {
            
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percentage
            })
        }, error => {
            console.error(error.message);
        }, () => {
           
            const record = {
                photoURL: this.state.user.photoURL,
                displayName: this.state.user.displayName,
                image: task.snapshot.downloadURL
            };
            const dbRef = firebase.database().ref('pictures');
            const newPicture = dbRef.push();
            newPicture.set(record);
        });
    }

    render() {
        return(
            <div>
                <FileUpload onUpload={this.handleUpload} />

                {
                    this.state.pictures.map(picture => (
                        <div className="App-card">
                            <figure className="App-card-image">
                                <img width="320" src={picture.image} />
                                <figCaption className="App-card-footer">
                                    <img className="App-card-avatar" src={picture.photoURL} alt={picture.displayName} />
                                    <span className="App-card-name">{picture.displayName}</span>
                                </figCaption>
                            </figure>
                        </div>
                    )).reverse()
                }

            </div>
        );
    };
}


export default Posts;