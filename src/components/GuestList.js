import React from 'react';

const GuestList = props => 

    <ul>
    { props.guests.map((guest, index) => 
        <li key={index}>
            <span>{guest.name}</span>
                <label>
                    <input 
                        type="checkbox" 
                        checked={guest.isConfirmed}
                    /> Confirmed
                </label>
            <button>edit</button>
            <button>remove</button>
        </li>
    )}
    </ul>;

export default GuestList;
