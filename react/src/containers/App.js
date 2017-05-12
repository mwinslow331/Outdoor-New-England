import React, { Component } from 'react';
import CreateEventContainer from './CreateEventContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    this.eventPopulator = this.eventPopulator.bind(this);
  }

  eventPopulator(submission) {
    fetch('/api/v1/events',
      credentials: "same-origin"
    )
    .then(response => response.json())
    .then(response => {
      this.setState({ events: response.events })
    })
  }

  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <CreateEventContainer eventPopulator={this.state.eventPopulator} />
        </div>
      </div>
    );
  }
}

export default App;
