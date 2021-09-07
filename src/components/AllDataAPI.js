import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Datacomponentent from './Datacomponent';


class AllDataAPI extends Component {
  
    render() {
        
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                <Datacomponentent Chocolates={this.props.getAllallChocolate} addToFavorite={this.props.addToFavorite}/>
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
