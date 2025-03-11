import React, {Component} from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        id='counter'
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton