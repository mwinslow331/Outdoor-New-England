import React, { Component } from 'react';
import EventFormContainer from './EventFormContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    this.eventPopulator = this.eventPopulator.bind(this);
  }

  eventPopulator(submission) {
    this.setState({ events: this.state.events.concat(submission) })
  }
debugger
  render() {
    return (
      <div className="row">
        <div className="small-9 small-centered columns">
          <EventFormContainer eventPopulator={this.eventPopulator} />
        </div>
      </div>
    );
  }
}

export default App;
