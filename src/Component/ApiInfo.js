import React, { Component } from 'react';

class ApiInfo extends React.Component {
    state = {
      isLoading: true,
      posts: [],
      error: null
    };
  
    fetchUsers() {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            posts: data,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
      this.fetchUsers();
    }
    render() {
      const { isLoading, posts, error } = this.state;

      return (
        <React.Fragment>
          <h1>Blog list</h1>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            posts.map(user => {
              const { id, title, body, userId } = user;
              return (
                <div className="single-blog" key={id}>   
                    <p>Post Id: {id}</p>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <p>UseId: {userId}</p>
                </div>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </React.Fragment>
      );
    }
  }
  export default ApiInfo