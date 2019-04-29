import React, { Component }from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

class Landing extends Component {
  render() {
    const { auth } = this.props;
    if (auth) return <Redirect to="/home" />

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>
          Email Feedback!
        </h1>
        Collect feedback from your users!
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.account.auth,
});

export default connect(mapStateToProps)(Landing)
