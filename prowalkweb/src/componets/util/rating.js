import React from 'react';
// import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';

// Be sure to include styles at some point, probably during your bootstraping
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    render() {
        const { rating } = this.state;

        return (
            <div>
                <h2>Rating from state: {rating}</h2>
                <StarRatingComponent
                    name="rate1"
                    starCount={10}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
                <div>

                </div>
                <div>
                    <ButtonToolbar>
                        <Button variant="primary" type="submit">Submit</Button>
                
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}

// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );