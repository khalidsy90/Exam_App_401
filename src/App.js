import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Login from "./Login";
import MyFavorites from "./components/MyFavorites";
import AllDataAPI from "./components/AllDataAPI";
import Footer from "./Footer";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Chocolates: [],
      selectedChocolate: [],
      favChocolate: [],
      show: false,
      selectedOne: {},
    };
  }
  async componentDidMount() {
    console.log("componentDidMount running");
    let allChocolate = await axios.get(
      `${process.env.REACT_APP_SERVER}/Chocolate`
    );
    await this.setState({
      Chocolates: allChocolate.data,
    });
    console.log(this.state.Chocolates);
  }

  addToFavorite = async (item) => {
    let info = {
      email: this.props.auth0.user.email,
      title: item.title,
      imageUrl: item.imageUrl,
    };

    let addNewRow = await axios.post(
      `${process.env.REACT_APP_SERVER}/Chocolate`,
      info
    );
    this.setState({
      favChocolate: addNewRow.data,
    });
  };

  deleteChocolate = async (item) => {
    let del = await axios.delete(
      `${process.env.REACT_APP_SERVER}/Chocolate/${item._id}/${this.props.auth0.user.email}`
    );

    await this.setState({
      favChocolate: del.data,
    });
  };
  showModal = (item) => {
    console.log("showModal invoked");
    this.setState({
      selectedOne: item,
      show: true,
    });
  };
  hideModal = () => {
    this.setState({
      show: false,
    });
  };
  updateChoclate = async (event) => {
    console.log("from updateChoclate sssssss");
    event.preventDefault();
    let info = {
      email: this.props.auth0.user.email,
      title: event.target.title.value,
      imageUrl: event.target.imageUrl.value,
      id: this.state.selectedOne._id,
    };
    let updateOne = await axios.put(
      `${process.env.REACT_APP_SERVER}/Chocolate`,
      info
    );
    await this.setState({
      favChocolate:updateOne.data
    })
  };
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? (
                <MyFavorites
                  selectedChocolate={this.state.selectedChocolate}
                  favChocolate={this.state.favChocolate}
                  deleteChocolate={this.deleteChocolate}
                  updateChoclate={this.updateChoclate}
                  showModal={this.showModal}
                  hideModal={this.hideModal}
                  show={this.state.show}
                  selectedOne={this.state.selectedOne}
                />
              ) : (
                <Login />
              )}
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/getAPIData">
              <AllDataAPI
                getAllallChocolate={this.state.Chocolates}
                addToFavorite={this.addToFavorite}
              />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
