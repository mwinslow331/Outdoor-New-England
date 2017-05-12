import React, { Component } from 'react'

class EventShowContainer extends Component {
  constructor(props){
    super(props);
    this.setState = {
      events = []
    }
  }

  componentDidMount(){
    fetch('/api/v1/essentials/{$events}')
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(ids => {
      this.setState(ids: ids)
    })
  }

  componentDidMount(){
    fetch('/api/v1/essentials/{$essential_items}')
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(ids => {
      this.setState(ids: ids)
    })
  }

  render(){
    return(

    )
  }

}
