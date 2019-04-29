import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Splash = ({ auth }) =>
  auth ? <Redirect to="/surveys" /> : <Redirect to="/landing" />


const mapStateToProps = state => ({
  auth: state.account.auth,
});

export default connect(
  mapStateToProps,
  null,
)(Splash)
