import React from 'react'
import Button from './button';

export const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{ title }</h1>
            <Button text={ showAdd ? 'Close' : 'Add' } color={ !showAdd ? '#00c853' : '#b71c1c' } onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
