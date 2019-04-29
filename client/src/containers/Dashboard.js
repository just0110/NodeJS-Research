import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


class Dashboard extends Component {

  render() {

    return (
      <div>
        <Paper style={{ margin: 20, padding: 10 }} elevation={1}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>

        <Paper style={{ margin: 20, padding: 10 }} elevation={1}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>

        <Link to="/surveys/new">
        <Fab
          color="primary"
          aria-label="Add"
          style={{ position: 'absolute', right: '1.7em' }}>
          <AddIcon />
        </Fab>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({ });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
