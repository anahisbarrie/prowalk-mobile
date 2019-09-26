import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { MDBBtn } from "mdbreact";

export default class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    render() {
        return (
            <PlacesAutocomplete

                value={this.props.value}
                onChange={this.props.onChange}
                onSelect={this.props.onSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="searchLocationDiv">

                        <div className="insideSearchLocationDiv">

                        <div className="searchLocation">
                            <p>Search Location</p>
                        </div>

                        <input 
                            {...getInputProps({
                                placeholder: 'Search Places',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                //console.log(suggestions)
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                        
                        <MDBBtn className="booking-btn" color="default" onClick={this.props.onCurrentUserLocation}>Current Location</MDBBtn>
                        <div>
                        </div>

                        </div>
                    </div>
                )}
            </PlacesAutocomplete>

        );
    }
}
