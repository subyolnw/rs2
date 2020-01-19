import { Formik } from 'formik'
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.title && touched.title && <div>{errors.title}</div>}
          <textarea
            name="body"
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.body && touched.body && <div>{errors.body}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  )
}
