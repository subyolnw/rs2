import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

export default function PostForm() {
  return (
    <Formik
      initialValues={{ title: '', body: '' }}
      validationSchema={yup.object().shape({
        title: yup.string().required('ใส่มาดิ'),
        body: yup.string().required()
      })}
      onSubmit={value => console.log(value)}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        touched,
        errors
      }) => (
        <Form>
          <Field name="title"></Field>
          {errors.title && touched.title && <div>{errors.title}</div>}
          <Field name="body" component="textarea"></Field>
          {errors.body && touched.body && <div>{errors.body}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}
