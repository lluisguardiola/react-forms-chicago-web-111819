import React from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

export default class ParentComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "John",
            lastName: "Henry",
            formData: []
        }
    }

    handleFirstNameChange = event => {
        event.preventDefault()
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        event.preventDefault()
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            formData: [...prevState.formData, {firstName: this.state.firstName, lastName: this.state.lastName }]
        })) 
    }

    render() {
        return (
            <div>
                <Form 
                    handleSubmit={this.handleSubmit}
                    handleFirstNameChange={this.handleFirstNameChange}
                    handleLastNameChange={this.handleLastNameChange}
                    formData={this.state}
                />

                <DisplayData formData={this.state.formData} />
            </div>
        )
    }
}