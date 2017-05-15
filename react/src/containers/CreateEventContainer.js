import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class CreateEventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      description: '',
      essentialItems: [],
      itemInput: '',
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
    this.eventEssentialsHandle=this.eventEssentialsHandle.bind(this);
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

  eventEssentialsHandle(event){
    event.preventDefault();
    this.setState({ itemInput: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let requestBody = {
      name: this.state.name,
      image: this.state.image,
      description: this.state.description,
      date: this.state.startDate,
      essentialItems: this.state.essentialItems,
      limit: this.state.limit
    }
    fetch('/api/v1/events', {
      method: 'POST',
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(requestBody) })
    .then(response => response.json())
    .then(message => {
      debugger;
      if (message[0]) {
        window.location = "/"
      } else {
      this.setState({ message: message })
      }
    });
  };

  addItemSubmit(event){
    this.setState({
      essentialItems: this.state.essentialItems.concat([this.state.itemInput])
    })
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      events: [],
      name: '',
      image: '',
      description: '',
      startDate: '',
      essentialItems: [],
      limit: '',
      itemInput: ''

    })
  }

  render(){
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return(
      <div className="event-form">

        <label for="name">Name
        <br/>
          <input type="text" className="name" value={this.state.name} onChange={this.eventNameHandle}/>
        </label>
        <br/>

        <label for="name">Image Url
        <br/>
          <input type="textarea" className="image-url" value={this.state.image} onChange={this.eventImageHandle}/>
        </label>
        <br/>

        <label for="name">Description
        <br/>
          <input type="text" className="description" value={this.state.description} onChange={this.eventDescriptionHandle}/>
        </label>
        <br/>

        <label for="name">Date
        <br/>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.dateHandleChange}
          />
        </label>
        <br/>

        <label for="name">Essential Items
        <br/>
          <input type="text" className="essentialItems" value={this.state.itemInput} onChange={this.eventEssentialsHandle}/>
          <br/>
          <input type="button" value="Add Item" onClick={this.addItemSubmit}/>
        </label>
        <br/>

        <label for="name">Limit
        <br/>
          <input type="text" className="limit" value={this.state.limit} onChange={this.eventLimitHandle}/>
        </label>
        <br/>

        <input type="button" value="Create Event" onClick={this.handleFormSubmit}/>
        <input type="button" value="Clear" onClick={this.handleClearForm}/>

      </div>
    )
  }
}

export default CreateEventContainer;
