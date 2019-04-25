import React, { Component } from 'react'
import { connect } from 'react-redux'


class Dashboard extends Component {

  render() {

    return (
      <div>
        <h1>
          Hello Dashboard!
        </h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({ });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
