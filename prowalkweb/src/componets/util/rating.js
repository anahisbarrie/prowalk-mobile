import React from 'react';
// import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
import { MDBMedia, MDBIcon } from 'mdbreact';
import { MDBBtn } from "mdbreact";

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
                <h2>Rating: {rating}</h2>
                <StarRatingComponent
                    name="rate1"
                    starCount={10}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
                <div>

                </div>
                <div>
                    <div className="ButtonToolbar">
                        {/* <Button variant="primary" type="submit">Submit</Button> */}
                        <MDBBtn className="booking-btn" color="default" href="/finish">Submit</MDBBtn>
                    </div>
                </div>
            </div>
        );
    }
}

// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );

// const MediaObjectPage = () => {
//     return (
//       <MDBMedia list className="mt-3">
//         <MDBMedia tag="li">
//           <MDBMedia left href="#">
//             <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="Generic placeholder image" />
//           </MDBMedia>
//           <MDBMedia body>
//             <MDBMedia heading>
//               Anna Smith
//               </MDBMedia>
//             <MDBIcon icon="star" className="blue-text" />
//             <MDBIcon icon="star" className="blue-text" />
//             <MDBIcon icon="star" className="blue-text" />
//             <MDBIcon icon="star" className="blue-text" />
//             <MDBIcon icon="star" className="grey-text" />
//             <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
//           </MDBMedia>
//         </MDBMedia>
//         <MDBMedia tag="li">
//           <MDBMedia left href="#">
//             <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg" alt="Generic placeholder image" />
//           </MDBMedia>
//           <MDBMedia body>
//             <MDBMedia heading>
//               Anna Smith
//               </MDBMedia>
//             <MDBIcon icon="star" className="blue-text" />
//             <MDBIcon icon="star" className="blue-text" />
//             <MDBIcon icon="star" className="blue-text" />
//             <MDBIcon icon="star" className="grey-text" />
//             <MDBIcon icon="star" className="grey-text" />
//             <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
//           </MDBMedia>
//         </MDBMedia>
//         <MDBMedia tag="li">
//           <MDBMedia left href="#">
//             <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="Generic placeholder image" />
//           </MDBMedia>
//           <MDBMedia body>
//             <MDBMedia heading>
//               Natalie Doe
//               </MDBMedia>
//             <MDBIcon icon="star" className="blue-text" />
//             <MDBIcon icon="star" className="blue-text" />
//             <MDBIcon icon="star" className="blue-text" />
//             <MDBIcon icon="star" className="blue-text" />
//             <MDBIcon icon="star" className="grey-text" />
//             <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
//           </MDBMedia>
//         </MDBMedia>
//       </MDBMedia>
//     );
//   }
  
//   export default MediaObjectPage;