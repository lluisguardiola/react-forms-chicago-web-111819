import React from 'react';

class Form extends React.Component {
  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   // debugger
  //   let formData = {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName
  //   }

  //   let dataArray = this.state.submittedData.concat(formData)

  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div> 
  //   })
  // }

  render() {
    return (
      <div>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <input 
            type="text" 
            onChange={event => this.props.handleFirstNameChange(event)} 
            value={this.props.formData.firstName} 
          />

          <input 
            type="text" 
            onChange={event => this.props.handleLastNameChange(event)} 
            value={this.props.formData.lastName} 
          />
          <input 
            type="submit"
          />
        </form>
        {/* {this.listOfSubmissions()} */}
      </div>
    )
  }
}

export default Form;