import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import EssentialFormContainer from './EssentialFormContainer'
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';


class EventFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      image: '',
      description: '',
      essentialItems: [],
      startDate: moment(),
      limit: '',
      messages: [],
      errors: {}
    }
    this.eventNameHandle=this.eventNameHandle.bind(this);
    this.eventImageHandle=this.eventImageHandle.bind(this);
    this.eventDescriptionHandle=this.eventDescriptionHandle.bind(this);
    this.dateHandleChange=this.dateHandleChange.bind(this);
    this.eventLimitHandle=this.eventLimitHandle.bind(this);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
    this.handleClearForm=this.handleClearForm.bind(this);
    this.addItemSubmit=this.addItemSubmit.bind(this);
  }
  eventNameHandle(event) {
    event.preventDefault();
    this.setState({ name: event.target.value })
  }

  eventImageHandle(event) {
    event.preventDefault();
    this.setState({ image: event.target.value })
  }

  eventDescriptionHandle(event) {
    event.preventDefault();
    this.setState({ description: event.target.value })
  }

  dateHandleChange(date){
    this.setState({
      startDate: date
    });
  }

  eventLimitHandle(event) {
    event.preventDefault();
    this.setState({ limit: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let requestBody = {
      name: this.state.name,
      image: this.state.image,
      description: this.state.description,
      startDate: this.state.startDate,
      essentialItems: this.state.essentialItems, limit: this.state.limit
    }
    fetch('/api/v1/events', { method: 'POST', body: JSON.stringify(requestBody) })
    .then(resposne => {
      let parsed = response.json()
      return parsed
    }).then(message => {
      this.setState({ message: message })
    }
    )
  }

  addItemSubmit(event){
    event.preventDefault();
    let existingItems = this.state.esssentialItems
    this.setState({ essentialItems: existingItems.concat( [event.target.value] ) })
    debugger
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      events: [],
      name: '',
      image: 1,
      description: '',
      startDate: '',
      essentialItems: [],
      limit: ''
    })
  }

  componentDidMount(){
    fetch(`/api/v1/events/{$event_id}`)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(ids => {
      debugger
      let newState = [...this.state.events, event]
      this.setState({events: newState})
    })
  }

  render() {
    let addEssentialItem = this.props.events.map((item, index) => {
      return(
        <div key={"item-info-" + index} className="ess-items">
          {event.name}
        </div>
      )
    })
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return(
      <form id="event-form" className="event-form callout" onSubmit={this.handleFormSubmit}>
        {errorDiv}
        <TextField
          content={this.state.name}
          label="Trip"
          name="trip"
          onChange={this.eventNameHandle}
        />

        <TextField
          content={this.state.image}
          label="Image Url"
          name="image_url"
          onChange={this.eventImageHandle}
        />

        <TextArea
          content={this.state.description}
          label="Description"
          name="description"
          onChange={this.eventDescriptionHandle}
          rows={5}
        />

        <DatePicker
          selected={this.state.startDate}
          onChange={this.dateHandleChange}
        />

        <div className='item-adder'>
          {addEssentialItem}
        </div>
        <EssentialFormContainer
          addItemSubmit={this.addItemSubmit}
        />

        <TextField
          content={this.state.limit}
          label="Limit"
          name="limit"
          onChange={this.eventLimitHandle}
        />

        <div className="event-add-button">
          <input className="button" type="submit" value="Add Event"/>
          <button className="button" onClick={this.handleClearForm}>Clear</button>
        </div>
      </form>
    )
  }

}



export default EventFormContainer;
