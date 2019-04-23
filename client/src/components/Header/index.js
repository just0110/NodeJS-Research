import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { AuthButton } from './styles'




class Index extends Component {

  renderContent = () => {
    const { isLoggedIn } = this.props;
    switch (isLoggedIn) {
      case null:
        return;
      case false:
        return (
          <AuthButton href="/auth/google">LOGIN WITH GOOGLE</AuthButton>
        )
      default:
        return (
          <AuthButton href="/api/logout">LOGOUT</AuthButton>
        )
    }
  };

  render() {
    const { isLoggedIn } = this.props

    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              <Link
                to={isLoggedIn ? '/surveys' : '/'}
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
  isLoggedIn: state.account.isLoggedIn
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Index)
