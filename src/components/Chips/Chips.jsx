import React from 'react';
import './Chips.scss';

const Chips = (props) => {
    const activeClass = props.activeClass ? 'chips--active': '';

    return (
        <button 
            className={['chips', activeClass].join(' ')}
            onClick={() => props.Click()}>{ props.children }</button>
    )
}

export default Chips;