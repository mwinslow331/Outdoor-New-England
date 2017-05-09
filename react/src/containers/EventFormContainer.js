import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';


class EventFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      image: '',
      description: '',
      startDate: moment(),
      essentialItems: [],
      limit: '',
      messages: [],
      errors: {}
    }
    this.eventNameHandle=this.eventNameHandle.bind(this);
    this.eventImageHandle=this.eventImageHandle.bind(this);
    this.eventDescriptionHandle=this.eventDescriptionHandle.bind(this);
    this.dateHandleChange=this.dateHandleChange.bind(this);
    this.eventEssentialItemsHandle=this.eventEssentialItemsHandle.bind(this);
    this.eventLimitHandle=this.eventLimitHandle.bind(this);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
    this.handleClearForm=this.handleClearForm.bind(this);

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

  eventEssentialItemsHandle(event) {
    event.preventDefault();
    this.setState({ essentialItems: event.target.value })
  }

  eventLimitHandle(event) {
    event.preventDefault();
    this.setState({ limit: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let requestBody = { name: this.state.name, image: this.state.image, description: this.state.description, startDate: this.state.startDate, essentialItems: this.state.essentialItems, limit: this.state.limit }
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
    this.setState({ essentialItems: existingItems.push( event.target.value ) })
    debugger
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      event: [],
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
      let parsed = respsonse.json()
      return parsed
    }).then(ids => {
      debugger
      let newState = [...this.state.events, event]
      this.setState({events: newState})
    })
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return(
      <div id='app'>
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

          <form className="add-item-form callout" onSubmit={this.addItemSubmit}>
            <TextField
              content={this.state.essentialItems}
              label="Essential Items"
              name="essential_items"
              onChange={this.eventEssentialItemsHandle}
            />
            <div className="essential-button">
              <input className="button" type="submit" value="Add Item"/>
              <button className="button" onClick={this.handleClearForm}>Clear</button>
            </div>
          </form>

          <TextField
            content={this.state.limit}
            label="Limit"
            name="limit"
            onChange={this.eventLimitHandle}
          />

          <div className="event-add-button">
            <input className="button" type="submit" value="Add Event"/>
          </div>
        </form>
      </div>
    )
  }

}



export default EventFormContainer;
