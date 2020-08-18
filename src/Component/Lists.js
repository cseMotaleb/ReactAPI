import React, { Component } from 'react';

class Lists extends React.Component {
  state = {
    users: [
      { userid: 1, username: 'Jairam Ramesh', name: 'Green Signals' },
      { userid: 2, username: 'James Joyce', name: 'Ulysses' },
      { userid: 3, username: 'Janardan Thakur', name: 'All the Prime Ministers Men' },
    ]
  };

  handleClick = (event) => {
    this.setState({ clicked: Number(event.target.dataset.id) });
  }

  render() {
    const { clicked, users } = this.state;
    const user = users.find(({ userid }) => userid === clicked);
    return (
      <div onClick={this.handleClick}>
        {users.map(({ userid, username, name }) => (
          <div key={userid} data-id={userid}>{name} ({username})</div>
        ))}

        <p>user selected: {user ? user.name : 'none'}</p>
      </div>
    );
  }
}

export default Lists