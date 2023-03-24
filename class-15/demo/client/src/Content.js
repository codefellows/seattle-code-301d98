import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  async componentDidMount() {

    if (this.props.auth0.isAuthenticated) {

      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books'
      }

      const booksResponse = await axios(config);

      this.setState({ books: booksResponse.data });

    }
  }

  render() {
    return (
      <>
        <h1>Books We Love</h1>
        <ul>
          {this.state.books.map(book => (
            <li key={book._id}>{book.title}</li>
          ))}
        </ul>
      </>
    )
  }
}

export default withAuth0(Content);
