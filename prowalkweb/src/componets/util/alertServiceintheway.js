import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import mobiscroll from '@mobiscroll/react-lite';
import { MDBBtn } from "mdbreact";


mobiscroll.settings = {
    theme: 'ios'
}


export default class App extends React.Component {
    submit = () => {
        confirmAlert({
            title: 'Confirmation',
            message: 'Are you sure you want to book this walker?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.props.alert()
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    showConfirm() {
        mobiscroll.confirm({
            title: 'Please Rate your Walker',
            message: 'How did you like the serviceeeeeeee?',
            okText: 'Agree',
            cancelText: 'Disagree',

            // Add a rating function here 
            callback: (res) => {
                mobiscroll.toast({
                    message: res ? 'Agreed' : 'Disagreed'
                });
            }
        });
    }

    render() {
        return (
            <div className='walkerProfileBtnDiv'>
                <MDBBtn className="booking-btn" color="default" onClick={this.submit}>Book Now</MDBBtn>
                <mobiscroll.Form>
                    <mobiscroll.FormGroup>
                        <mobiscroll.FormGroupTitle></mobiscroll.FormGroupTitle>
                        <div className="mbsc-btn-group-block">
                            {/* <mobiscroll.Button onClick={this.showAlert}>Alert</mobiscroll.Button> */}
                            <MDBBtn className="booking-btn" color="default" onClick={this.props.onFinishService}>Finish Service</MDBBtn>
                            {/* <mobiscroll.Button onClick={this.showPrompt}>Prompt</mobiscroll.Button> */}
                        </div>
                    </mobiscroll.FormGroup>
                </mobiscroll.Form>
            </div>
            
           
        );
    }
}