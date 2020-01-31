import React, {Component} from 'react'

export default class DisplayData extends Component {

    displayAllData = () => {
        return this.props.formData.map(obj => {
            return <h2>{obj.firstName} {obj.lastName}</h2>
        })
    }

    render () {
        return this.displayAllData()
    }
}