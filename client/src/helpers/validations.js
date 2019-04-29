import * as Yup from 'yup'

export const SurveySchema = Yup.object().shape({
  title: Yup.string()
    .required('Survey title is required')
    .min(5),
  subject: Yup.string()
    .required('Subject line is required')
    .min(6),
  body: Yup.string()
    .required('Body is required')
    .min(6),
  recipients: Yup.string()
    .required('At least one recipient is required')
    .min(7),
});
