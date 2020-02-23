import React from 'react';

const GuestName = props => {
    if (props.isEditing) {
        return (
            <input type="text" value={props.children} />
        );
    }

    return (
        <span>
            {props.children}
        </span>
    );
};

export default GuestName;