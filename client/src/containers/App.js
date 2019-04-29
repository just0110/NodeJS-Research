import React, { Component }from 'react'
import { connect } from "react-redux"
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Header from "../components/Header"
import Landing from "./Landing"
import Dashboard from "./Dashboard"
import { fetchUser } from "../redux/actions"
import Splash from "../components/Splash";
import NewSurvey from "./NewSurvey";


class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>

              <Route exact path="/" component={Splash} />
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={NewSurvey} />

              <Redirect exact from="*" to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

const mapDispatchToProps = {
  fetchUser
};

export default connect(null, mapDispatchToProps)(App)
