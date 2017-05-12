// import React, { Component } from 'react';
// import EssentialItemField from '../components/EssentialItemField';
//
// class EssentialFormContainer extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       errors: {},
//       name: ''
//     }
//     this.eventEssentialItemsHandle=this.eventEssentialItemsHandle.bind(this);
//   }
//
//   essentialNameChange(event) {
//     event.preventDefault();
//     this.setState({ name: event.target.value })
//   }
//
//   essentialItemAdd(event) {
//     event.preventDefault();
//     let eventItems = { name: this.state.name }
//
//     this.props
//   }
//
//   render(){
//     return(
//       <EssentialItemField
//         content={this.state.name}
//         label="Essential Items"
//         name="essential_items"
//         onChange={this.eventEssentialItemsHandle}
//       />
//
//       <div className="essential-button">
//         <input className="button" type="submit" value="Add Item"/>
//       </div>
//     )
//   }
// }
//
// import default EssentialFormContainer;
