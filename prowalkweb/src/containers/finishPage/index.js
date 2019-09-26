import React from 'react';
import Form from '../../componets/util/form'
import Navbar from '../../componets/util/navbar'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default class FinishPage extends React.Component {


    render() {

        return (

            <div>

                <Navbar />
                <h1>Write to us</h1>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="4"></MDBCol>
                        <MDBCol size="8"><Form /></MDBCol>
                        <MDBCol size="4"></MDBCol>
                    </MDBRow>
                </MDBContainer>



            </div>
        );



    }


}

