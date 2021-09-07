import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import FavoriteChoclate from './FavoriteChoclate.js';
import ModalCom from './ModalCom.js';

class MyFavorites extends React.Component {

  render() {
    console.log('MyFavorites selectedOne ',this.props.selectedOne);
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <FavoriteChoclate selectedChocolate={this.props.selectedChocolate} favChocolate={this.props.favChocolate} deleteChocolate={this.props.deleteChocolate}  showModal={this.props.showModal}/>
        <ModalCom oneChocolate={this.props.selectedOne} hideModal={this.props.hideModal} show={this.props.show} updateChoclate={this.props.updateChoclate}/>
      </>
    )
  }
}

export default withAuth0(MyFavorites);

