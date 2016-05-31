import React from 'react';

export default class Item extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        className={ this.props.active ? 'active' : '' }>
        { this.props.text }
      </li>
    );
  }
}
