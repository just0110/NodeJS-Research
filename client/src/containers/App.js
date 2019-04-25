import React, { Component }from 'react'
import { connect } from "react-redux"
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Header from "../components/Header"
import Landing from "./Landing"
import Dashboard from "./Dashboard"
import { fetchUser } from "../redux/actions"

const SurveyNew = () => <h2>SurveyNew</h2>



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

              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />

              <Redirect exact from="*" to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


const mapStateToProps = () => ({})

const mapDispatchToProps = {
  fetchUser
}

export default connect(null, mapDispatchToProps)(App)
