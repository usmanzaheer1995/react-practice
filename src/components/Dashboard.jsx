import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                {/* <header className="App-header">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </header> */}
            </div>
        );
    }
}

export default Dashboard;