import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { AuthButton, Credits } from './styles'
import Payments from '../Payments'




class Header extends Component {

  renderContent = () => {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <AuthButton href="/auth/google">Login With Google</AuthButton>
        )
      default:
        return [
          <Payments key='1' />,
          <Credits key='2'>Credits: {auth.credits}</Credits>,
          <AuthButton key='3' href="/api/logout">Logout</AuthButton>
        ]
    }
  };

  render() {
    const { auth } = this.props

    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              <Link
                to={auth ? '/surveys' : '/'}
                style={{ textDecoration: 'none', color: 'white' }}>
                Email-Feedback
              </Link>
            </Typography>
            {this.renderContent()}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.account.auth
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
