import React from 'react';
import { List } from './list';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  _onSelect (elem) {
    console.log(elem);
  }

  render() {

    let movies = [
      'Forrest Gump', 'Jurassic Park', 'You have an e-mail', 'Pirates of the Caribean'
    ];

    return (
      <div>
        <h1>List of movies</h1>
        <List items={movies} onSelect={ this._onSelect } />
      </div>
    );
  }
}
