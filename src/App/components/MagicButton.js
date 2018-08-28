import React from 'react';

function MagicButton (props) {
    return (<button onClick={props.handleClick}>{props.children}</button>);
}

export default MagicButton;