import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Dashboard extends React.Component{
    
    render(){
        return (
            <div>
                <Navbar class = "Navbar" bg="primary" variant="light">
                    <Navbar.Brand>
                    Evoke Neuroscience Research Workbench
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}