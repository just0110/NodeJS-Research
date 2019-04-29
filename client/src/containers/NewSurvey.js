import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { SurveySchema } from '../helpers/validations'
import { submitSurvey } from '../redux/actions'


class NewSurvey extends Component {
  onFormSubmit = (data) => {
    const { history, submitSurvey } = this.props
    submitSurvey(data, history)
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{ title: '', subject: '', body: '', recipients: '' }}
          validationSchema={SurveySchema}
          onSubmit={values => this.onFormSubmit(values)}
        >
          {({ values, errors, handleBlur, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <Paper style={{ margin: 50, padding: 10 }} elevation={1}>
                <Typography variant="h5" component="h3">
                  Create new survey!
                </Typography>
                <Typography component="p">
                  Create your new survey easy and fast. Next you will easily send it to your user.
                </Typography>

                <TextField
                  id="title"
                  label="Survey Title"
                  value={values.title}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  onBlur={handleBlur}
                  error={!!errors.title}
                />

                <TextField
                  id="subject"
                  label="Subject Line"
                  multiline
                  value={values.subject}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  onBlur={handleBlur}
                  error={!!errors.subject}
                />

                <TextField
                  id="body"
                  label="Email Body"
                  multiline
                  value={values.body}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  onBlur={handleBlur}
                  error={!!errors.body}
                />

                <TextField
                  id="recipients"
                  label="Recipients"
                  multiline
                  value={values.recipients}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  onBlur={handleBlur}
                  error={!!errors.recipients}
                />

                <Button
                  style={{ marginTop: 20 }}
                  disabled={!values.recipients || !values.body || !values.title || !values.subject || !!errors.subject || !!errors.recipients || !!errors.body || !!errors.title}
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submit"
                  onClick={handleSubmit}>
                  Submit new survey
                </Button>
              </Paper>
            </form>
          )}
        </Formik>
      </div>
    )
  }
}

const mapStateToProps = state => ({ });

const mapDispatchToProps = {
  submitSurvey,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewSurvey))
