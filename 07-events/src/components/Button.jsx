import React from 'react';

const Button = ({ text, onEventClick }) => {
    return (<button onClick={onEventClick}>{ text }</button>);
}

export default Button;
