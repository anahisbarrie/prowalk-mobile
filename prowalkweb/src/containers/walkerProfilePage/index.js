import React from 'react';
import { Component } from 'react';
import Map from '../../componets/util/map';
import WalkerProfile from '../../componets/walkerOverlay';
// import WalkConfirmation from '../../componets/util/walkConfirmation';
import walkerData from '../../data/walkerInfo/affiliatesInfo';
import AlertService from '../../componets/util/alertServiceintheway';
import Rating from '../../componets/util/rating';
import Timer from '../../componets/util/timer';
import Layout from '../../componets/util/Layout';





export default class WalkerPage extends Component {
    state = {
        showline: false,
        selectedAffiliate: {},
        userposition: {},
        showRating: false,
        showbuttons: true
    }

    componentDidMount() {
        console.log(window.location.pathname)
        var pathname = window.location.pathname
        var id = pathname.split("/")[pathname.split("/").length - 1]
        console.log("id", id);
        console.log("walker data", walkerData)
        var selectedAffiliate = {}
        walkerData.affiliates.forEach(e => {
            // you should use 2 equal signes when trying to compare a string with integer
            console.log('e', e)
            if (e.id == id) {
                selectedAffiliate = e
            }
        })

        let userposition = JSON.parse(localStorage.getItem('position'))



        this.setState(
            {
                pictureprofile: selectedAffiliate.pictureProfile,
                name: selectedAffiliate.name,
                occupation: selectedAffiliate.Ocuppation,
                city: selectedAffiliate.city,
                description: selectedAffiliate.description,
                selectedAffiliate,
                userposition

            }
        )
        console.log('selectedAffiliate', selectedAffiliate)
    }

    showline = () => {
        this.setState({
            showline: true,
           
        },

            () => { alert('GET READY FOR YOUR SERVICE, YOUR WALKER WILL ARRIVE IN 20 MIN!') })
    }

    handleFinishService = () => {
        console.log('hey')
        this.setState({ showRating: true, showbuttons:false })
    }

    render() {
        return (
            <Layout>

                <div>
                    <div>
                        <h1>Service in progress!</h1>

                        
                            <WalkerProfile
                                pictureprofile={this.state.pictureprofile}
                                namexyz={this.state.name}
                                ocuppationxyz={this.state.occupation}
                                city={this.state.city}
                                description={this.state.description}
                            />
                    </div>
                    <div>


                    {
                        this.state.showbuttons ?
                            <AlertService
                                onFinishService={this.handleFinishService}
                                alert={() => this.showline()} /> : null
                    }

                    </div>

                    
                    <div className="ratingDiv">
                        {this.state.showRating ? <Rating /> :
                            <Map
                                showline={this.state.showline}
                                latitude={this.state.userposition.latitude}
                                longitude={this.state.userposition.longitude}
                                affiliateslatitude={this.state.selectedAffiliate.latitude}
                                affiliateslongitude={this.state.selectedAffiliate.longitude}
                            />
                        }
                    </div>




                    {/* <div>
                    <Timer />
                </div>
                 */}
                </div>
            </Layout>

        );
    }
}

