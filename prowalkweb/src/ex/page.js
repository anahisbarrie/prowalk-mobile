import React, { Component } from 'react'

export default class page extends Component {
    state = {
        showRatings: false
    }

    handleFinishService = () => {
        this.setState({ showRatings: true})
    }

    render() {
        return (
            <div>
                <AlertService onFinishService={this.handleFinishService} />
                { this.state.showRatings ? <Ratings /> : <Map /> }
                
            </div>
        )
    }
}

const AlertService = (props) => (
    <button onClick={props.onFinishService}>Finish Service</button>
)

const Ratings = () => (
    <div>Rating</div>
)

const Map = () => (
    <div>Map</div>
)
