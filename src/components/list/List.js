import React from 'react';
import Item from './Item';
import Rx from 'rxjs';

require('./styles/list.scss');

export default class List extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    currentElement: React.PropTypes.number,
    onSelect: React.PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      currentElement: this.props.currentElement || 0
    }

    this.keyups = Rx.Observable.fromEvent(document, 'keyup')
      .filter((e) => {
        return e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'Enter'
      });
  }

  componentDidMount() {
    this.subscription = this.keyups.subscribe(this._arrowKeysHandler.bind(this));
  }

  componentWillUnmount() {
    this.subscription.dispose()
  }

  _arrowKeysHandler(e) {
    let { currentElement } = this.state;
    let { items } = this.props;
    let items_len = items.length;

    switch (e.code){
      case 'ArrowDown':
        currentElement = (currentElement + 1) % items_len
        break;
      case 'ArrowUp':
        currentElement = (currentElement == 0) ? items_len - 1 : currentElement - 1;
        break;
      case 'Enter':
        this.props.onSelect( items[currentElement] );
        break;
    }

    this.setState({
      currentElement
    });
  }

  render() {
    let { currentElement } = this.state;

    let list_items = this.props.items.map(function(elem, idx) {
      return (<Item key={idx} text={elem} active={ idx == currentElement } />);
    });

    return (
      <ul className="list-items">
        { list_items }
      </ul>
    );
  }
}
