import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><span className='textHeader'>To Do List App</span></div>
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;