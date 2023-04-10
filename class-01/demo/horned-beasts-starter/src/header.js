import React from 'react';

class Header extends React.Component {
    render() {
        return <p>Created by {this.props.creator}</p>;
    }
}

export default Header;