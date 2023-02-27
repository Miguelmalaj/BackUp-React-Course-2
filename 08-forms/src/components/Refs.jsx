import React, { Component, createRef } from 'react';

class Refs extends Component {

    /* constructor(){
        super()
        this.inputText = createRef()
    } */

    inputText = createRef()

    componentDidMount(){
        this.handleFocus()
    }

    handleFocus = () => {
        this.inputText.current.focus()
    }
    render() {
        return (
            <>
                <input type="text" ref={this.inputText} />
                {/* <button onClick={this.handleFocus}>Focus</button> */}
            </>
        );
    }
}

export default Refs;