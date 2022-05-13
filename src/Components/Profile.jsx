import React, { Component } from "react";

export default class Profile extends Component {
    // state accept all dataTypes
    state = {
        fullName: "Krishna",
        bio:"i love ocean",
        imgSrc:"data:image/jpeg;base64,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",
        profession:"still dont know",
        counter: 0,
        timer: null,
    };
    // access to value nameOfObject.key
    componentDidMount() {
        this.setState({
            timer: setInterval(() => {
                this.setState({
                    counter: this.state.counter + 1,
                });
            }, 1000),
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.fullName}</h1>
                <p>{this.state.bio}</p> 
                <img src={this.state.imgSrc} alt="error" />
                <p>{this.state.profession}</p>
                <h2>{this.state.counter}</h2>
            </div>
        );
    }
}
