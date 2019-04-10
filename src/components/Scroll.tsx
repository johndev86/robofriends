import React from 'react';

const Scroll = (props: {children?: JSX.Element}) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;